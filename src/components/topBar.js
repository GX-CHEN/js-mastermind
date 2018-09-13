import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

function ButtonAppBar(props) {
  const { classes, toggleSidebar, selectedName } = props;
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
          <IconButton aria-label="More" color="inherit" aria-haspopup="true">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  selectedName: PropTypes.string.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
