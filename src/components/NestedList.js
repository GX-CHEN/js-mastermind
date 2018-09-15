import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Code from '@material-ui/icons/Code';
import { isSelectedItemInArray } from '../util/processUriMap';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  constructor(props) {
    super(props);
    const { dataArray } = props;
    this.state = { open: isSelectedItemInArray(dataArray) };
  }

  toggleCollapse = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, title, dataArray, handleClickItem } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.toggleCollapse} key={title}>
            <ListItemIcon>
              <Code />
            </ListItemIcon>
            <ListItemText inset primary={title} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dataArray.map(item => (
                <ListItem
                  button
                  className={classes.nested}
                  key={item.name}
                  onClick={handleClickItem(item.name)}
                  selected={item.selected}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  dataArray: PropTypes.array.isRequired,
  handleClickItem: PropTypes.func.isRequired,
};

export default withStyles(styles)(NestedList);
