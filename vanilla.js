//const modules = require("./modules")
const vanilla = require("vanillapay")

const payment = vanilla(process.env.self_url, process.env.client_id, process.env.client_secret, process.env.public_key, process.env.private_key);

console.log("instance::", payment);

function vpayement(idpanier, montant, nom, reference, adresseip) {

    payment.initPaie(idpanier, montant, nom, reference, adresseip, function (idpayment) {

        console.log("Poainsa:: ", idpayment);
    });

}

/*function vp_result() {

    payment.resultPaie(idpayment, function (result) {
        console.log(result);
    });

}*/

module.exports.vpayement = vpayement
//module.exports.vp_result = vp_result
