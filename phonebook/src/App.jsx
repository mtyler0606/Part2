import { useState, useEffect } from 'react'
import SubmissionForm from './Components/SubmissionForm'
import Filtered from './Components/Filtered'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [isFiltered, setIsFiltered ] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])
  
  const submitHandler = (event) => {
    event.preventDefault()
    const newObj = {name: newName, number: newNumber}
    /*
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
      */
    axios
      .post('http://localhost:3001/persons', newObj)
      .then(response => {setPersons(persons.concat(response.data))
        setNewName("")
        setNumber("") 
  })
    
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
