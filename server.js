const express = require("express")
const app = express() // stores express in a variable to create an application
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.set("view engine", "ejs")// view engine tells how are we gonna process our views in this case using "ejs"
app.use(express.static("public")) // all the files in the public folder are static files that we want to serve no matter what
app.use(express.urlencoded( {extended: true }))

const mongoose = require("mongoose")
const document = require("./models/document")

mongoose.connect("mongodb+srv://Maahi:ArhovihaaM19$@letsc0de.yirct.mongodb.net/letsc0de?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
})
const code = `letsc0de
use commands in the top right corner
to create a new file or share with others`
app.get('/', (req,res) => { // gets the page "/" and proceeds acc to the function
    res.render("code-display.ejs", { code }) // renders the ejs file to the "/" page
})

// app.post("/save", async(req, res) => {
//     const value = req.body.value
//     console.log(req.body.value)
//     try{
//         const document = await document.create({ value })
//         res.redirect("/$document.id")
//     }
//     catch(e){
//         res.render("code-display.ejs", { code })
//     }
// })

app.post('/save', function(req, res) {
    const dataentered = req.body.value
    var datastored = new document({value:"Maahivohra"});

    datastored.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

// app.get("/:id", async(res, req) => {
//     const id = req.params.id
//     try{
//         const document = await document.findById(id)
//         res.render("code-display", {code: document.value})
//     } catch (e){
//         res.redirect("/")
//     }
// })

app.listen(3000, ()=>{
    console.log("server running...")
}) // starts the node server at localhost:3000