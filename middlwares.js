const modules = require("./modules")

function getMidd() {

    modules.app.use('/', modules.router)
    modules.app.use(modules.bodyParser.urlencoded({ extended: true }));
    modules.app.use(modules.bodyParser.json());
    modules.app.set('views', __dirname + '/views');
    modules.app.engine('ejs', require('ejs').renderFile);
    modules.app.use(modules.express.static('assets'))
    modules.app.set('view engine', 'ejs');
}

module.exports.getMidd = getMidd