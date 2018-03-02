import React, { Component } from 'react';
import Note from './note.jsx';
import Modal from './modal-add.jsx';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// notes: []
		};

	}

  render() {

    let notesList = this.props.notes.map(note => <Note 
      key={note.title}
      note={note} 
      onDeleteNoteClick={this.props.onDeleteNoteClick}
    />);

	  return (
	  	<div>
				<div className="board-container">
				  <div className="board">
             {notesList}
				  </div>
	      </div>
	    </div>
	  );
	}
}

export default Board;