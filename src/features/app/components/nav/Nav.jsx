import React from 'react';
import { Link, IndexLink } from 'react-router';

export class Nav extends React.Component {
  closeMenu = () => {
    if (window.innerWidth < 600) {
      document.getElementById('nav-toggle').click();
    }
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" id="nav-toggle" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <li className="navbar-brand nav-title" href="#">Bootstrap 3 React Boilerplate</li>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <IndexLink to="/" onClick={this.closeMenu} className="link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
              </li>
              <li>
                <Link to="/work" onClick={this.closeMenu} className="link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Configure</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
