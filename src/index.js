import React from 'react';
import ReactDOM from 'react-dom';
import SignInPage from './SigningPages/SignInPage';
import SignUpPage from './SigningPages/SignUpPage';
import NotesMenuPage from './NotesMenuPage/NotesMenuPage';
import NotesEditPage from './NotesEditPage/NotesEditPage';
import './index.css';

window.something = {
  title: '',
  content: {},
  text: '',
};

const notes = [
  {
    title: 'Note #1',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet',
    tags: ['tag1', 'tag2', 'tag3'],
    id: '1',
  },
  {
    title: 'Note #2',
    date: new Date(2018, 1, 1),
    text: 'Lorem ipsum dolor sit amet',
    tags: ['tag1', 'tag2', 'tag3'],
    id: '2',
  },
];

ReactDOM.render(<NotesMenuPage notes={notes} user={{ login: 'Simon' }} />, document.querySelector('#root'));
