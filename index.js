const express = require('express')
const app = express()

app.get('/', (req, res) => {
res.send('My custom server is running!')
})

app.listen(3000, () => console.log('YOUR SERVER IS RUNNING'))

