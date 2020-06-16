
const express = require('express')
    , app = express()
    , server = require('http').Server(app)
    , router = express.Router()
    , port = process.env.PORT || 4000
    , bodyParser = require("body-parser")
//, vanilla = require("vanillapay")


module.exports.express = express
module.exports.app = app
module.exports.server = server
module.exports.router = router
module.exports.port = port
module.exports.bodyParser = bodyParser
//module.exports.vanilla = vanilla

