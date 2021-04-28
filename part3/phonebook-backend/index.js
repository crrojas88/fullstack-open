const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
      name: "Arto Hellas",
      number: "040-123456",
      id: 1
    },
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3
    },
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
      id: 4
    },
    {
      name: "Hannah Rickard",
      number: "06-51-99-56-83",
      id: 5
    },
    {
      name: "Hyun Namkoong",
      number: "10987654",
      id: 6
    },
    {
      name: "Courtney Martinez",
      number: "3691215",
      id: 7
    }
  ]

  app.get('/', (request, response) => {
      response.send('<h1>Phonebook</h1>')
  })

  app.get('/api/persons', (request, response) => {
      response.json(persons)
  })

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })