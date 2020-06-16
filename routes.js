const modules = require("./modules")
const vanilla = require("./vanilla")

function getRoutes() {

    modules.app.get('/', function (req, res) {

        res.render('pages/index', {

            produit: "eto no asiana ny sarina produit + bouton acheter "

        });


    })

    modules.app.get('/retour', function (req, res) {

        res.render("retour")

    })

    modules.app.get('/echec', function (req, res) {

        res.render("echec de paiement")

    })

    modules.app.get('/notif', function (req, res) {

        res.render("notif")

    })

    modules.app.post('/acheter', function (req, res) {

        //  var acheter = req.body.acheter

        // console.log(req.body.idpanier, req.body.montant, req.body.nom, req.body.reference);

        vanilla.vpayement(req.body.idpanier, req.body.montant, req.body.nom, req.body.reference, process.env.adr_ip)
        res.redirect("/");

    })
}

module.exports.getRoutes = getRoutes
