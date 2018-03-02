import React, { Component } from 'react';

class EditNoteModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modifiedTitle: this.props.currentNote.title,
			modifiedContent: this.props.currentNote.content,
			modifiedColor: this.props.currentNote.color,
			modifiedColorIndex: ['red', 'green', 'orange', 'blue'].indexOf(this.props.currentNote.color),
      colors: ['red', 'green', 'orange', 'blue'],
		};
	}

	onSelectCategory(index) {
		this.setState({
      modifiedColorIndex: index,
      modifiedColor: this.state.colors[index],
		});
	}

	onTitleChange(title) {
    this.setState({
    	modifiedTitle: title,
    });
  }

  onContentChange(content) {
    this.setState({
    	modifiedContent: content
    });
  }

  haveChangesBeenMade() {
    return (this.props.currentNote.title !== this.state.modifiedTitle || 
            this.props.currentNote.content !== this.state.modifiedContent || 
            this.props.currentNote.color !== this.state.modifiedColor);
  }

  onClickSaveNote() {
  	if (this.haveChangesBeenMade()) {
  		let newNote = {
  			title: this.state.modifiedTitle,
  			content: this.state.modifiedContent,
  			color: this.state.modifiedColor,
  		}
  		this.props.editNote(newNote);
  	} 
  }

  render() {
    let modifiedColorIndex = this.state.modifiedColorIndex;
    let modifiedColor = this.state.modifiedColor;

	  return (
	  	<div className="modal">
	  	 	<div className="modal-note">
		  	  <div className={`modal-note-trim category-${modifiedColor}`}></div>
		  	  <div className="modal-note-category-select">
		  	    {this.state.colors.map((color, index) => (
              <div
                key={index}
                className={`modal-note-category-option category-${color}`}
                style={modifiedColorIndex === index ? {border: '2px solid rgb(170, 170, 170)'} : {border: '2px solid rgb(255, 255, 255)'}}
                onClick={this.onSelectCategory.bind(this, index)}
             />))}
		  	  </div>
		  	  <div className="modal-note-title">
			  	  <input 
			  	    type="text" 
			  	    placeholder="Untitled"
              value={this.state.modifiedTitle}
			  	    onChange={event => this.onTitleChange(event.target.value)} 
			  	  ></input>
			  	</div>
		  	  <div className="modal-note-content">
            <textarea 
              placeholder="Just add text here"
              value={this.state.modifiedContent}
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
              style={this.haveChangesBeenMade() ? {opacity: 1} : {opacity: 0.3}}
              onClick={this.onClickSaveNote.bind(this)}
            >
              Save
            </div>
		  	  </div>
		  	</div>
	    </div>
	  );
	}
}

export default EditNoteModal;
