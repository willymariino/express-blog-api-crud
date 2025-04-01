const express = require("express") // vado ad importare express
const app = express() // invoco express

const port = 3000 // indico quale porta voglio utilizzare

const postRouter = require("./router/posts")

app.use(express.static("public")) // vado ad accedere a risorse statiche come le immagini

app.use(express.json()) // effettuo il body parsing per decodificare il body, in modo da poter accedere anche alle risorse json

app.use("/posts", postRouter)

app.listen(port, () => {
    console.log("server attivo sulla porta:" + " " + port)

})