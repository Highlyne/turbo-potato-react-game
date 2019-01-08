import React, { Component } from 'react';
import "./css/App.css";
import Titlebar from './components/Titlebar/Titlebar';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/GameWrapper/Wrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titlebar />
        <Wrapper />
        <Navbar />
      </div>
    );
  }
}

export default App;
