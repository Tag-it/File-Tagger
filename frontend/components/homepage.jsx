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
      tag: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTagSubmit = this.handleTagSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({ url: ev.target.value })
  }

  handleTagSubmit(tag){
    let newArray = this.state.tag.slice()
    newArray.push(tag)
    fetch('http://localhost:3000/image/' + this.state.id, {
      method: 'PUT',
      body: JSON.stringify({
      tag: newArray,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => data.json())
      .then(data => {
        this.setState({
         tag: data.tag,
          
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
        console.log('home Handle Submit', data , this.state)
        this.setState({
          id: data._id,
          url: data.imageURL,
          tag: data.tags,
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
    {this.state.fileTagPage ? <FileTag url={this.state.url} tag={this.state.tag} handleTagSubmit={this.handleTagSubmit}/>
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
