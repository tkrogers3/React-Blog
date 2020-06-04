import React from 'react';
import Project from './Projects.json'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardHeader, CardBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const Portfolio = (props) => {
    function techStack(stack) {
        return stack.map((item) => {
            let icon = ''
            if (item === "React") {
                icon = <FontAwesomeIcon style={{color: "#61DBFB"}} icon={faReact} />
            }
            else if (item === "JavaScript") {
                icon = <FontAwesomeIcon style={{color: "#EAD64E"}} icon={faJsSquare} />
            }
            else if (item === "Bootstrap") {
                icon = <FontAwesomeIcon style={{color: "#543B79"}} icon={faBootstrap} />
            }
            else if (item === "HTML") {
                icon = <FontAwesomeIcon  style={{color: "#E54C21"}} icon={faHtml5} />
            }
            else if (item === "CSS") {
                icon = <FontAwesomeIcon style={{color: "#264EE4"}} icon={faCss3Alt} />
            }
          
            else if (item === "PHP") {
                icon = <FontAwesomeIcon style={{color: "#8690BA"}} icon={faPhp} />
            }
            else if (item === "Laravel") {
                icon = <FontAwesomeIcon style={{color: "#E62D1F"}} icon={faLaravel} />
            }
          else if (item === "MySQL") {
                icon = <FontAwesomeIcon icon={faDatabase} />
            }
        
            return (
                <div>
                    {icon}
               </div>           
                )
               
        })
        
    }
    const projects = Project.map((Project, index) => {
        return(
            <CardGroup className="row">
            <Card className="col-4-sm bg bg-warning border border-danger">
        <CardImg key={index} src={Project.Image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{Project.Project}</CardTitle>
         <CardHeader className="row" key={index}>{techStack(Project.TechStack)}</CardHeader>
          <CardText>{Project.Description}</CardText>
          <Button href= {Project.Repo}>Repo</Button>
          <Button href={Project.LiveSite}> App</Button>
        </CardBody>
        </Card>
        </CardGroup>
        )
    
    })
    
  return (
     
   
    
   <div className="row">
    {projects}
     </div>
  
   
    
   
  )
  }
  export default Portfolio