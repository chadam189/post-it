import React, { Component } from 'react';
import Note from './note.jsx';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
			  {
			  	title: 'Untitled Example',
			  	color: 'blue'
			  },
			  {
			  	title: 'Untitled Deuce',
			  	color: 'mango'
			  },
			  {
			  	title: 'Untitled Tres',
			  	color: 'yellow'
			  },
			  {
			  	title: 'Untitled Deuce',
			  	color: 'green'
			  },
			  {
			  	title: 'Untitled Deuce',
			  	color: 'blue'
			  },
		 ]
		};

	}

	// renderNotes() {
    
 //    let notesList = 


	// 	return (
	// 		<div>
			// {this.state.notes.map(note => <Note 
   //      key={note.title}
   //      className="note"
   //      note={note} />);
	//     )}
	//     </div>
	// 	);

	// }



  render() {

    let notesList = this.state.notes.map(note => <Note 
      key={note.title}
      note={note} 
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