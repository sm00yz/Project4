const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
/* Dependencies */ // body-parser, cors
const bodyParser = require('body-parser')
const cors = require('cors');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.use(express.json());
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
app.post('/test', function (req, res) {
   // const data = JSON.stringify(req.body.text)
    textapi.sentiment({
      'url': req.body.text
  }, function(error, response) {
      console.log(response);
       res.send(response);
    
  });
});
app.get('/test', function(req, res) {
  res.send(mockAPIResponse)
})