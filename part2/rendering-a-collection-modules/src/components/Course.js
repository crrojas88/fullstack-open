import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
    return(
        <div>
            <h1>Web Development Curriculum</h1>
            <Header name={courses[0].name}/>
            <Content courses={courses[0].parts}/>
            <Total parts={courses[0].parts}/>
            <Header name={courses[1].name}/>
            <Content courses={courses[1].parts}/>
            <Total parts={courses[1].parts}/>
        </div>
                
    )
}

export default Course