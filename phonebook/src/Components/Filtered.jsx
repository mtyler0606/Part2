const Number = ({name, id, number, deletehandler}) => <p>{name} {number} <button onClick={deletehandler}>delete</button></p>

const Filtered = ({isFiltered, filter, personsList, deletehandler}) => {

  if(!isFiltered){
    return personsList.map(person => <Number key={person.name} id={person.id} name={person.name} number={person.number} deletehandler={() => deletehandler(person.id, person.name)}/>)
  }
  else {
    const filteredPersons = personsList.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    return filteredPersons.map(person => <Number key={person.id} id={person.id} name={person.name} number={person.number} deletehandler={() => deletehandler(person.id, person.name)}/>)
  }
  
}

export default Filtered