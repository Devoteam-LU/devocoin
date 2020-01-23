import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'layouts/Page';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page title="title">test</Page>, div);
  ReactDOM.unmountComponentAtNode(div);
});
