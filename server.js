//First terminal command for using Node to create projects
//type 'npm init'
//----------------------------------------------------------
//Helps facilate server connection better then by hand. 
//Install express 'npm install express'.
const express = require('express')
const app = express()
//----------------------------------------------------------
//Connecting to exteral database.
//Install MongoDB 'npm install mongodb'.
const MongoClient = require('mongodb').MongoClient
//----------------------------------------------------------
//To hide database credentials using a veriable, use a env file.
//Install 'npm install dotenv'.
require('dotenv').config()
//----------------------------------------------------------
//To keep from constantly manually starting and stoping server, use Nodemon.
//Install Nodemon 'npm install nodemon --save-dev'.
//Add this to package.json script-- "dev": "nodemon server.js"
//----------------------------------------------------------
//Helps live render our HTML based on the responses we from our database, EJS.
//Install 'npm install ejs'
//----------------------------------------------------------
//The port your server will be running on
const PORT = 8005