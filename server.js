const express= require('express');
const Colors = require('colors')

const app= express();

app.get("/",(req,res)=>{
  res.send({message : "welcome to trendy trend"})
});

const PORT = 8080;

app.listen(PORT,()=>{
  console.log(`Server connecterd at ${PORT}`.bgCyan.white)
})