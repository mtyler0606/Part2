const Course_detail = ({name, exercises}) => <p>{name} {exercises}</p>

const Course = (props) => {
  return (
    <>
    <h1>{props.course.name}</h1>
    <div>
      {props.course.parts.map(course =>
        <Course_detail key={course.id} name={course.name} exercises={course.exercises}/>
      )}
    </div>
    <p><strong>total of {props.course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises,
  0)} exercises</strong></p>
    </>
    
  )
}

const Courses = ({courses}) => courses.map(course => <Course course={course} />)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

 
  return <Courses courses={courses} />
}

export default App