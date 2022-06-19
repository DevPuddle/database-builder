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
//----------------------------------------------------------
//Choose port your server will be running on
//const PORT = 8005


const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8005
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING
    dbName = 'star-trek-api'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


