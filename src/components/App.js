import React from 'react';
import Iframe from 'react-iframe';
import Sidebar from './SideBar';
import TopBar from './TopBar';
import uriData from '../data/uriData.json';
import { generateMapFromMapOfArray, generatedSwapFromMapOfArray } from '../util/processUriMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      uriMap: generateMapFromMapOfArray(uriData),
      swapUriMap: generatedSwapFromMapOfArray(uriData),
      selectedName: uriData['JS Basics'][0].name,
      permanentSideBar: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    const urlParams = new URLSearchParams(window.location.search);
    const uri = urlParams.get('id');
    const { swapUriMap } = this.state;
    if (uri) {
      this.setState({ selectedName: swapUriMap[uri] });
    }
  }

  toggleSidebar = open => () => {
    this.setState({ sidebarOpen: open });
  };

  handleClickItem = selectedName => () => {
    this.setState({
      selectedName,
      sidebarOpen: false,
    });
    const { uriMap } = this.state;
    window.location = `${window.location.origin}/js-mastermind/?id=${uriMap[selectedName]}`;
  };

  handleResize = () => {
    this.setState({ permanentSideBar: window.innerWidth > 1160 });
  };

  render() {
    const { sidebarOpen, uriMap, selectedName, permanentSideBar } = this.state;
    return (
      <div className="App">
        <TopBar toggleSidebar={this.toggleSidebar} selectedName={selectedName} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={this.toggleSidebar}
          handleClickItem={this.handleClickItem}
          uriData={uriData}
          selectedName={selectedName}
          permanentSideBar={permanentSideBar}
        />
        <main style={{ marginLeft: permanentSideBar ? 260 : 0 }}>
          <div className="iframe-wrapper">
            <Iframe
              position="relative"
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
        </main>
      </div>
    );
  }
}

export default App;
