const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms :body :req[content]'))

app.use(cors())

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

  const generateId = () => {
      const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0
      return maxId + 1
  }

  app.post('/api/persons', (request, response) => {
      const body = request.body
      const nameExists = persons.find(person => person.name === body.name)

      if(!body.name || !body.number) {
          return response.status(400).json({error: 'content missing'})
      } else if(nameExists) {
          return response.status(400).json({ error: 'name must be unique' })
      }

      const person = {
          name: body.name,
          number: body.number,
          date: new Date(),
          id: generateId(),
      }

      persons.concat(person)
      response.json(person)
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