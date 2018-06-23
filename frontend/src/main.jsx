import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: 'react'
    }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      </div> 
  }

}

let container = document.createElement('div')
document.body.appendChild(container)
ReactDOM.render(<App/>, container)
