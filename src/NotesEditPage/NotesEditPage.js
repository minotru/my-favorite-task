import React from 'react';
import '../notes.css';
import './notes-edit.css';

class NotesEditPage extends React.Component {
  constructor() {
    super();
    this.username = 'Simon';
  }

  render() {
    return (
      <main id="notes-edit-page" onLoad="">
        <div id="notes-remarkable-header">
          <h1>REMARKABLE</h1>
          <div className="notes-header-user">
            <h3>Welcome, {this.username}</h3>
            <div className="notes-logout button">Log out</div>
          </div>
        </div>
        <div id="notes-edit-main">
          <div id="working-area">
            <input type="text" name="title" placeholder="Header" />
            <textarea name="notes-edit-textarea" id="notes-edit-textarea" />
          </div>
          <div className="notes-edit-main-button-bar">
            <button className="notes-edit-save button">Save</button>
            <button className="notes-edit-back button">Menu</button>
          </div>
        </div>
      </main>
    );
  }
}

export default NotesEditPage;
