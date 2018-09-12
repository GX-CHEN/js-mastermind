import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  list: { width: 250 },
  fullList: { width: 'auto' },
};

class TemporaryDrawer extends React.Component {
  state = { left: false };

  render() {
    const { classes, sidebarOpen, toggleSidebar } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <Drawer open={sidebarOpen} onClose={toggleSidebar(false)}>
          <div tabIndex={0} role="button" onClick={toggleSidebar(false)} onKeyDown={toggleSidebar(false)}>
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
