import express from "express";
import data from './data.js'

const app = express();

app.get('/', (req,res)=>{
    res.send("How you Doin..!")
})

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})  

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server Listening on Port ${5000}`)
})