const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get('/naruto',(req,res)=>{
    res.status(200).json({
        name:"Uzumaki Naruto",
        age:16,
        address:"Làng lá hỏa quốc"
    })
})
app.listen(4000, () => console.log("Server ready on port 3000."));

module.exports = app;