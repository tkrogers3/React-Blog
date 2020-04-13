import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.navbarLinks=["Home","Blog", "Projects", "Contact"]
    }
    render(){
        console.log(this.props)
       const navLinks = this.navbarLinks.map(link => {
           return( <a 
        //without running the inline method
           onClick= { this.props.updatePage(link)}
           href = {"/" + link}
           > 
           {link}
           </a>
           )
       })
        return (
            <div>
                <h1>{navLinks} </h1>
            </div>
        )
    }
}
export default Navbar