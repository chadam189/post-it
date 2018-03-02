import React, { Component } from 'react';

class AddNoteModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			colors: ['red', 'green', 'orange', 'blue'],
			activeColor: 'red',
			activeColorIndex: 0,
		};
	}

	onSelectCategory(index) {
		this.setState({
      activeColorIndex: index,
      activeColor: this.state.colors[index],
		});
	}

	onTitleChange(title) {
    this.setState({
    	title,
    });
  }

  onContentChange(content) {
    this.setState({
    	content
    });
  }

  onClickSaveNote() {
  	if (this.state.title !== '' && this.state.content !== '') {
  		let newNote = {
  			title: this.state.title,
  			content: this.state.content,
  			color: this.state.activeColor
  		}
  		this.props.createNote(newNote);
      this.props.exitModalView();
  	} 
  }

  render() {
    let activeColorIndex = this.state.activeColorIndex;
    let activeColor = this.state.activeColor;

	  return (
	  	<div className="modal">
	  	 	<div className="modal-note">
		  	  <div className={`modal-note-trim category-${activeColor}`}></div>
		  	  <div className="modal-note-category-select">
		  	    {this.state.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`modal-note-category-option category-${color}`}
                    style={activeColorIndex === index ? {border: '2px solid rgb(170, 170, 170)'} : {border: '2px solid rgb(255, 255, 255)'}}
                    onClick={this.onSelectCategory.bind(this, index)}
             />))}
		  	  </div>
		  	  <div className="modal-note-title">
			  	  <input 
			  	    type="text" 
			  	    placeholder="Untitled"
			  	    onChange={event => this.onTitleChange(event.target.value)} 
			  	  ></input>
			  	</div>
		  	  <div className="modal-note-content">
            <textarea 
              placeholder="Just add text here"
              onChange={event => this.onContentChange(event.target.value)}
            ></textarea>
		  	  </div>
		  	  <div className="modal-note-footer">
            <div 
              className="btn-cancel-note-changes"
              onClick={this.props.exitModalView}
            >
              Cancel
            </div>
            <div 
              className="btn-save-note-changes"
              style={(this.state.title !== '' && this.state.content !== '') ? {opacity: 1} : {opacity: 0.3}}
              onClick={this.onClickSaveNote.bind(this)}
            >
              Add
            </div>
		  	  </div>
		  	</div>
	    </div>
	  );
	}
}

export default AddNoteModal;
