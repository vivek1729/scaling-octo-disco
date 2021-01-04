const express = require('express')
const app = express()
const port = 4040

app.get('/', (req, res) => {
  res.send("Hello world, it is 2021!");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})