import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from 'layouts/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Navigation />
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
