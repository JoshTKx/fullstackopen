const Header = ({name}) => {
  return (
      <h2>{name}</h2>
  )
}

const Part = ({name, num}) => {
  return (
    <p>
        {name} {num}
    </p>
  )
}

const Content = ({parts}) => {
  //console.log(props.parts[0])
  return (
    <div>
      {parts.map((part) =>
        <Part key={part.id} name={part.name} num={part.exercises}/>
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((exercises, part) => exercises + part.exercises,0)
  return (
    <strong>total of {total} exercises</strong>
  )
}



const Course = ({course}) => {
  console.log(course)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course