//First terminal command for using Node to create projects
//type 'npm init'
//----------------------------------------------------------
//Helps facilate server connection better then by hand. 
//Install express 'npm install express'.
// const express = require('express')
// const app = express()
//----------------------------------------------------------
//Connecting to exteral database.
//Install MongoDB 'npm install mongodb'.
// const MongoClient = require('mongodb').MongoClient
//----------------------------------------------------------
//Choose port your server will be running on
//const PORT = 8005
//----------------------------------------------------------
//To hide database credentials using a veriable, use a env file.
//Install 'npm install dotenv'.
// require('dotenv').config()
//----------------------------------------------------------
//To keep from constantly manually starting and stoping server, use Nodemon.
//Install Nodemon 'npm install nodemon --save-dev'.
//Add this to package.json script-- "dev": "nodemon server.js"
//----------------------------------------------------------
//Helps live render our HTML based on the responses we from our database, EJS.
//Install 'npm install ejs'
//----------------------------------------------------------
//create new '.env' secret file. This is where we'll add our database variables.
//----------------------------------------------------------
//create new '.gitignore' file. Immediately place these two in the file. 
//'node_modules' & '.env'
//----------------------------------------------------------
//Setting up some variables so you don't have to keep retyping things
// let db,
//      dbConnectionStr = process.env.DB_STRING
//      dbBase = 'Name of your database'
//For the DB_STRING appended to process.env. Go into your '.env' file. 
//Add your mongodb database connectionSTR to a DB_STRING variable in the '.env' file.
//Insert your password into the connectionSTR!
//----------------------------------------------------------
//Now connect to your mongodb database
//MongoClient.connect()
//Add your process.env.DB_STRING variable to MongoClient.connect() activation.
//Example of addition syntax
/* 
MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
*/
//----------------------------------------------------------
//Set up so that your listening on a server using this syntax.
/*
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 
*/
/*
NOW WE NEED MIDDLEWARE - 
Use this syntax:
It helps you manipulate the data from your startpoint & endpoint

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
*/

//----------------------------------------------------------
//Create a 'public' folder. Put 'main.js' & 'styles.css' files in.
//Express will know exactly where to look for those
//Create a folder called 'views' & add our 'index.ejs' in there.
//----------------------------------------------------------
//This is all the framework we need to create our project.
//----------------------------------------------------------

const { request, response } = require('express')
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8005
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'star-trek-api'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

//----------------------------------------------------------
//Put after middleware
//CRUD METHODS
app.get('/', (request, response) => {
    db.collection('alien-info').find().toArray()
        .then(data => {
            let nameList = data.map(item => item.speciesName)
            console.log(nameList)
            response.render('index.ejs', {info: nameList})
        })
        .catch(error => console.log(error))
})
app.post('/api', (request, response) => {
    console.log('Post Heard')
    db.collection('db-template').insertOne(
        request.body
    )
    .then(result => {
        console.log(result)
        response.redirect('/')
    })
})

app.put('/updateEntry', (request, response) => {

})

app.delete('/deleteEntry', (request, response) => {

})


