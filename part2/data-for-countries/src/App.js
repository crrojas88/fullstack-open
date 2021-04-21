import React, { useState, useEffect} from 'react';
import axios from 'axios';

import Search from './components/Search';
import CountryList from './components/Country-list';

function App() {

  const [countries, setCountries] = useState([])
  const [searchField, setSearch] = useState('')

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {setCountries(response.data)})
  }
  useEffect(hook, [])

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)
  }

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

  return (
    <div>
      <h1>Country Search</h1>
      <Search placeholder='Search Countries' searchField={searchField} handleChange={handleChange}/>
      <CountryList countries={filteredCountries}/>
    </div>
  );
}

export default App;
