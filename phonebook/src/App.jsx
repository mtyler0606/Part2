import { useState } from 'react'
import SubmissionForm from './Components/SubmissionForm'
import Filtered from './Components/Filtered'

const App = () => {
  const [persons, setPersons] = useState([
    /* */
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [isFiltered, setIsFiltered ] = useState(false)
  
  const submitHandler = (event) => {
    event.preventDefault()
    const newObj = {name: newName, number: newNumber}
    let containsName = false
    for(let person of persons){
      if(person.name == newName){
        containsName = true
      }
    }
    if(containsName){
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newObj))
    }
    setNewName("")
    setNumber("")
  }

  const filterHandler = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter)
    if(newFilter.length > 0){
      setIsFiltered(true)
    } else {
      setIsFiltered(false)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with
        <input onChange={filterHandler} />
      </div>
      <h2>add a new</h2>
      <SubmissionForm submitHandler={submitHandler} newName={newName} newNumber={newNumber} setNewName={setNewName} setNumber={setNumber}/>
      <h2>Numbers</h2>
      <div>
        <Filtered isFiltered={isFiltered} filter={filter} personsList={persons} />
      </div>
    </div>
  )
}

export default App
