import React, { useState } from 'react'

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
        <Button name='good' handleClick={handleGoodClick}/>
        <Button name='neutral' handleClick={handleNeutralClick}/>
        <Button name='bad' handleClick={handleBadClick}/>
        <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

const Button = ({ handleClick, name }) => {
  return(
    <button onClick={handleClick}>{name}</button>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return(
      <div>
          <p>No Feedback Given</p>
      </div>
    )
  }
  return(
    <table>
      <tbody>
      <Statistic text="Good" value={good}/>
      <Statistic text="Neutral" value={neutral}/>
      <Statistic text="Bad" value={bad}/>
      <tr>
        <td>All:</td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>Average Score:</td>
        <td>{((good * 1)+(neutral * 0)+(bad * -1))/all}</td>
      </tr>
      <tr>
        <td>Positive:</td>
        <td>{(good/all * 100)}%</td>
      </tr>
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) => {
return(
  <tr>
    <td>
      {text}:
    </td>
    <td>
      {value}
    </td>
  </tr>
)
}

export default App
