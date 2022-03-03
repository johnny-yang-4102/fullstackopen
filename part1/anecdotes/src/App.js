import React, {useState} from 'react'

const MostVotesDisplay = ({anecdotes, points}) =>
{
  
  let max = 0
  let indexMax = -1
  for(let i = 0; i < points.length; i++)
  {
    if(max < points[i])
    {
      max = points[i]
      indexMax = i
    }
  }

  if(max === 0 && indexMax === -1)
    return (<div>No votes for any anecdotes yet!</div>)
  else
    return (
      <div>
        <p>{anecdotes[indexMax]}</p>
        <p>has {max} votes</p>
      </div>
    )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ] 
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(Array(7).fill(0))

  const generateAnecdote = () => 
  {
    let index = Math.floor(Math.random() * anecdotes.length)

    setSelected(index)
  }

  const vote = (index) =>
  {
    const newPoints = [...points]
    
    newPoints[index]++

    setPoints(newPoints)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => vote(selected)}>vote</button>
      <button onClick={generateAnecdote}>next anecdote</button>

      <h1>Anecdote with the most votes</h1>
      <MostVotesDisplay anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App