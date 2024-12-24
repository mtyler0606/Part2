import { useState } from 'react'



const logName = (event) => {
  event.preventDefault()
  console.log(event.target)
}

const Number = ({name, number}) => <p>{name} {number}</p>


const App = () => {
  const [persons, setPersons] = useState([
    /* */
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  
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
        {persons.map(person => <Number key={person.name} name={person.name} number={person.number} />)}
      </div>
    </div>
  )
}

export default App
