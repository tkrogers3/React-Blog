import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navbar.js';
import Home from './Components/Home.js';
import BlogPosts from './Blog.js';
import Contact from './Components/Contacts.js';
import Resume from './resume4.pdf';
import Portfolio from './Components/Portfolio.js'


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
   
      <Navigation 
      updatePage={this.updatePage}

      />
      
   
      <header className="App-header">
       
        <p>
        {this.state.currentPage}
         <hr className="hr"></hr> 
        </p> 
   
  

        { 
          this.state.currentPage === "Home" ?
          <Home /> : null
        }
        {
          this.state.currentPage === "Blog" ?
        <BlogPosts /> : null}


{
          this.state.currentPage === "Portfolio" ?
        <Portfolio /> : null}
        { 
          this.state.currentPage === "Resume" ?
          <Resume /> : null
        }

        {
          this.state.currentPage === "Contact" ?
        <Contact /> : null}
        </header>
        </div>

     


  );
  }
}

export default App;
