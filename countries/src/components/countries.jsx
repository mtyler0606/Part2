const Countries = ({countryList}) => {
 if(countryList.length > 10){
  return (<p>Too Many Matches</p>)
 }
 else if (countryList.length > 1){
  return (countryList.map((country, index) => (
    <div key={index}>
      <span>{country.name.common}</span>
    </div>
)))
 }
 else {
  return (countryList.map((country, index) => (
    <div key={index}>
      <h2>{country.name.common}</h2>
      <br />
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <p><strong>languages:</strong></p>
      <ul>
        {Object.entries(country.languages).map((key, value) =>
        <li key={value}>{key[1]}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
    
  )))
 }
}

export default Countries