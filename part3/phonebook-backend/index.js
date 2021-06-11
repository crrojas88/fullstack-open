require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :response-time ms :body :req[content]'))
app.use(cors())

morgan.token('body', (req, res) => JSON.stringify(req.body))

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
    Person.find({}).then(people => {response.json(people)})
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

  // Adding a new person allows user to create multiple entries for a person with the same name.
  app.post('/api/persons', (request, response) => {
      const body = request.body
      
      if(body.content === null) {
          return response.status(400).json({error: 'Content missing.'})
      } else if(!body.name) {
        return response.status(400).json({error: 'Name is required'})
      } else if(!body.number) {
        return response.status(400).json({error: 'Number is required.'})
      }

      const person = new Person({
          name: body.name,
          number: body.number,
      })

      person.save()
      .then(savedPerson => {
        response.json(savedPerson)
      })
  })

  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {response.status(204).end()})
    .catch(error => next(error))
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

  app.use(unknownEndpoint)

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if(error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }
    next(error)
  }

  app.use(errorHandler)

  const PORT = process.env.PORT
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })