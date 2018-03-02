import React, { Component } from 'react';

class ModalAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			colors: ['red', 'green', 'orange', 'blue'],
			activeColor: 'red',
			activeIndex: 0,
		};
	}

	onSelectCategory(index) {
		this.setState({
      activeIndex: index,
      activeColor: this.state.colors[index],
		});
	}

	onTitleChange(title) {
    this.setState({
    	title,
    });
  }

  onContentChange(content) {
  	// if (content !== '' && this.state.title !== '') {
  	// 	this.setState({
  	// 		saveNoteStatus: true
  	// 	});
  	// }
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
  		this.props.saveNewNote(newNote);
      this.props.onModalExit();
  	} 
  }

  render() {
    let activeIndex = this.state.activeIndex;
    let activeColor = this.state.activeColor;

	  return (
	  	<div className="modal">
	  	 	<div className="modal-add">
		  	  <div className={`modal-add-trim category-${activeColor}`}></div>
		  	  <div className="modal-add-category-select">
		  	    {this.state.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`modal-add-category-option category-${color}`}
                    style={activeIndex === index ? {border: '2px solid rgb(170, 170, 170)'} : {border: '2px solid rgb(255, 255, 255)'}}
                    onClick={this.onSelectCategory.bind(this, index)}
             />))}
		  	  </div>
		  	  <div className="modal-add-title">
			  	  <input 
			  	    type="text" 
			  	    placeholder="Untitled"
			  	    onChange={event => this.onTitleChange(event.target.value)} 
			  	  ></input>
			  	</div>
		  	  <div className="modal-add-content">
            <textarea 
              placeholder="Just add text here"
              onChange={event => this.onContentChange(event.target.value)}
            ></textarea>
		  	  </div>
		  	  <div className="modal-add-footer">
            <div 
              className="btn-cancel-new-note"
              onClick={this.props.onModalExit}
            >
              Cancel
            </div>
            <div 
              className="btn-save-new-note"
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

export default ModalAdd;