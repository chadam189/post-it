import React, { Component } from 'react';

import Header from './header.jsx';
import Board from './board.jsx';
import ModalConductor from './modal-conductor.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "Groceries",
          color: "red",
          content: "Cheese \nEggs \nTortillas \nHot Sauce ",
          index: 0,
        },
        {
          title: "To-Do",
          color: "green",
          content: "Laundry \nGet birthday gift for Mom \nGo to gym ",
          index: 1,
        },
        {
          title: "Netflix To-Do",
          color: "orange",
          content: "30 Rock \nParks and Rec \nThe Office ",
          index: 2,
        },
        {
          title: "Italy trip",
          color: "blue",
          content: "Rome \nAmalfi \nNaples \n",
          index: 3,
        },
      ],
      currentModal: null,
      currentNoteIndex: null,
    };

    this.onAddNoteClick = this.onAddNoteClick.bind(this);
    this.onEditNoteClick = this.onEditNoteClick.bind(this);
    this.onDeleteNoteClick = this.onDeleteNoteClick.bind(this);

    this.createNote = this.createNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.exitModalView = this.exitModalView.bind(this);
  }

  onAddNoteClick() {
    this.setState({
      currentModal: 'ADD_NOTE',
    })
  }

  onEditNoteClick(index) {
    this.setState({
      currentNoteIndex: index,
      currentModal: 'EDIT_NOTE',
    }, () => console.log(`index clicked: ${this.state.currentNoteIndex} and note: ${JSON.stringify(this.state.notes[this.state.currentNoteIndex])}`));
  }

  onDeleteNoteClick(index) {
    this.setState({
      currentNoteIndex: index,
      currentModal: 'DELETE_NOTE',
    }, () => console.log(`index clicked: ${this.state.currentNoteIndex} and note: ${JSON.stringify(this.state.notes[this.state.currentNoteIndex])}`));
  }

  exitModalView() {
    this.setState({
      currentNoteIndex: null,
      currentModal: null,
    });
  }

  createNote(newNote) {
    // add new note to the end of the notes list, and set index accordingly
    newNote.index = this.state.notes.length;
    let notesList = [...this.state.notes, newNote];

    this.setState({
      notes: notesList,
      currentNoteIndex: null,
      currentModal: null,
    });
    this.exitModalView();
  }

  editNote(modifiedNote) {
    let notesList = [...this.state.notes];
    modifiedNote.index = this.state.currentNoteIndex;
    notesList[this.state.currentNoteIndex] = modifiedNote;

    this.setState({
      notes: notesList,
      currentNoteIndex: null,
      currentModal: null,
    });
    this.exitModalView();
  }

  deleteNote() {
    console.log(`index to be deleted: ${this.state.currentNoteIndex} and note to be deleted: ${JSON.stringify(this.state.notes[this.state.currentNoteIndex])}`);
    let notesList = [...this.state.notes];
    notesList.splice(this.state.currentNoteIndex, 1);
    notesList.forEach((note, index) => note.index = index);

    this.setState({
      notes: notesList,
    });
    this.exitModalView();
  }

  render() {
    return (
      <div>
        <Header 
          onAddNoteClick={this.onAddNoteClick}
        />
        <Board 
          notes={this.state.notes}
          onEditNoteClick={this.onEditNoteClick}
          onDeleteNoteClick={this.onDeleteNoteClick}
        />
        <ModalConductor 
          currentModal={this.state.currentModal}
          currentNote={this.state.notes[this.state.currentNoteIndex]}
          createNote={this.createNote}
          editNote={this.editNote}
          deleteNote={this.deleteNote}
          exitModalView={this.exitModalView}
        />
      </div>
    )
  }
}

export default App;
