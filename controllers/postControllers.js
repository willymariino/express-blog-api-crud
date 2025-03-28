// vado a prendere la cartella con l'array di oggetti
const posts = require("../data/posts2")

// index restituisce l'elenco completo dei post identificati dall'Id
// non usa req.params perchè restituisce tutti i post, non un post specifico
function index(req, res) {
    res.send("lista dei post")
}


// show: restituisce un sigolo post identificato dall'id
// usa req.params.id perchè voglio un post specifico
function show(req, res) {
    res.send("dettaglio del post con ID:" + req.params.id)
}


// store: crea un nuovo post
// non usa req.params.id perchè stiamo creando un nuovo post, non modificando uno esistente

function store(req, res) {
    res.send("creazione di un nuovo post")
}

// update: sostituisce un post esistente
// usa req.params.id perchè devo sapere quale post modificare
function update(req, res) {
    res.send("modifica integrale del post con ID" + req.params.id)
}

// destroy: elimina un post esistente
// usa req.params.id perchè devo sapere quale post eliminare
function destroy(req, res) {
    res.send("Eliminazione del post con ID" + req.params.id)
}

module.exports = { index, show, store, update, destroy }