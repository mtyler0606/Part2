import { useState, useEffect } from 'react'
import SubmissionForm from './Components/SubmissionForm'
import Filtered from './Components/Filtered'
import personService from './services/persons'
import Notification from './Components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [isFiltered, setIsFiltered ] = useState(false)
  const [message, setMessage] = useState('')
  const [className, setClassName] = useState('')

  useEffect(() => {
    personService
      .getAllPersons()
      .then(response => setPersons(response.data))
  }, [])
  
  const submitHandler = (event) => {
    event.preventDefault()
    const filteredList = persons.filter(person => person.name === newName)
    if(filteredList.length === 1){
      if(window.confirm(`${newName} is already added to phonebook. Replace number with new number?`)){
        const personToUpdate = persons.find(person => person.name === newName)
        const updatedPerson = {...personToUpdate, number: newNumber}
        const updatedList = persons.filter(person => person.name != newName)
        personService
          .updatePerson(personToUpdate.id, updatedPerson)
          .then(response => {setPersons(updatedList.concat(response.data))
            setClassName('confirmation')
            setMessage(`Updated ${updatedPerson.name}`)
            setTimeout(() => {
                  setMessage(null)
                  setClassName(null)
                  }, 5000)
          })
        setNewName("")
        setNumber("")
      }
    }

    else {
    const newObj = {name: newName, number: newNumber}

    personService.addPerson(newObj).then(response => {setPersons(persons.concat(response.data))
      setClassName('confirmation')
      setMessage(`Added ${newObj.name}`)
      setTimeout(() => {
            setMessage(null)
            setClassName(null)
            }, 5000)
      setNewName("")
      setNumber("")
    } 
)
    
  }
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

  const deletehandler = (id, name) => {
    if(window.confirm(`delete ${name}?`)){
      personService
      .deletePerson(id)
      .then(setPersons(persons.filter(person => person.id != id)))
      .catch(error => {setClassName('error')
        setMessage(`${name} has already been deleted from the server`)
        setTimeout(() => {
              setMessage(null)
              setClassName(null)
              }, 5000)})

    }
   
  } 


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} className={className} />
      <div>
        filter show with
        <input onChange={filterHandler} />
      </div>
      <h2>add a new</h2>
      <SubmissionForm submitHandler={submitHandler} newName={newName} newNumber={newNumber} setNewName={setNewName} setNumber={setNumber}/>
      <h2>Numbers</h2>
      <div>
        <Filtered isFiltered={isFiltered} filter={filter} personsList={persons}  deletehandler={deletehandler}/>
      </div>
    </div>
  )
}

export default App
