import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {currentPage: "Welcome to Tim's Blog!"}
    this.updatePage= this.updatePage.bind(this)
  }

  updatePage(newPage){
    console.log("in the update page function", newPage)
    this.setState({ currentPage: newPage})
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
        This page is under construction.<br></br>Checkout the latest version of my
        <a
          className="App-link"
          href="https://tkrogers3.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
            blog
        </a>
        
      </header>
   
    </div>
  );
  }
}

export default App;
