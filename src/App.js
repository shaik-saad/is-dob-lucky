import { useState } from 'react';
import './App.css';

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [luckyNumber, setLuckyNumber] = useState("")
  const [message, setMessage] = useState()

  // input
  function dobChangeHandler(event){
    setDateOfBirth(event.target.value)
  }

  function luckyNumberChangeHandler(event){
    setLuckyNumber(event.target.value)
  }

  // processing
  function onClickHandler(){
    // removing hyphens from the date of birth
    var dob = dateOfBirth.replaceAll("-", "")
    var sum = 0
    // looping over the dob
    for (let index = 0; index < dob.length; index++) {
      // adding each number of date of birth
      sum = sum + Number(dob.charAt(index))
    }
    // dividing the total sum of dob by lucky number and checking if remainder is equal to zero
    // if yes then user's dob is lucky and vice versa
    // output
    if(sum%luckyNumber === 0){
      setMessage(<p id="result-message" style={{"backgroundColor": "rgba(0, 255, 0, 0.5)"}}>"Yay! your Birthday is luckyyy! 🎉"</p>)
    } else {
      setMessage(<p id="result-message" style={{"backgroundColor": "rgba(255, 255, 0, 0.5)"}}>"Oops! your birthday is not lucky. 😕"</p>)
    }
    setShowReset(true)
  }

  function resetClickHandler(){
    setDateOfBirth("")
    setLuckyNumber("")
    setMessage("")
    setShowReset(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Is your Birthday lucky? 🤔</h1>
      </header>
      <div className="inner-container">
        <label htmlFor="date-of-birth">Date of Birth:</label>
        <input 
          id="dateof-birth" 
          type="date"
          onChange={dobChangeHandler}
          value={dateOfBirth}
          required
        />
        <label htmlFor="lucky-number">Lucky Number:</label>
        <input 
          id="lucky-number" 
          type="number" 
          placeholder="Enter a number"
          onChange={luckyNumberChangeHandler}
          value={luckyNumber}
          required
        />
        { showReset ? 
            <button id="reset-btn" onClick={() => resetClickHandler()}>Reset</button>
          :
            <button 
              id="check-btn"
              onClick={() => onClickHandler()}
            >
              Check Number
            </button>
            }
        <div>{message}</div>
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
