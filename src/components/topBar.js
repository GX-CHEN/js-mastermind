import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
  root: { flexGrow: 1 },
  topBarTitle: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
  state = { anchorEl: null };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes, toggleSidebar, selectedName } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton onClick={toggleSidebar(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.topBarTitle}>
              {selectedName}
            </Typography>
            <IconButton
              aria-label="More"
              color="inherit"
              aria-haspopup="true"
              aria-owns={open ? 'long-menu' : null}
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            PaperProps={{ style: { width: 200 } }}
          >
            <MenuItem
              key="homepage"
              onClick={() => window.open('https://gx-chen.github.io/homepage/index.html', '_blank')}
            >
              My Homepage
            </MenuItem>
            <MenuItem key="code-source" onClick={() => window.open('https://github.com/GX-CHEN', '_blank')}>
              My Github
            </MenuItem>
            <MenuItem
              key="email"
              onClick={() => window.open('mailto:chengongxia1990@gmail.com?Subject=Hello%20Gongxia', '_top')}
            >
              Email Me
            </MenuItem>
          </Menu>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  selectedName: PropTypes.string.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
