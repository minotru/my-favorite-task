import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../notes.css';
import './notes-edit.css';

class NotesEditPage extends React.Component {
  constructor() {
    super();
    this.user = { login: 'Simon' };
    this.title = '';
    this.content = '';
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
    console.log(this.title);
    console.log(this.content);
  }

  handleEditorChange(e) {
    this.content = e.target.getContent();
  }

  handleTitleChange(e) {
    this.title = e.target.value;
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
            <Editor
              init={{
                plugins: 'link image code',
                toolbar:
                  'undo redo | bold italic | alignleft aligncenter alignright | code',
                branding: false,
                theme: 'modern',
                resize: true,
                height: '50vh',
                mobile: {
                  theme: 'mobile',
                },
              }}
              onChange={this.handleEditorChange}
            />
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
