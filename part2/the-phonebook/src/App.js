import React, { useState } from 'react';
import Search from './components/Search';
import Form from './components/Form';
import ContactList from './components/Contact-list';

const App = () => {

  // added id keys to contacts. 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchField, setSearchField ] = useState('')

  // Handles change for different input values.
  const handleChange = (e) => {
    const value = e.target.value

    if(e.target.name === 'newName'){
      setNewName(value)
    } else if(e.target.name === 'newNumber') {
      setNewNumber(value)
    } else {
      setSearchField(value)
    }
  }

  // Adds new contact object including new number. Prevents from adding repetitive names. 
  const addContact = (e) => {
    e.preventDefault()
    
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const exists = persons.find(person => person.name === newName && person.number === newNumber)

    if(exists){
      alert(`${newName} already exists`)
    } else {
      setPersons(persons.concat(nameObj))
    }
    
    setNewName('')
    setNewNumber('')
  }

  // Filters through the persons array and renders ContactList accordingly taking account of lowercase inputs.
  const filteredContacts = persons.filter(person => person.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
  
  return (
    <div>
      <h1>Phonebook</h1>
        <Search placeholder='Search Contacts' searchField={searchField} handleChange={handleChange} />
      <h2>Add New Contact</h2>
        <Form addContact={addContact} newName={newName} newNumber={newNumber} handleChange={handleChange}/>
      <h2>Numbers</h2>
        <ContactList persons={filteredContacts}/>
    </div>
  )
}

export default App