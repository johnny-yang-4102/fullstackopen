
import React, {useState} from 'react'

const StatisticLine  = ({statName, stat}) =>
{
  return(
    <p>{statName} {stat}</p>
  )
}

const Statistics = ({good, bad, neutral}) => {
  
  if(good === 0 && bad ===0 && neutral === 0)
  {
    return(
      <div>No feedback given</div>
    )
  }
  
  return(
    <div>
      <StatisticLine  statName="good" stat={good}/>
      <StatisticLine  statName="neutral" stat={neutral}/>
      <StatisticLine  statName="bad" stat={bad}/>
      <StatisticLine  statName="all" stat={good+bad+neutral}/>
      <StatisticLine  statName="average" stat={(good-bad)/(good+bad+neutral) }/>
      <StatisticLine  statName="positive" stat={good/(good+bad+neutral)}/>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good+1)} text="good"/>
      <Button onClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={() => setBad(bad+1)} text="bad"/>

      <h1>Statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral}/>
  </div>
  )
}

export default App
