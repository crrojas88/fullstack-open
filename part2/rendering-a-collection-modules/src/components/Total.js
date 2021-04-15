import React from 'react';

const Total = ({ parts }) => {

    const sum = parts.reduce((total, curr) => {
        console.log(total)
        console.log(curr)
        return total + curr.exercises
    }, 0)

    return(
      <strong>
        Total Number of exercises: {sum}
      </strong>
    )
  }

  export default Total