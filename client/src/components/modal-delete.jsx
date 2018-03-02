import React, { Component } from 'react';

const DeleteNoteModdal = (props) => {

  return (
  	<div className="modal">
  	 	<div className="modal-delete">
	  	  <div className="modal-delete-title">
		  	  Delete Note
		  	</div>
	  	  <div className="modal-delete-message">
          Are you sure you want to delete this note?
	  	  </div>
	  	  <div className="modal-delete-footer">
          <div 
            className="btn-cancel-delete-note"
            onClick={props.onModalExit}
          >
            Cancel
          </div>
          <div 
            className="btn-confirm-delete-note"
            onClick={props.deleteNote}
          >
            Delete
          </div>
	  	  </div>
	  	</div>
    </div>
  );
}

export default DeleteNoteModdal;