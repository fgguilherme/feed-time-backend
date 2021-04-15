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

const feederDataRoutes = require('./src/routes/feederData.routes')
// using as middleware
app.use('/api/v1/', feederDataRoutes)

const foodRoutes = require('./src/routes/food.routes')
// using as middleware
app.use('/api/v1/food', foodRoutes)

const foodKindRoutes = require('./src/routes/foodkind.routes')
// using as middleware
app.use('/api/v1/foodKind', foodKindRoutes)

const locationRoutes = require('./src/routes/location.routes')
// using as middleware
app.use('/api/v1/location', locationRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})