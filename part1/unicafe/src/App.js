import React, { useState } from 'react'


const Statistics = ({ good, neutral, bad, all }) => {
  return(
    <div>
      <h1>Statistics</h1>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>All: {all}</li>
          <li>Average Score: {((good * 1)+(neutral * 0)+(bad * -1))/all}</li>
          <li>Positive: {(good/all * 100)}%</li>
        </ul>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const handleGoodClick = () => 
  setGood(good + 1)

  const handleNeutralClick = () =>
  setNeutral(neutral + 1)

  const handleBadClick =() =>
  setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App
