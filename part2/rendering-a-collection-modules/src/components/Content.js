import React from "react";
import Part from './Part';

const Content = ({courses}) => {
    return(
      <div>
        {courses.map(course => <Part key={course.id} part={course.name} exercise={course.exercises}/>)}
      </div>
      
    )
  }

  export default Content