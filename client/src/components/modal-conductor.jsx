import React from 'react';

import AddNoteModal from './modal-add.jsx';
import EditNoteModal from './modal-edit.jsx';
import DeleteNoteModal from './modal-delete.jsx';

const ModalConductor = (props) => {

	if (props.currentModal === 'ADD_NOTE') {
    return (
    	<AddNoteModal 
        createNote={props.createNote}
        exitModalView={props.exitModalView}
      />
    );
  } else if (props.currentModal === 'EDIT_NOTE') {
    return (
    	<EditNoteModal 
        currentNote={props.currentNote}
        editNote={props.editNote}
        exitModalView={props.exitModalView}
      />
    );
  } else if (props.currentModal === 'DELETE_NOTE') {
  	return (
    	<DeleteNoteModal 
        deleteNote={props.deleteNote}
        exitModalView={props.exitModalView}
      />
    );
  } else {
    return null;
  }

};

export default ModalConductor;
