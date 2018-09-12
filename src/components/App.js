import React from 'react';
import Iframe from 'react-iframe';
import Sidebar from './sidebar';
import TopBar from './topBar';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      selectedItem: null,
    };
  }

  toggleSidebar = open => () => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    const { sidebarOpen } = this.state;
    return (
      <div className="App">
        <TopBar toggleSidebar={this.toggleSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={this.toggleSidebar} />
        <Iframe
          height="100%"
          width="100%"
          url="https://repl.it/@GX_CHEN/for-inandfor-ofloop?lite=true"
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
