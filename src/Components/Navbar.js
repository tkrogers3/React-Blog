import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.navbarLinks = ["Home", "Blog", "Projects", "Contact"]
    }
    render() {
        console.log(this.props)
        const navLinks = this.navbarLinks.map((link, index) => {
            return (<a
            /*without running the inline method, the update page function is
            getting called many times and this error occurs:
            ---Error: Maximum update depth exceeded. This can happen when a
            component repeatedly calls setState inside componentWillUpdate
            or componentDidUpdate. React limits the number of nested updates 
            to prevent infinite loops.---
            If you put a function in onClock, you cant have the parentheses.
            which means as soon as you assign the onClick, its calling the 
            onClick. Inline method fixes this issue. By assigning an inline
            method, we are defining a function, not calling it. 
            */
                onClick={() => this.props.updatePage(link)}
                className= "p-5"
                href="#"
                key ={index}
             
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