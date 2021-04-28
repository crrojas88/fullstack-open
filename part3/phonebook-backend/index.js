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

  app.get('/info', (request, response) => {
    const date = new Date()
    response.send(
        `<p>Phonebook has info for ${persons.length} people.</p>
        <br />
        ${date}
        `)
})

  app.get('/api/persons', (request, response) => {
      response.json(persons)
  })

//   GET single entry and return 404 status if id doesn't exist.
  app.get('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id)
      const person = persons.find(person => person.id === id)

      if(person) {
          response.json(person)
      } else {
          response.status(404).end()
      }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    person = persons.filter(person => person.id !== id)
    response.status(204).end()
  })

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })