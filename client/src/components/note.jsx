import React from 'react';
 
const Note = (props) => {

  return (
  	<div className="note">
  	  <div className={`note-trim category-${props.note.color}`}></div>
  	  <div className="note-header">
        <h4>{props.note.title}</h4>
        <div className="btn-edit"
          onClick={() => props.onEditNoteClick(props.note.index)}
        />
        <div 
          className="btn-delete"
          onClick={() => props.onDeleteNoteClick(props.note.index)}
        />
  	  </div>
  	  <div className="note-body">
        <p>{props.note.content}</p>
  	  </div>
    </div>
  );

}

export default Note;
          