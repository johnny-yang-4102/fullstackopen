import './App.css';
import Filter from './components/Filter';
import Countries from './components/Countries';

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const apiKey = process.env.REACT_APP_API_KEY

  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])



  //-------------------------------------
  //Filter
  //-------------------------------------

  //Constantly find countries to add to array from filter
  const handleFilterChange = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }


  //take in all information for each country
  //Then filter it again to only get the
  //Common name, capital, area, languages, and flag
  const countriesFilteredResult = []
  let hasNofilter = true;

  if(newFilter.length !== 0) 
  {
    hasNofilter = false;

    const countriesFiltereredOnKeyword = countries.filter(country => country.name.common.toLowerCase().includes(newFilter))

    for (let i = 0; i < countriesFiltereredOnKeyword.length; i++) {
      const country = countriesFiltereredOnKeyword[i]

      //break down language object
      const languages = []
      for (const key in country.languages) {
        languages.push(country.languages[key])
      }

      const countryObj = {
        name: country.name.common,
        capital: country.capital,
        area: country.area,
        languages: languages,
        flags: country.flags,
        display: false,
        id: i + 1
      }

      countriesFilteredResult.push(countryObj)
    }
  }


  return (
    <div >
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Countries countries={countriesFilteredResult} hasNoFilter={hasNofilter} size={countriesFilteredResult.length} />
    </div>
  );
}

export default App;
