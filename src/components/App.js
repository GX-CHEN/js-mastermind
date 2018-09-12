import React from 'react';
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
      </div>
    );
  }
}

export default App;
