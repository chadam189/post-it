import React from 'react';

const Header = (props) => {
  return (
  	<div>
			<div className="header">
			  <h1>Post-It Notes Board!</h1>
			  <div className="button-add-note">
			    <div className="add-note-plus">+</div>
			    <div>Add Note</div>
			  </div>
      </div>
    </div>
  );
};

export default Header;