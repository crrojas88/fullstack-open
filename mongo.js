const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://rodrigo:${password}@cluster0.432zh.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose
.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
})

// If length of CLI arguments are equal to 5 then they are added to db, else if they equal to 3, all results get printed.
// If length of CLI arguments is 4 or more than 5, you have to include quotations.
if(process.argv.length === 5){
    person.save()
    .then(result => {
    console.log(`Added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
})
} else if(process.argv.length === 3) {
    Person.find({})
    .then(result => {
        console.log('Phonebook:')
        result.forEach(person => {
            console.log(person.name, ' - ', person.number)
        })
        mongoose.connection.close()
    })
} else if(process.argv.length === 4 || process.argv.length > 5) {
    console.log('Wrong number of arguments. If your entries have spaces, please wrap them in quotes.')
    mongoose.connection.close()
}