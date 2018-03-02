import React, { Component } from 'react';

class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.note.title,
			color: this.props.note.color
		};
	}

  render() {
	  return (
	  	<div className="note">
        {this.props.note.color}
	    </div>
	  );
	}
}


export default Note;