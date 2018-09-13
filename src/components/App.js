import React from 'react';
import Iframe from 'react-iframe';
import Sidebar from './sidebar';
import TopBar from './topBar';
import uriData from '../data/uriData.json';
import { generateMapFromUriData, getNamesFromUriData } from '../util/processUriMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      names: getNamesFromUriData(uriData),
      uriMap: generateMapFromUriData(uriData),
      selectedName: uriData[0].name,
    };
  }

  toggleSidebar = open => () => {
    this.setState({ sidebarOpen: open });
  };

  updateSelectedName = selectedName => () => {
    this.setState({ selectedName });
  };

  render() {
    const { sidebarOpen, names, uriMap, selectedName } = this.state;
    return (
      <div className="App">
        <TopBar toggleSidebar={this.toggleSidebar} selectedName={selectedName} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={this.toggleSidebar}
          updateSelectedName={this.updateSelectedName}
          names={names}
        />
        <Iframe
          height="100%"
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
