const express = require('express')
const nunjucks = require('nunjucks')

const publicDir = require('path').join(__dirname,'/public');

const server = express()
const app = express()
const videos = require("./data")

app.use(express.static(publicDir));

server.use(express.static('public'))

server.set("view engine", "njk")



nunjucks.configure("views",{
    express:server
})

server.get("/about", function(req, res){
    return res.render("about")

})

server.get("/filmes", function(req, res){

    return res.render("filmes",{items: videos})

})



server.listen(5000, function() {
    console.log("server is running")
})