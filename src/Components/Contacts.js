import React from 'react'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faOldRepublic } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faEnvelopeOpenText, faMobile} from '@fortawesome/free-solid-svg-icons'

const Contact = (props) => {
  return (
    <div class="container">

     <Card className="p-0 m-0 flex-row col-4-sm border-3 border-dark rounded ">
      
        <CardImg top className="col-4 p-0  img-fluid"  max-width="100%" height="auto" src="./Images/Tim_Rogers.jpg" alt="Card image cap"/>

        <CardBody className="px-2 ">
        <div className="container  border border-3 border-info rounded ">
          <CardTitle className="text-start "><FontAwesomeIcon icon={faAddressCard} size="2x" className="pr-2 email"/><span className="font-weight-bold">Tim Rogers</span></CardTitle>
          <CardTitle className="text-start "><FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" className="pr-2 email"/><span className="font-weight-bold"><a href="mailto:tkrogers3@gmail.com">tkrogers3@gmail.com</a></span></CardTitle>
          <CardTitle className="text-start "><FontAwesomeIcon icon={faMobile} size="2x" className="pr-2 email"/><span className="font-weight-bold">859-229-5584</span></CardTitle>
          <CardText className="text-start">
          <a className="pr-4 linkedIn"  text-start href="https://www.linkedin.com/in/timothykrogers/" ><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          <a className="pr-4 github" href="https://github.com/tkrogers3" ><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          <a className="pr-4 twitter" href="https://twitter.com/TimLearnsToCode"> <FontAwesomeIcon icon={faTwitter} text-dark size="2x" /></a>
          <a className="pr-4 codewars" href="https://www.codewars.com/users/TimRogersBC20"><FontAwesomeIcon icon={faOldRepublic} size="2x" /></a>
          </CardText>
          </div>
        </CardBody>
      </Card>
     
</div>
  );
};

export default Contact;
     
 
