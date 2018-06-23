import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import FileTag from '../components/file-tag.jsx'
//import '../style/nav.scss';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileTagPage: false,
      url: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({ url: ev.target.value })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    console.log(this.state)
    fetch('http://localhost:3000/image', {
      method: 'POST',
      body: JSON.stringify({
        imageURL: this.state.url,
        comment: '',
        tags: []
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => data.json())
      .then(data => {
        this.setState({
          url: data.imageURL,
          fileTagPage: true
        })
      })
  }

  render() {
    return (<div className="homepage">
    <h2>Tag-It</h2>
    <div>
      <h1> About this App </h1>
      <p> Have tons of images and need a way to organize them, Tag-It can help </p>
    </div>
    {this.state.fileTagPage ? <FileTag url={this.state.url}/>
    :
    <form onSubmit={this.handleSubmit}>
    <input name="url" type="text" onChange={this.handleChange}/>
    <button type="submit">Submit</button>
    </form>}
  </div>
  );
  }
}

export default Homepage;
