import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/comment/comments')
      .then(res => res.json())
      .then(resJson => setComments({ comments: resJson }));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        <h1>Comments</h1>
      </p>
      <ul>
        {
          comments.map(comment => {
            return <li>{ comment.message }</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
