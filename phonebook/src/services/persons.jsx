import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAllPersons = () => axios.get(baseURL)

const addPerson = newPerson => axios.post(baseURL, newPerson)

const updatePerson = (id, newPerson) => axios.put(`${baseURL}/${id}`, newPerson)

export default { getAllPersons: getAllPersons,
    addPerson: addPerson,
    updatePerson: updatePerson }