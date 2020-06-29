import React,{Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import MockList from './MockList'
class  App extends Component {
 
  render(){
  return (
    <div className="App">
      <MockList />
    </div>
  );
}
}

export default App;
