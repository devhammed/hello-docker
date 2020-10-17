const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) =>
  res.json([
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com'
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com'
    },
    {
      name: 'Jake Doe',
      email: 'jake.doe@gmail.com'
    },
    {
      name: 'Rose Doe',
      email: 'rose.doe@gmail.com'
    }
  ])
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
