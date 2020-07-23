import React from 'react';
import ControlScreen from "./components/ControlScreen";
import Login from "./components/Login";
import './App.css';

class App extends React.Component{
  render(){
    return (
        <div className="App">
          <Login />
        </div>
    );
  }
}

export default App;
