import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Navigation from './Components/Navbar.js'
import Contacts from './Components/Contacts.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogPosts from './Blog.js'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
    <Router>
    <div className="App">
    <div className="container">
      <Navigation 
      updatePage={this.updatePage}/>
      
   
      <header className="App-header">
       
        <p>
        <Route path="/" exact>
        <Card className="p-2 m-5">
        <CardBody>
        <CardImg img src="Images/profile.jpg" id="imgSize"/>
          <CardTitle>Tim Rogers </CardTitle>
          <CardSubtitle>Full Stack Web Development Blog</CardSubtitle>
        </CardBody>
      </Card>
      </Route>
          {this.state.currentPage}
         <hr className="hr"></hr> 
        </p> 
        <Route path="/Blog">
       <BlogPosts />
       </Route>
      </header>
   </div>
    </div>
        </Router>
  );
  }
}

export default App;
