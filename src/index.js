import React from 'react';
import ReactDOM from 'react-dom';
import SignInPage from './SigningPages/SignInPage';
import SignUpPage from './SigningPages/SignUpPage';
import NotesMenuPage from './NotesMenuPage/NotesMenuPage';
import NotesEditPage from './NotesEditPage/NotesEditPage';
import './index.css';

ReactDOM.render(<NotesEditPage />, document.querySelector('#root'));
