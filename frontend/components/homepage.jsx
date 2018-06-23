import React, { Component } from 'react';
//import '../style/nav.scss';

class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      url:'',
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  
  handleChange(ev) {
    this.setState({url:ev.target.value})
  }

  handleSubmit(ev) {
    ev.preventDefault()
    console.log(this.state)
  }
  
  render() {
    return (<div className="homepage">
      <h2>Tag-It</h2>
      <div>
        <h1> About this App </h1>
        <p> Have tons of images and need a way to organize them, Tag-It can help </p>
      </div>
      <form onSubmit={this.handleSubmit}>
      <input name="url" type="text" onChange={this.handleChange} value={this.state.url}/>
      <button type="submit">Submit</button>
      </form>
    </div>
    );
  }
}

export default Homepage;
