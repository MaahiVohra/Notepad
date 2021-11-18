const express = require("express")
const app = express() // stores express in a variable to create an application
app.set("view engine", "ejs")// view engine tells how are we gonna process our views in this case using "ejs"

app.use(express.static("public")) // all the files in the public folder are static files that we want to serve no matter what

app.get('/', (req,res) => { // gets the page "/" and proceeds acc to the function
    //res.send("working") // sends the response "hi" to the "/" page
    
    const code = `Welcome to letsc0de
use commands in the top right corner
to create a new file or share with others`
    res.render("code-display.ejs", {code, lineNumbers: code.split('\n').length}) // renders the ejs file to the "/" page
})

app.listen(3000) // starts the node server at localhost:3000