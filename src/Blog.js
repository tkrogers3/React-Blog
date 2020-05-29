import React from 'react';
import Blog from "./Blog.json";
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
function BlogPosts(props) {
console.log(Blog);
    const blogs = Blog.map((post, index) => {
        return (
            <Card key={index}>
                <CardBody>
                    <CardHeader>{post.week}</CardHeader>
                    <CardTitle>{post.question[index]}</CardTitle>
                    <hr></hr>
                    <CardText>{post.answer}</CardText>
                </CardBody>
            </Card>
        )
    })
    return (


        <div className="container">
            <div className="col-2-md"></div>
            <div className="col-8-md">
                {blogs}
            </div>
            <div className="col-2-md"></div>
        </div>
    )

};
export default BlogPosts

