const express = require('express')
const app = express()

app.use(express.json())

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
})

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(person => person.id === id)

    if (person)
        response.json(person)
    else
        response.status(404).end()
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${phonebook.length} people</p><p>${new Date()}</p>`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)

    phonebook = phonebook.filter(phone => phone.id !== id)
    response.status(204).end()
})

app.post('/api/phonebook', (request, response) => {


    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'Name or phone number is missing' })
    }

    const findName = phonebook.find(p => p.name.toLowerCase() === body.name.toLowerCase())

    if(findName)
        return response.status(409).json({ error: 'Name must be unique' })


    //Find max id in list
    const maxId = phonebook.length > 0 ? Math.max(...phonebook.map(p => p.id)) : 0

    const person = {
        name: body.name,
        phone: body.phone,
        id: maxId+1
    }

    phonebook = phonebook.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})