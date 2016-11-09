import React from 'react';
import { Nav } from '../nav/Nav';
import '../../../../styles/index.scss';

export const App = props => (
  <div>
    <Nav />
    <div className="main-container">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};
