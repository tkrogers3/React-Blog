import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  function Home (){

 
return(
  <Card className="p-2 m-5">
  <CardBody>
  <CardImg img src="Images/profile.jpg" id="imgSize"/>
    <CardTitle>Tim Rogers </CardTitle>
    <CardSubtitle>Full Stack Web Development Blog</CardSubtitle>
  </CardBody>
</Card>
)
}
export default Home;