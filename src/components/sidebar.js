import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: { width: 260 },
  fullList: { width: 'auto' },
};

function SideBar(props) {
  const { classes, sidebarOpen, toggleSidebar, updateSelectedName, names } = props;

  const sideList = (
    <div className={classes.list}>
      <div>
        {names.map(name => (
          <ListItem button key={name} onClick={updateSelectedName(name)}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </div>
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

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  updateSelectedName: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  names: PropTypes.array.isRequired,
};

export default withStyles(styles)(SideBar);
