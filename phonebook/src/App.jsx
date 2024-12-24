import { useState } from 'react'



const logName = (event) => {
  event.preventDefault()
  console.log(event.target)
}

const Number = ({name, number}) => <p>{name} {number}</p>


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

  const displayFiltered = () => {
    if(!isFiltered){
      return persons.map(person => <Number key={person.name} name={person.name} number={person.number} />)
    }
    else {
      const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
      return filteredPersons.map(person => <Number key={person.name} name={person.name} number={person.number} />)
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
      <form onSubmit={submitHandler}>
        <div>
          name: <input
                  value={newName}
                  onChange={(event)=>{setNewName(event.target.value)}}
                />
        </div>
        <div>
          number: <input
                  value={newNumber}
                  onChange={(event)=>{console.log(newNumber); setNumber(event.target.value)}}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {displayFiltered()}
      </div>
    </div>
  )
}

export default App
