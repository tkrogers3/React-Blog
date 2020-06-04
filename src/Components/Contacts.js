import React from 'react'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter, Jumbotron
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faOldRepublic } from '@fortawesome/free-brands-svg-icons'

const Contact = (props) => {
  return (
    <div class="container">
    <Jumbotron>
     <Card className="p-0 m-0 flex-row col-4-sm border border-success rounded ">
      
        <CardImg top className="col-4 p-0  img-fluid"  max-width="100%" height="auto" src="./Images/Tim_Rogers.jpg" alt="Card image cap"/>

        <CardBody className="px-2">
          <CardTitle className="text-start">Tim Rogers</CardTitle>
          <CardTitle className="text-start"><a href="mailto:tkrogers3@gmail.com">tkrogers3@gmail.com</a></CardTitle>
          <CardTitle className="text-start ">859-229-5584</CardTitle>
          <CardText className="text-start">
          <a className="pr-4 linkedIn"  text-start href="https://www.linkedin.com/in/timothykrogers/" ><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          <a className="pr-4 github" href="https://github.com/tkrogers3" ><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          <a className="pr-4 twitter" href="https://twitter.com/TimLearnsToCode"> <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          <a className="pr-4 codewars" href="https://www.codewars.com/users/TimRogersBC20"><FontAwesomeIcon icon={faOldRepublic} size="2x" /></a>
          </CardText>
        </CardBody>
      </Card>
      </Jumbotron>
</div>
  );
};

export default Contact;
     
 
