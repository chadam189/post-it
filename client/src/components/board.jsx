import React from 'react';
import Note from './note.jsx';

const Board = (props) => {

  let notesList = props.notes.map((note, index) => 
  	<Note 
	    key={index}
	    note={note} 
	    onEditNoteClick={props.onEditNoteClick}
	    onDeleteNoteClick={props.onDeleteNoteClick}
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

export default Board;