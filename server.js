const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const settings = require('./config/server.config')
const app = express()
// Setup server port
var port = settings.port;
if(process.argv[2] && process.argv[2].split("=")[0] == "PORT"){
  port = process.argv[2].split("=")[1] || settings.port;
}

app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '50mb', extended: true}))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})