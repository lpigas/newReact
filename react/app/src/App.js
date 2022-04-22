import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Ccomponents from './Components/Ccomponents';
// import Funct from './Components/Funct';
import Functions from './Components/Functions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
         <Functions />
         {/* <Funct /> */}
         {/* <Ccomponents /> */}
        </div>
      </div>
    );
  }
}

export default App;
