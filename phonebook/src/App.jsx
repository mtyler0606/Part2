import { useState } from 'react'



const logName = (event) => {
  event.preventDefault()
  console.log(event.target)
}

const Number = ({name}) => <p>{name}</p>


const App = () => {
  const [persons, setPersons] = useState([
    /* */
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    const newObj = {name: newName}
    setPersons(persons.concat(newObj))
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input
                  value={newName}
                  onChange={(event)=>{setNewName(event.target.value)}}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Number key={person.name} name={person.name} />)}
      </div>
    </div>
  )
}

export default App
