import React, { Component } from 'react';
//import FileTagForm from './file-tag-form.jsx';

const imgStyle = {
  width: "1000px",
  height: "1000px"
}

class FileTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
     newTag: '',
    }
  
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    this.setState({ newTag: ev.target.value })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    console.log(this.state.newTag, "submit tag")
    this.props.handleTagSubmit(this.state.newTag)
      
  }


  render() {
    return (<div>
      <p> File Page </p>
      
      <form onSubmit={this.handleSubmit}>
        <input name="tag" type="text" onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{this.props.tag}</p>
      <img src={this.props.url} style={imgStyle} />
    </div>
    )
  }
}

export default FileTag;