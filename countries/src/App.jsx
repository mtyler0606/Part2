import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/countries'


const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filteredList, setfilteredList] = useState([])

  useEffect(() => {
    countryService
      .getAllCountries()
      .then(response => setAllCountries(response.data))
      .catch(error => console.log('failed GET request'))
      }, [])



  const inputHandler = (event) => {
    const input = event.target.value 
    if(input != null){
    setfilteredList(allCountries.filter(country => country.name.common.toLowerCase().includes(input.toLowerCase())))
    } else {
      setfilteredList(allCountries)
    }
  }

  const showHandler = (countryName) => {
    setfilteredList(allCountries.filter(country => country.name.common === countryName))
  }
  
  return (
    <>
      <div>
        <span>find countries </span>
        <input type="text" onChange={inputHandler}/>
        <Countries countryList={filteredList} showHandler={showHandler}/>
      </div>
      
    </>
  )
}

export default App
