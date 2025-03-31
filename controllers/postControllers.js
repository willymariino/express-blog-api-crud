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
    // post è l'oggetto che andiamo ad iterare all'interno dell'array e mi chiedo se quell'id è lo stesso che che sto andando a ricercare, id è una chiave di posts
    const post = posts.find(post => post.id === id)

    // facciamo il controllo
    if (!post) {
        // res.status(404)
        return res.status(404).json({
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
    // req e res sono oggetti, mentre id è la chiave dell'oggetto
    // qualunque valore inviato dall'utente viene considerato una stringa, quindi
    const id = parseInt(req.params.id)

    // cerchiamo il post tramie id
    const post = posts.find(post => post.id === id)

    // controllo

    if (!post) {

        res.status(404)

        return res.json({
            status: 404,
            error: "not found",
            message: "post non tovato"


        })

    }

    // rimuoviamo il post dall'array di oggetti

    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)



}





module.exports = { index, show, store, update, destroy }