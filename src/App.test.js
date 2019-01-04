import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // adding code under render

  // now that test is written, try in terminal
  // 'npm run test'
  expect(div.innerHTML).toContain('HI THERE!');

  ReactDOM.unmountComponentAtNode(div);
});

// TODO: this file came with boilerplate code