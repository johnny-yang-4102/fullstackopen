import React from "react"
import Country from "./Country"
import { useState } from "react"


const Countries = ({ countries, size, hasNoFilter }) => {

  //Cases to not display countries
  if (hasNoFilter)
    return <div>Input a string to find country information</div>
  if (size > 10)
    return <div>Too many matches, specify another filter</div>

  return (
    <div>
     
      {countries.map(country => {
        return <Country key={country.id} country={country} />})}
    </div>
  )
}

export default Countries