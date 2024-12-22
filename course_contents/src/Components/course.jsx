import Course_detail from "./course_detail"

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

  export default Course