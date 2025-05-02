const express = require("express");
const env = require('dotenv');
const app = express();
// const port = 8040;

const port = process.env.port||8040;

app.get('/',(req,res)=>{
    res.send("<h1>hellowe wke ew</h1>");
});
app.listen(port,console.log(`server is running on:${port}`));