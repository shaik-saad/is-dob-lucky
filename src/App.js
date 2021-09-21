import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Is your Birthday lucky?</h1>
      </header>
      <div className="inner-container">
        <label htmlFor="date-of-birth">Date of Birth:</label>
        <input id="dateof-birth" type="date" />
        <label htmlFor="lucky-number">Lucky Number:</label>
        <input id="lucky-number" type="number" placeholder="Enter a number"/>
        <button id="check-btn">Check Number</button>
      </div>
      <footer>
        <p>If you loved❤️ this app, make sure to follow me on</p>
        <ul id="non-bullet-list">
          <li className="list-item">
            <a className="link" href="https://www.linkedin.com/in/shaik-saad">
                <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="https://twitter.com/shaiksaadullah">
                <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="https://github.com/shaik-saad">
                <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
