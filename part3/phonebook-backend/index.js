const { json } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()

morgan.token('person', (req, res) => {

    const id = Number(req.params.id)
    const person = phonebook.find(person => person.id === id)
    
    return JSON.stringify({"name" : person.name, "number": person.number})
})

app.use(express.json())


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

let phonebook =
    [
        {
            "id": 1,
            "name": "Arto Hellas",
            "number": "040-123456"
        },
        {
            "id": 2,
            "name": "Ada Lovelace",
            "number": "39-44-5323523"
        },
        {
            "id": 3,
            "name": "Dan Abramov",
            "number": "12-43-234345"
        },
        {
            "id": 4,
            "name": "Mary Poppendieck",
            "number": "39-23-6423122"
        }
    ]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')

    // console.log(process.stdout)
})

app.get('/api/persons', (request, response) => {
    response.json(phonebook)

    // console.log(process.stdout)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(person => person.id === id)

    if (person)
        response.json(person)
    else
        response.status(404).end()

    // console.log(process.stdout)
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${phonebook.length} people</p><p>${new Date()}</p>`)
    // console.log(process.stdout)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)

    phonebook = phonebook.filter(phone => phone.id !== id)
    response.status(204).end()
    // console.log(process.stdout)
})

app.post('/api/phonebook', (request, response) => {


    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'Name or phone number is missing' })
    }

    const findName = phonebook.find(p => p.name.toLowerCase() === body.name.toLowerCase())

    if (findName)
        return response.status(409).json({ error: 'Name must be unique' })


    //Find max id in list
    const maxId = phonebook.length > 0 ? Math.max(...phonebook.map(p => p.id)) : 0

    const person = {
        name: body.name,
        phone: body.phone,
        id: maxId + 1
    }

    phonebook = phonebook.concat(person)

    response.json(person)
    // console.log(process.stdout)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})