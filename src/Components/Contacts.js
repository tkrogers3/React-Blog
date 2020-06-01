import React from 'react'
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Contact = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
     
    )
}

<div class="container">
    <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img src="//placehold.it/200" alt="">
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Description</p>
            <a href="#" class="btn btn-primary">BUTTON</a>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
            Footer stating cats are CUTE little animals
        </div>
    </div>
    <br>
    <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src="//placehold.it/200" class="img-fluid" alt="">
            </div>
            <div class="col">
                <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">BUTTON</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
            Footer stating cats are CUTE little animals
        </div>
    </div>
</div>