import React, { Component } from 'react';
import Header from './header.jsx';
import Board from './board.jsx';
import ModalAdd from './modal-add.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'orange', 'blue'],
      notes: [
        {
          "title": "Seis",
          "color": "red",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Uno",
          "color": "red",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Ocho",
          "color": "green",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Tres",
          "color": "green",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Deuce",
          "color": "orange",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Siete",
          "color": "orange",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Cinco",
          "color": "blue",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Diaz",
          "color": "blue",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Nueve",
          "color": "blue",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        },
        {
          "title": "Quattro",
          "color": "blue",
          "content": "asnvnewnfivbnoirsean \ninaivindrif \nvnadnvnin "
        }
      ],
      isAddNoteModelActive: false,
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
    console.log(JSON.stringify(note));
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

export default App;
