'use strict'

const modules = require("./modules")
    , mid = require("./middlwares")
    , routes = require("./routes")

require('dotenv').config()



mid.getMidd()
routes.getRoutes()

//include payment instance where you wanna do shopping
//const payment = require("./vanilla")

modules.server.listen({
    port: modules.port
}, function () {

    console.log('Le serveur écoute sur le port', modules.port)

})

