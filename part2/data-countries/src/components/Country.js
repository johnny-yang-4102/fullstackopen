//Filter

import React from "react"
import { useState, useEffect} from "react"
import axios from "axios"


const Country = ({ country }) => {

    const [display, setDisplay] = useState(country.display)
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`

        axios.get(url)
            .then(response => {
                setWeatherData(response.data)
            })
    }, [])

    const handleShowInfo = (e) => {
        country.display = !display;

        setDisplay(country.display)

    }

    if (country.display) {

        //Obtain weather data
        const tmpFahrenheit = ((((weatherData.main.temp - 273.15) * 9)/5) + 32).toFixed(2);

        return (
            <div>
                <h2>{country.name}</h2>
                <p>{"Capital: " + country.capital}</p>
                <p>{"Area: " + country.area + "km"}</p>

                <h4>Languages:</h4>
                <ul>
                    {country.languages.map(language => <li key={1}>{language}</li>)}
                </ul>
                <img src={country.flags.png} alt={country.name + " flag"} />

                <h2>Weather in {country.capital}</h2>
                <p>Temperature {tmpFahrenheit + " Fahrenheit"}</p>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather.icon + " Fahrenheit"} />
                <p>Wind {weatherData.wind.speed + "m/s"}</p>
                <button onClick={handleShowInfo}>hide</button>
            </div>
        )
    }
    else
        return (
            <div style={{ display: "flex" }}>
                <p>{country.name}</p>
                <button onClick={handleShowInfo}>show</button>
            </div>
        )
}

export default Country