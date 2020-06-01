import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  NavbarText
} from 'reactstrap';


function Navigation (props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
       const [links, setLinks]= useState();
       let navbarLinks = [
        "Blog",
        "Portfolio",
        "Github",
        "Stuff I Enjoy",
        "Résumé",
        "Contact"
] 

const navLinks = navbarLinks.map((link, index) => {
    return(
      <NavItem>
        <NavLink key={index} 
        className="d-inline-flex"
        onClick={()=>props.updatePage(link)}
        href="# [index]">
         {link}
        </NavLink>
      </NavItem>
    )
})
     return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="cursive">Tim Rogers</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
            {navLinks}
          </Nav>
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
//         console.log(this.props)
//         const navLinks = this.navbarLinks.map((link, index) => {
//             return (<a
//             /*without running the inline method, the update page function is
//             getting called many times and this error occurs:
//             ---Error: Maximum update depth exceeded. This can happen when a
//             component repeatedly calls setState inside componentWillUpdate
//             or componentDidUpdate. React limits the number of nested updates 
//             to prevent infinite loops.---
//             If you put a function in onClock, you cant have the parentheses.
//             which means as soon as you assign the onClick, its calling the 
//             onClick. Inline method fixes this issue. By assigning an inline
//             method, we are defining a function, not calling it. 
//             */
//                 onClick={() => this.props.updatePage(link)}
//                 className= "p-2   navStuff"
//                 href="#"
//                 key ={index}
             
//             >
//                 {link}
//             </a>
//             )
//         })
//         return (
//             <div>
//                 <h1>{navLinks} </h1>
//             </div>
//         )
//     }
// }
