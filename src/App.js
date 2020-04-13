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
    console.log("in the update page function", newPage)
    this.setState({ currentPage: newPage})
  }
  

  render(){
  return (
    <div className="App">
      <Navbar 
      updatePage={this.updatePage}

      />
      <header className="App-header">
        <img src="Images/profile.jpg" className="App-logo" alt="logo" />
        <p>
       

          {this.state.currentPage}
         <hr className="hr"></hr> 
        </p>
        <a
          className="App-link"
          href="https://tkrogers3.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
         This page is under construction.<br></br>Checkout the latest version of my <u>Github Pages blog</u>.
        </a>
      </header>
   
    </div>
  );
  }
}

export default App;
