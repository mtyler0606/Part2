import Course from "./course"

const Courses = ({courses}) => courses.map(course => <Course key={course.id} course={course} />)

export default Courses
