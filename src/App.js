import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {currentPage: "Home"}
    this.updatePage= this.updatePage.bind(this)
  }

  updatePage(newPage){
    this.setState({curentPage: newPage})
  }
  

  render(){
  return (
    <div className="App">
      <Navbar 
      newNumber= {95}
      updatePage={this.updatePage}

      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.currentPage}
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
  );
  }
}

export default App;
