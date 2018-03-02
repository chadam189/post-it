import React, { Component } from 'react';
import Note from './note.jsx';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
			  {
			  	title: 'Untitled Unounoeasdffyukfggg',
			  	color: 'red',
			  	content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
			  },
			  {
			  	title: 'Untitled Deuce',
			  	color: 'orange',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
			  },
			  {
			  	title: 'Untitled Tres',
			  	color: 'green',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
			  },
			  {
			  	title: 'Untitled Quattro',
			  	color: 'blue',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
			  },
			  {
			  	title: 'Untitled Cinco',
			  	color: 'blue',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
			  },
			  {
			  	title: 'Untitled Unounoeasdffyukfggg',
			  	color: 'red',
			  	content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
			  },
			  {
			  	title: 'Untitled Deuce',
			  	color: 'orange',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
			  },
			  {
			  	title: 'Untitled Tres',
			  	color: 'green',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
			  },
			  {
			  	title: 'Untitled Quattro',
			  	color: 'blue',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
			  },
			  {
			  	title: 'Untitled Cinco',
			  	color: 'blue',
			  	content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
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