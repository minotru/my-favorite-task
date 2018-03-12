import React from 'react';
import '../notes.css';
import './note-small.css';

class NotesMenuPage extends React.Component {
  constructor() {
    super();
    this.username = 'Simon';
    this.addNewNote = this.addNewNote.bind(this);
  }

  componentDidMount() {
    const main = document.querySelector('#notes-main');
    const amount = Math.floor(window.innerWidth / 350);
    main.querySelectorAll('.invisible').forEach((element) => {
      main.removeChild(element);
    });
    const size = main.childNodes.length;
    if (size % amount !== 0) {
      for (let i = 0; i <= amount - Math.floor(size % amount); i++) {
        const emptynote = document.createElement('div');
        emptynote.classList.add('note-small', 'invisible');
        main.appendChild(emptynote);
      }
    }
  }

  addNewNote() {
    console.log(`彡ﾟ◉ω◉ )つー☆ﾟ.*･｡ﾟ neW POst bY ${this.username} ･.*｡`);
  }

  render() {
    return (
      <main id="notes-page">
        <div id="notes-remarkable-header">
          <h1>REMARKABLE</h1>
          <div className="notes-header-user">
            <h3>Welcome, {this.username}</h3>
            <div className="notes-logout button">Log out</div>
          </div>
        </div>
        <div id="notes-main">
          <div className="note-small">
            <div className="note-header">
              <h3>My favorite task</h3>
              <i className="fas fa-pencil-alt button" />
              <i className="fas fa-trash-alt button" />
            </div>
            <div className="fade">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aspernatur totam in maiores consequuntur laudantium suscipit
                impedit. Quod hic at, facilis temporibus sint quia qui, ipsum
                aliquam sapiente obcaecati expedita.
              </p>
            </div>
            <div className="note-info-bar">
              <h4>12.09.91</h4>
              <h4>#important #notfun</h4>
            </div>
          </div>
          <div className="note-small">
            <button
              className="notes-add-note-button button"
              onClick={this.addNewNote}
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
