import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  // Create a random integer ranging from 0-5 by using Math.floor.
  const randomInteger = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  // Set helper function to a variable and use it as an argument for setSelected and reference it to onClick.
  const newAnecdote = () => {
    let change = randomInteger()
    setSelected(change)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={newAnecdote}>Next Anecdote</button>
    </div>
  )
}

export default App