const express = require('express')
const app = express()
const port = 3009
const bodyParser = require("body-parser")
const { Pool } = require('pg')
var cors = require('cors');


var allowedOrigins = ['http://127.0.0.1:5500',
    'http://localhost:3000'];
    
app.use(cors({
    origin: function (origin, callback) {
      console.log(origin)
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

  
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Mybffjill1#',
    port: 5432,
  })


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', async (req, res) => {
  pool.query('SELECT * FROM public.rando limit 500', (error, queryres) => {
    if(error) console.log('there was an error with the this path :/  :'+ error)
    console.log(queryres)
    res.json(queryres)
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))






