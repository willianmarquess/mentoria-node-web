const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors('*'))
app.use(express.json())

const names = [
                {  name: 'nato' },
                { name: 'will' },
                { name: 'ricci' }
            ]

app.get('/names', (req, res) => {
    res.json(names)
})

app.get('/cod', (req, res) => {
    res.json({cod: 10})
})

app.post('/cod', (req, res) => {
    const { name } = req.body;
    console.log('name received : ', name);
})

app.listen(3333, () => {
    console.log('running on 3333');
})