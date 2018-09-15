import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import NestedList from './NestedList';

const styles = {
  list: { width: 260 },
  sectionTitle: { fontWeight: 600 },
  fullList: { width: 'auto' },
};

function SideBar(props) {
  const { classes, sidebarOpen, toggleSidebar, handleClickItem, uriES5Array, uriES6Array } = props;

  const sideList = (
    <div className={classes.list}>
      <div>
        <NestedList handleClickItem={handleClickItem} dataArray={uriES5Array} title="ES5 Tutorial" />
        <NestedList handleClickItem={handleClickItem} dataArray={uriES6Array} title="ES6 Features" />
      </div>
    </div>
  );

  return (
    <div>
      <Drawer open={sidebarOpen} onClose={toggleSidebar(false)}>
        <div tabIndex={0} role="button" onKeyDown={toggleSidebar(false)}>
          {sideList}
        </div>
      </Drawer>
    </div>
  );
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  handleClickItem: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  uriES5Array: PropTypes.array.isRequired,
  uriES6Array: PropTypes.array.isRequired,
};

export default withStyles(styles)(SideBar);
