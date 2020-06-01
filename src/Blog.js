import React from 'react';      
import Blog from "./Blog.json";
import { Card, CardHeader, CardTitle, CardBody, CardText , CardSubtitle} from 'reactstrap';
function BlogPosts(props) {
console.log(Blog);
function splitParas(post) {
    return post.map((item, index) => {
        if (index % 2 === 0) {
            return <CardSubtitle  className="mx-auto p-2 " key ={index}>{item}
       <hr className="bg bg-dark"></hr>
            </CardSubtitle>
        } else {
            return <CardBody  className="m-2 text-start"key  ={index}>{item} <hr></hr></CardBody>
        }
    })
}
const blogs = Blog.map((post, index) => {
    
    return (
    <Card key={index} className="m-2 ">
            <CardHeader  className="">
            {post.week}
            </CardHeader>
           
            {splitParas(post.question)}
          
            
        </Card>
              
        )
    })
   
    
    return (


        <div className="container scroll">
            <div className="col-4-sm"></div>
            <div className="col-4-sm">
                {blogs}
            </div>
            <div className="col-4-sm"></div>
        </div>
    )

};
export default BlogPosts

