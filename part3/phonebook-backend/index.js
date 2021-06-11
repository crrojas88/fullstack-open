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
    Person.find({})
    .then(people => {
      const date = new Date()
      response.send(
        `<p>Phonebook has info for ${people.length} people.</p>
        <br />
        ${date}
        `)
    })
    
})

  app.get('/api/persons', (request, response) => {
    Person.find({}).then(people => {response.json(people)})
  })

  app.get('/api/persons/:id', (request, response, next) => {
    const id = request.params.id

    Person.findById(id)
    .then(person => {
      if(person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
    })
    .catch(error => next(error))
  })

  app.post('/api/persons', (request, response, next) => {
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
      .then(savedPerson => savedPerson.toJSON())
      .catch(error => next(error))
  })

  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
      name: body.name,
      number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
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
    } else if(error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
  }
    next(error)
  }

  app.use(errorHandler)

  const PORT = process.env.PORT
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })