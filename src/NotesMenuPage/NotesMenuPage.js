import React from 'react';
import '../notes.css';
import './note-small.css';
import Note from './Note';

class NotesMenuPage extends React.Component {
  constructor({ notes, user, onLogout, onAddNewNote }) {
    super();
    this.user = user;
    this.notes = notes;
    this.onLogout = onLogout;
    this.onAddNewNote = onAddNewNote;
    this.fillWithEmptyElements = this.fillWithEmptyElements.bind(this);
  }

  componentDidMount() {
    this.fillWithEmptyElements();
  }

  componentWillUpdate() {
    this.fillWithEmptyElements();
  }

  fillWithEmptyElements() {
    const main = document.querySelector('#notes-main');
    const amount = Math.floor(window.innerWidth / 350);
    main.querySelectorAll('.invisible').forEach((element) => {
      main.removeChild(element);
    });
    const size = main.childNodes.length;
    if (size % amount !== 0) {
      for (let i = 0; i < amount - Math.floor(size % amount); i++) {
        const emptynote = document.createElement('div');
        emptynote.classList.add('note-small', 'invisible');
        main.appendChild(emptynote);
      }
    }
  }

  render() {
    return (
      <main id="notes-page">
        <div id="notes-remarkable-header">
          <h1>REMARKABLE</h1>
          <div className="notes-header-user">
            <h3>Welcome, {this.user.login}</h3>
            <div className="notes-logout button" onClick={this.onLogout}>Log out</div>
          </div>
        </div>
        <div id="notes-main">
          {this.notes.map(note => <Note {...note} key={note.id} />)}
          <div className="note-small">
            <button
              className="notes-add-note-button button"
              onClick={this.onAddNewNote}
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default NotesMenuPage;
