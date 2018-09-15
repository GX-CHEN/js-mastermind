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
      uriES5Array: setSelectedItem(uriData.ES5, uriData.ES5[0].name),
      uriES6Array: setSelectedItem(uriData.ES6, uriData.ES6[0].name),
      uriMap: { ...generateMapFromUriData(uriData.ES5), ...generateMapFromUriData(uriData.ES6) },
      selectedName: uriData.ES5[0].name,
    };
  }

  toggleSidebar = open => () => {
    this.setState({ sidebarOpen: open });
  };

  handleClickItem = selectedName => () => {
    const { uriES5Array, uriES6Array } = this.state;
    this.setState({
      selectedName,
      uriES5Array: setSelectedItem(uriES5Array, selectedName),
      uriES6Array: setSelectedItem(uriES6Array, selectedName),
      sidebarOpen: false,
    });
  };

  render() {
    const { sidebarOpen, uriES5Array, uriES6Array, uriMap, selectedName } = this.state;
    return (
      <div className="App">
        <TopBar toggleSidebar={this.toggleSidebar} selectedName={selectedName} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={this.toggleSidebar}
          handleClickItem={this.handleClickItem}
          uriES5Array={uriES5Array}
          uriES6Array={uriES6Array}
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
