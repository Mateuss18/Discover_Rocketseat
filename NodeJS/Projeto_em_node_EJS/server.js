const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){
    const item = [
        { 
            title: "D",
            message: "Desenvolvedor" 
        },
        {
            title: "E",
            message: "EJS"
        },
        {
            title: "M",
            message: "Muito"
        },
        {
            title: "A",
            message: "Atrativo"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de pagina HTML"
    
    res.render("pages/index", {
        qualitys: item,
        subtitle: subtitle,
    })
})

app.get("/sobre", function (req, res){
    res.render("pages/about")
})

app.listen(8080)
console.log("Rodando")