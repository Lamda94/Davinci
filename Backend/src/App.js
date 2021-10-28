const express = require('express');
const cors = require("cors");
const {router} = require('./routes/file.routes.js');
const {execute} = require("../config/SQLQuery.js");
require('dotenv').config();

const app = express();

const path = __dirname.replace('src', 'public');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path));
app.use(cors())
app.use(router);


const PORT = process.env.PORT;

app.get("/", async (req, res)=>{
    await execute("select * from users");
    res.send("hola mundo")
})

app.listen(PORT,()=>console.log(`app is running on port ${PORT}`));