const server = require('express').Router()
const { Mercadolibre } = require('../db.js')
const axios = require("axios")

server.post("/api/search/", (req,res) => {
    Mercadolibre.destroy({truncate:true}); 
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
     .then(data => {
    Mercadolibre.bulkCreate(data.data.results)
    .then(a => res.send(a))
})
    .catch(err => res.send(err))
})


module.exports = server
