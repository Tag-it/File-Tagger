import React, {Component} from 'react';
import '../style/nav.scss';

class Navbar extends React.Component {
  render() {
    return (<div className="homepage">
      <ul className="topmenu">
        <li><a className='navbar' href="/">Home</a></li>
        <li><a className='navbar' href="/file-tag">File-Tag</a></li>
        <li><a className='navbar' href="/search">Search</a></li>
        <li><a className='navbar' href="/about-us">About-Us</a></li>
      </ul>
      </div>
    );
  }
}

export default Navbar;