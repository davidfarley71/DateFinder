const express = require('express')
const app = express()
const port = 3003
const bodyParser = require("body-parser")
const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dating',
    password: 'Mybffjill1#',
    port: 5432,
  })


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', (req, res) => {
  
    console.log(req.body)
})

console.log(__dirname)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




