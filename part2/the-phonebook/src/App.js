import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleChange = (e) => {
    const value = e.target.value

    if(e.target.name === 'newName'){
      setNewName(value)
    } else {
      setNewNumber(value)
    }
  }

  const addContact = (e) => {
    e.preventDefault()
    
    const nameObj = {
      name: newName,
      number: newNumber
    }

    for (let i = 0; i < persons.length; i++) {
      if(!persons[i].name.includes(newName)) {
        setPersons(persons.concat(nameObj))
      } else {
        alert(`${newName} already exists`)
      }
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input name='newName' value={newName} onChange={handleChange}/>
        </div>
        <div>
          number: <input name='newNumber' value={newNumber} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person => <li key={person.name}>{person.name} - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App