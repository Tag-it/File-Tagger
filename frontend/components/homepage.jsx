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
      id: '',
      tags: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTagSubmit = this.handleTagSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({ url: ev.target.value })
  }

  handleTagSubmit(id, tag){
    fetch('http://localhost:3000/image/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        tag: tag,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => data.json())
      .then(data => {
        console.log('new ');
        this.setState({
         tags: data.tags,
        })
      })
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
        console.log('home Handle Submit', data)
        console.log('home Handle Submit id', data._id)
        this.setState({
          id: data._id,
          url: data.imageURL,
          tags: data.tags,
          fileTagPage: true
        })
        console.log('home handle submit state', this.state);
      })
  }

  render() {
    return (<div className="homepage">
    <h2>Tag-It</h2>
    <div>
      <h1> About this App </h1>
      <p> Have tons of images and need a way to organize them, Tag-It can help </p>
    </div>
    {this.state.fileTagPage ? <FileTag info={this.state} handleTagSubmit={this.handleTagSubmit}/>
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
