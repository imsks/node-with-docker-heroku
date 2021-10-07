//Load express module with `require` directive
var express = require('express')
const dotenv = require('dotenv');

var app = express()
dotenv.config({ path: `/.env.development` })

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 8000;

console.log(PORT)

//Launch listening server on port 8080
app.listen(PORT, function () {
    console.log('app listening on port 8080!')
})