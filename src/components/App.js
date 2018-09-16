import React from 'react';
import Iframe from 'react-iframe';
import Sidebar from './SideBar';
import TopBar from './TopBar';
import uriData from '../data/uriData.json';
import { generateMapFromMapOfArray } from '../util/processUriMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      uriMap: generateMapFromMapOfArray(uriData),
      selectedName: uriData.ES5[0].name,
    };
  }

  toggleSidebar = open => () => {
    this.setState({ sidebarOpen: open });
  };

  handleClickItem = selectedName => () => {
    this.setState({
      selectedName,
      sidebarOpen: false,
    });
  };

  render() {
    const { sidebarOpen, uriMap, selectedName } = this.state;
    return (
      <div className="App">
        <TopBar toggleSidebar={this.toggleSidebar} selectedName={selectedName} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={this.toggleSidebar}
          handleClickItem={this.handleClickItem}
          uriData={uriData}
          selectedName={selectedName}
        />
        <div className="iframe-wrapper">
          <Iframe
            position="relative"
            height="calc(100vh - 64px)"
            width="100%"
            url={`https://repl.it/@GX_CHEN/${uriMap[selectedName]}?lite=true`}
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }
}

export default App;
