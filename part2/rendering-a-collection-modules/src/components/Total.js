import React from 'react';

const Total = ({ parts }) => {
    console.log(parts)
    return(
      <strong>
        Total Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </strong>
    )
  }

  export default Total