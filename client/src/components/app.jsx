import React, { Component } from 'react';
import Header from './header.jsx';
import Board from './board.jsx';
import ModalAdd from './modal-add.jsx';
import DeleteNoteModal from './modal-delete.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'orange', 'blue'],
      notes: [
        {
          title: "Seis",
          color: "red",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 0,
        },
        {
          title: "Uno",
          color: "red",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 1,
        },
        {
          title: "Ocho",
          color: "green",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 2,
        },
        {
          title: "Tres",
          color: "green",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 3,
        },
        {
          title: "Deuce",
          color: "orange",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 4,
        },
        {
          title: "Siete",
          color: "orange",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 5
        },
        {
          title: "Cinco",
          color: "blue",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 6,
        },
        {
          title: "Diaz",
          color: "blue",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 7,
        },
        {
          title: "Nueve",
          color: "blue",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 8,
        },
        {
          title: "Quattro",
          color: "blue",
          content: "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin ",
          index: 9,
        }
      ],
      isAddNoteModelActive: false,
      deleteModalIndex: null,
    };

    this.onModalExit = this.onModalExit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  onAddNoteClick() {
    this.setState({
      isAddNoteModelActive: true,
    })
  }

  onDeleteNoteClick(index) {
    console.log(index)
    this.setState({
      deleteModalIndex: index,
    });
  }

  onModalExit() {
    this.setState({
      isAddNoteModelActive: false,
    })
  }

  saveNewNote(note) {
    let notesList = [...this.state.notes, note];
    let colorMap = {
      'red': 1,
      'green': 2,
      'orange': 3,
      'blue': 4
    }
    notesList.sort((a, b) => {
      if (colorMap[a.color] === colorMap[b.color]) {
        return a.title.toLowerCase() > b.title.toLowerCase();
      } else {
        return colorMap[a.color] > colorMap[b.color];
      }
    });
    notesList.forEach((note, index) => note.index = index);

    this.setState({
      notes: notesList
    });
    // this.onModalExit();
  }

  deleteNote() {
    let notesList = [...this.state.notes];

    let noteToDelete = this.state.notes[this.state.deleteModalIndex];

    // console.log(`index ${this.state.deleteModalIndex} and note to delete: ${JSON.stringify(noteToDelete, null, 2)}`);

    notesList.splice(this.state.deleteModalIndex, 1);

    // console.log(`should be missing index ${this.state.deleteModalIndex}: ${JSON.stringify(notesList, null, 2)}`);

    notesList.forEach((note, index) => note.index = index);

    // console.log(`notes should be in new indexed order: ${JSON.stringify(notesList, null, 2)}`);

    this.setState({
      notes: notesList,
      deleteModalIndex: null,
    });
    // this.onModalExit();
  }

  render() {
    return (
      <div>
        <Header 
          onAddNoteClick={this.onAddNoteClick.bind(this)}
        />
        <Board 
          notes={this.state.notes}
          onDeleteNoteClick={this.onDeleteNoteClick.bind(this)}
        />
        {this.state.isAddNoteModelActive && 
          <ModalAdd 
            onModalExit={this.onModalExit}
            saveNewNote={this.saveNewNote.bind(this)}
          /> }
        {this.state.deleteModalIndex !== null && 
          <DeleteNoteModal
            onModalExit={this.onModalExit}
            deleteNote={this.deleteNote}
          /> }
      </div>
    )
  }
}

export default App;
