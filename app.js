const express = require("express")
const app = express()

app.get("/",function(req,res){
    res.end("node JS")
})

app.get("/cadastrar/:produto",function(req,res){
    res.end("produto: "+ req.params.produto)
})

app.get("/pesquisar/:produto/:modelo",function(req,res){
    res.end("produto: "+ req.params.produto +  "\nmodelo:" + req.params.modelo)
})

app.get("/contato/:sac/:produto",function(req,res){
    res.end("sac: "+ req.params.produto +  "\nproduto:" + req.params.modelo)
})

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
})

