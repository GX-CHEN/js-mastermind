import React from 'react';
import Iframe from 'react-iframe';
import Sidebar from './SideBar';
import TopBar from './TopBar';
import uriData from '../data/uriData.json';
import { generateMapFromUriData, setSelectedItem } from '../util/processUriMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      uriArray: setSelectedItem(uriData, uriData[0].name),
      uriMap: generateMapFromUriData(uriData),
      selectedName: uriData[0].name,
    };
  }

  toggleSidebar = open => () => {
    this.setState({ sidebarOpen: open });
  };

  updateSelectedName = selectedName => () => {
    this.setState({ selectedName, uriArray: setSelectedItem(uriData, selectedName) });
  };

  render() {
    const { sidebarOpen, uriArray, uriMap, selectedName } = this.state;
    return (
      <div className="App">
        <TopBar toggleSidebar={this.toggleSidebar} selectedName={selectedName} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={this.toggleSidebar}
          updateSelectedName={this.updateSelectedName}
          uriArray={uriArray}
        />
        <Iframe
          height="calc(100% - 64px)"
          width="100%"
          url={`https://repl.it/@GX_CHEN/${uriMap[selectedName]}?lite=true`}
          scrolling="no"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      </div>
    );
  }
}

export default App;
