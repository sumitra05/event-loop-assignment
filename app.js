const express = require("express");

const books = require("./books.json");
const PORT = 5000;

let app = express();

app.get("/", (req,res)=>{
    res.send('hello');
});

app.get("/books", (req,res)=>{
    res.send(books);
});

app.listen(PORT, ()=>{
    console.log(`listening on port : ${PORT}`);
})
