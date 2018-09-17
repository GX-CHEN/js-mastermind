import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import NestedList from './NestedList';
import { setSelectedItem } from '../util/processUriMap';

const styles = {
  list: { width: 260 },
  sectionTitle: { fontWeight: 600 },
  fullList: { width: 'auto' },
};

function SideBar(props) {
  const { classes, sidebarOpen, toggleSidebar, handleClickItem, uriData, selectedName, permanentSideBar } = props;

  const sideList = (
    <div className={classes.list}>
      <div>
        {Object.keys(uriData).map(key => (
          <NestedList
            handleClickItem={handleClickItem}
            dataArray={setSelectedItem(uriData[key], selectedName)}
            title={key}
            key={key}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Drawer variant={permanentSideBar ? 'permanent' : 'temporary'} open={sidebarOpen} onClose={toggleSidebar(false)}>
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
  permanentSideBar: PropTypes.bool.isRequired,
  uriData: PropTypes.object.isRequired,
  selectedName: PropTypes.string.isRequired,
};

export default withStyles(styles)(SideBar);
