const express = require('express')
const app = express() 

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})

app.use(express.static('public/catto'));

app.get('/here', (req, res, next) => {
    res.send('here')
    console.log('hello world')
})
