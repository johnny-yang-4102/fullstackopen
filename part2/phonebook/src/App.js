import './App.css';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useState, useEffect} from 'react'
import axios from 'axios'

const initialArr = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

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
    
    
    for(let i = 0; i < persons.length; i++)
    {
      if(persons[i].name === name && persons[i].number === number)
        return true;
    }

    return false;
  }
  //Form submission
  const addInfo = (event) => {
    event.preventDefault()

    if(isDuplicate(newName, newPhone))
    {
      alert(`${newName}, ${newPhone} is already  an entry in the phone book`)
      return;
    }
    const personObj = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }

    setNewPhone("")
    setNewName("")
    setPersons(persons.concat(personObj))
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

  //-------------------------------------
  //Filter
  //-------------------------------------

  const handleFilterChange = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)

    //See if beginning of substring matches filter
    // let end = newFilter.length
    //setPersonsFiltered(persons.filter((person) => person.name.substring(0, end) === newFilter))
  }

  let end = newFilter.length
  const personsFiltered = persons.filter((person) => person.name.substring(0, end).toLowerCase() === newFilter.toLowerCase());


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm newName={newName} newPhone={newPhone} 
      handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}
      addInfo={addInfo}/>

      <h3>Numbers</h3>

      <Persons persons={personsFiltered} />
    </div>
  )
}

export default App;
