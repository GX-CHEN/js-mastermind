import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('smoke test for App render', () => {
  it('ReactDOM renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Enzyme Shallow render without crashing', () => {
    shallow(<App />);
  });
});
