const Number = ({name, number}) => <p>{name} {number}</p>

const Filtered = ({isFiltered, filter, personsList}) => {
  if(!isFiltered){
    return personsList.map(person => <Number key={person.name} name={person.name} number={person.number} />)
  }
  else {
    const filteredPersons = personsList.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    return filteredPersons.map(person => <Number key={person.name} name={person.name} number={person.number} />)
  }
}

export default Filtered