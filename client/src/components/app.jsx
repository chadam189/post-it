import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header.jsx';
import Board from './board.jsx';
import ModalAdd from './modal-add.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMode: false,
      notes: [
        {
          title: 'Uno',
          color: 'red',
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          title: 'Deuce',
          color: 'orange',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
        {
          title: 'Tres',
          color: 'green',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
        {
          title: 'Quattro',
          color: 'blue',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
        {
          title: 'Cinco',
          color: 'blue',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
        {
          title: 'Seis',
          color: 'red',
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          title: 'Siete',
          color: 'orange',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
        {
          title: 'Ocho',
          color: 'green',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
        {
          title: 'Nueve',
          color: 'blue',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
        {
          title: 'Diaz',
          color: 'blue',
          content: 'asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin '
        },
     ]
    };
  }

  onAddNoteClick() {
    this.setState({
      isAddNoteModelActive: true,
    })
  }

  onModalExit() {
    this.setState({
      isAddNoteModelActive: false,
    })
  }

  saveNewNote(note) {
    console.log('this is a new note: ', JSON.stringify(note));
    let notesList = [...this.state.notes, note];
    // notesList.sort((a, b) => {
    //   if (a.color === b.color) {
    //     return a.title > b.title;
    //   } else {
    //     return a.color > b.color;
    //   }
    // });

    this.setState({
      notes: notesList
    });
  }



  render() {
    return (
      <div>
        <Header 
          onAddNoteClick={this.onAddNoteClick.bind(this)}
        />
        <Board 
          notes={this.state.notes}
        />
        {this.state.isAddNoteModelActive && 
          <ModalAdd 
            onModalExit={this.onModalExit.bind(this)}
            saveNewNote={this.saveNewNote.bind(this)}
          /> }
      </div>
    )
  }
}

App.propTypes = {
};

export default App;
