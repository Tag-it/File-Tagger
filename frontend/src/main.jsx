import React, {Component} from 'react';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom'
//import '../style/reset.scss'

import FileTag from '../components/file-tag.jsx';
import Aboutus from '../components/about-us.jsx';
//import SearchPage from '../components/searchpage.jsx';
import HomePage from '../components/homepage.jsx'
//import './style/main.scss'

console.log('inside apps.jsx')
//const store = createStore(budgetcategoryReducer);

class App extends React.Component {
    render() {
      return <BrowserRouter>
        <div>
          <nav>
          <ul>
          <li><Link to="/">Home Page</Link></li>
          {/* <li><Link to="/file-tag">File Tag</Link></li> */}
          <li><Link to="/">Search</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          </ul>
          </nav>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/file-tag" component={FileTag} /> */}
          {/*<Route exact path="/search" component={SearchPage} />*/}
          <Route exact path="/about-us" component={Aboutus} />
        </div>
      </BrowserRouter>
    }
  }
  
  let root = document.createElement('div')
  document.body.appendChild(root)
  ReactDOM.render(<App/>, root)