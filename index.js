const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server running at 3000");
})

app.get('/retry', (req, res)=>{
    res.send("Hello")
})


app.get('/Aditya', (req, res)=>{
    res.send("Aditya")
})