const express = require('express')
const app = express()
const port = 3002;

app.get('/', (req, res) => {
    res.send('nodemone is worked')
})

app.listen(port, () => {
    console.log('Listening', port);
})
