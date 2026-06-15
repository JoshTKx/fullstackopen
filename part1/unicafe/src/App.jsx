import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Stats = ({name, num, unit = ""}) => <div>{name} {num} {unit}</div>

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

      <Stats name="good" num={good} />
      <Stats name="neutral" num={neutral} />
      <Stats name="bad" num={bad} />
      <Stats name="all" num={all} />
      <Stats name="average" num={average} />
      <Stats name="positive" num={positive} unit='%'/>

    </div>
  )
}

export default App