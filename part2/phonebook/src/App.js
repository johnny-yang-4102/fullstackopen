import './App.css';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import { useState, useEffect } from 'react'
import axios from 'axios'
import phoneService from './services/PhonesService'

function App() {


  const [persons, setPersons] = useState([])

  //const [personsFiltered, setPersonsFiltered] = useState(initialArr)

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  //Initial state of app
  useEffect(() => {

    axios.get('http://localhost:3001/persons')
      .then(response => {

        setPersons(response.data)

      })

  },
    [])

  //-------------------------------------
  //PersonForm
  //-------------------------------------

  //Find duplicates
  const isDuplicate = (name, number) => {

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === name && persons[i].number === number)
        return true;
    }

    return false;
  }
  //Form submission
  const addInfo = (event) => {
    event.preventDefault()

    //Keep this for now..
    if (isDuplicate(newName, newPhone)) {
      alert(`${newName}, ${newPhone} is already  an entry in the phone book`)
      return;
    }

    //Updating phone number associated with name
    const personFind = persons.find(person => person.name === newName) // search
    if(personFind !== undefined)
    {
      if(window.confirm(`${personFind.name} is already added to the phone book, replace the old number with new one?`))
      {
        const personChange = {...personFind, number : newPhone}

        phoneService
        .update(personFind.id, personChange)
        .then(person => {
          setPersons(persons.map(person => person.name === personFind.name ? personChange : person))
        })
        return;
      }
    }

    const personObj = {
      name: newName,
      number: newPhone
    }

    //Updating database and states
    phoneService
      .create(personObj)
      .then(person => {
        setPersons(persons.concat(person))
        setNewPhone("")
        setNewName("")
      })
  }

  //Constantly updating name and handlephone through input event listeners
  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    event.preventDefault()
    setNewPhone(event.target.value)
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    const updatedPersons = persons.filter(person => person !== personToDelete)
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      phoneService
        .deleteData(id)
        .then(() => {
          setPersons(updatedPersons)
        })
    }
  }

  //-------------------------------------
  //Filter
  //-------------------------------------

  const handleFilterChange = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)

    //fix filter

    //See if beginning of substring matches filter
    // let end = newFilter.length
    //setPersonsFiltered(persons.filter((person) => person.name.substring(0, end) === newFilter))
  }

  let end = newFilter.length
  const personsFiltered = persons.filter((person) => person.name.substring(0, end).toLowerCase() === newFilter.toLowerCase());


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm newName={newName} newPhone={newPhone}
        handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}
        addInfo={addInfo} />

      <h3>Numbers</h3>

      {persons.map(person => <Person key={person.id} deletePerson={() => deletePerson(person.id)} person={person} />)}

    </div>
  )
}

export default App;
