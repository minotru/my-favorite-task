import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';
import RichEditor from './RichEditor';
import { EditorState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';
import '../notes.css';
import './notes-edit.css';

class NotesEditPage extends React.Component {
  constructor() {
    super();
    this.user = { login: 'Simon' };
    this.saveNote = this.saveNote.bind(this);
    this.backToMenu = this.backToMenu.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  backToMenu(e) {
    e.preventDefault();
    console.log('back');
  }

  saveNote(e) {
    e.preventDefault();
  }

  handleEditorChange(content) {
    window.something.text = content.getPlainText();
    window.something.content = convertToRaw(content);
  }

  handleTitleChange(e) {
    window.something.title = e.target.value;
  }

  render() {
    const { login } = this.user;
    return (
      <main id="notes-edit-page">
        <div id="notes-remarkable-header">
          <h1>REMARKABLE</h1>
          <div className="notes-header-user">
            <h3>Welcome, {login}</h3>
            <div className="notes-logout button">Log out</div>
          </div>
        </div>
        <form id="notes-edit-main" method="post" onSubmit={this.saveNote}>
          <div id="working-area">
            <input
              type="text"
              name="title"
              placeholder="Header"
              onChange={this.handleTitleChange}
            />
            <RichEditor handleChange={this.handleEditorChange} />
          </div>
          <div className="notes-edit-main-button-bar">
            <input
              type="submit"
              value="Save"
              className="notes-edit-save button"
            />
            <button
              className="notes-edit-back button"
              onClick={this.backToMenu}
            >
              Menu
            </button>
          </div>
        </form>
      </main>
    );
  }
}

export default NotesEditPage;
