import React, { Component } from 'react';

class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

  render() {
	  return (
	  	<div className="note">
	  	  <div className={`note-trim category-${this.props.note.color}`}></div>
	  	  <div className="note-header">
          <h4>{this.props.note.title}</h4>
          <div className="btn-edit"></div>
          <div className="btn-delete"></div>
	  	  </div>
	  	  <div className="note-body">
          <p>{this.props.note.content}</p>
	  	  </div>
	    </div>
	  );
	}
}


export default Note;