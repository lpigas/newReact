import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Ccomponents from './Components/Ccomponents';
// import FunctionSort from './Components/FunctionSort';
import Functions from './Components/Functions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* <Ccomponents /> */}
        <div>
         <Functions />
         {/* <FunctionSort /> */}

        </div>

      </div>
    );
  }
}

export default App;
