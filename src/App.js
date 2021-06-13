import React, { useState } from 'react';
import data from './data';
import List from './List';

import './App.css';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  const[people, setPeople] = useState(data);

  return(

        <main>
            <section className='container'>
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button onClick = {() => setPeople([])}>clear all </button>
            </section>
        </main>
  );
}

export default App;
