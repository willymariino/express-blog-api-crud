// vado a prendere la cartella con l'array di oggetti
const posts = require("../data/posts2")

// index restituisce l'elenco completo dei post identificati dall'Id
// non usa req.params perchè restituisce tutti i post, non un post specifico
function index(req, res) {
    res.json(posts)
}


// show: restituisce un sigolo post identificato dall'id
// usa req.params.id perchè voglio un post specifico
function show(req, res) {

    // recuperiamo l'id dall'url e trasormiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id)

    // facciamo il controllo
    if (!post) {
        return res.json({
            error: "not found",
            message: "post non trovato"
        })
    }

    res.json(post)
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

    // recuperiamo l'id dall'url e trasormiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramie id
    const post = posts.find(post => post.id === id)

    // controllo

    if (!post) {

        res.status(404)

        return res.json({
            status: 404,
            error: "not found",
            message: "post non tovata"


        })

        // rimuoviamo il post dall'array di oggetti

        posts.splice(posts.indexOf(post), 1)



    }



}

module.exports = { index, show, store, update, destroy }