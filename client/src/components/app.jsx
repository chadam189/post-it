import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header.jsx';
import Board from './board.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
      notes: []
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    )
  }
}

App.propTypes = {
};

export default App;
