import React from 'react';
import Project from './Projects.json'
import {
  Card, Button, CardImg, CardHeader, CardText, CardDeck,
  CardSubtitle, CardBody,Col
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
            <Col className="mb-5" lg={{ size: 4 }} sm={{ size: 'auto' }} xs={{ size: 'auto' }}>
            <Card className=" mb-5 card h-100 border border-info">
          <CardHeader className=" p-2 mb-2 header shadow">{Project.Project}</CardHeader>
        <CardImg className="card-img-top mb-2" key={index} src={Project.Image} alt="Card image cap" />
        <CardBody className="p-0">
         <CardSubtitle className="row m-2" key={index}>{techStack(Project.TechStack)}</CardSubtitle>
          <CardText className="text-start">{Project.Description}</CardText>
          <Button className="header" href= {Project.Repo}>Repo</Button>{` `}
          <Button className="header" href={Project.LiveSite}> App</Button>
        </CardBody>
        </Card>
      </Col>
        )
    
    })
    
  return (
     
   
    
   <div className="container">
   <CardDeck className="row">
    {projects}
    </CardDeck>
     </div>
  
   
    
   
  )
  }
  export default Portfolio