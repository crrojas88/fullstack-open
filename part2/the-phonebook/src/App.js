import React, { useState, useEffect } from 'react';
import Notification from './components/Notification';
import Search from './components/Search';
import Form from './components/Form';
import ContactList from './components/Contact-list';
import contactService from './services/contacts';

const App = () => {
 
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchField, setSearchField ] = useState('')
  const [ message, setMessage ] = useState(null)

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

  // Adds new contact. 
  const addContact = (e) => {
    e.preventDefault()
    
    const nameObj = {
      name: newName,
      number: newNumber
    }

    contactService
    .create(nameObj)
    .then(returnedContact => {
      setPersons(persons.concat(returnedContact))
      setMessage(`${newName} has been added!`)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    })
    setNewName('')
    setNewNumber('')
  }

  // handles submit button logic to add new or edit existing contact.
  const handleSubmit = (e) => {
    e.preventDefault()

    const exists = persons.find(person => person.name === newName)
    
    if(exists) {
      const person = persons.find(p => p.name === newName)
      const confirmChange = window.confirm(`${newName} already exists. Replace old number with a new one?`)
      if(confirmChange) {
      const id = person.id
      const updatedPerson = {...person, number: newNumber}

      contactService
      .update(updatedPerson, id)
      .then(returnedContact => {
      setPersons(persons.map(p => p.id !== id ? p: returnedContact))
      })
      } else {
        setPersons(persons)
      }
    } else {
      addContact(e)
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
        <Notification message={message}/>
        <Search placeholder='Search Contacts' searchField={searchField} handleChange={handleChange} />
      <h2>Add New Contact</h2>
        <Form handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleChange={handleChange}/>
      <h2>Numbers</h2>
        <ContactList persons={filteredContacts} handleDelete={handleDelete}/>
    </div>
  )
}

export default App