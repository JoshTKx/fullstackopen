import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const StatisticLine = ({text, value, unit = ""}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {unit}</td>
    </tr>
  )
}


const Statistics = ({goodValue,neutralValue,badValue,all,average,positive}) => {
  if (all === 0){
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={goodValue}/>
        <StatisticLine text="neutral" value={neutralValue}/>
        <StatisticLine text="bad" value={badValue}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive} unit='%'/>
      </tbody>
    </table>
  )
}

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = good/all * 100

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handlBadClick = () => setBad(bad + 1)


  return (
    <div>
      <Header title="give feedback"/>

      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handlBadClick} text="bad" />

      <Header title="statistics" />

      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} all={all} average={average} positive={positive}/>

    </div>
  )
}

export default App