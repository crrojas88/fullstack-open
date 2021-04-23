import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Form from './components/Form';
import ContactList from './components/Contact-list';
import contactService from './services/contacts';

const App = () => {
 
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchField, setSearchField ] = useState('')

  // fetch promise and data from db.json
  const hook = () => {
    contactService
    .getAll()
    .then(initialContacts => {
      setPersons(initialContacts)
    })
  }
  useEffect(hook, [])

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
      number: newNumber
    }

    const exists = persons.find(person => person.name === newName && person.number === newNumber)

    if(exists){
      alert(`${newName} already exists`)
    } else {
      contactService
      .create(nameObj)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  // Filters through the persons array and renders ContactList accordingly taking account of lowercase inputs.
  const filteredContacts = persons.filter(person => person.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
  
  // takes the id and deletes from db then filters persons and returns persons that DON'T match with id
  const deleteContact = id => {
    let deleted = true
    contactService
    .remove(id)
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      if(deleted) {
        setPersons(persons.filter(p => p.id !== id))
      }
    })
  }

  // Handles delete button on Contact component by finding the person associated to id 
  // and uses window.confirm to delete contact with deleteContact function.
  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    const confirmDelete = window.confirm(`Delete ${person.name}?`)

    if(confirmDelete) {
      deleteContact(id)
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <Search placeholder='Search Contacts' searchField={searchField} handleChange={handleChange} />
      <h2>Add New Contact</h2>
        <Form addContact={addContact} newName={newName} newNumber={newNumber} handleChange={handleChange}/>
      <h2>Numbers</h2>
        <ContactList persons={filteredContacts} handleDelete={handleDelete}/>
    </div>
  )
}

export default App