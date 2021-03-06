import React, {Component} from 'react';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
//import '../style/reset.scss'

import FileTag from './file-tag.jsx';
import Navbar from './nav.jsx';
import Aboutus from './about-us.jsx';
import SearchPage from './searchpage.jsx';
import HomePage from './homepage.jsx'
//import './style/main.scss'

console.log('inside apps.jsx')
//const store = createStore(budgetcategoryReducer);

class App extends React.Component {
    render() {
      return <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/file-tag" component={FileTag} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/about-us" component={Aboutus} />
        </div>
      </BrowserRouter>
    }
  }
  
export default App