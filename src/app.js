const express = require('express'); 

const app = express();

app.use("/tes ",(req , res)=>{
    res.send("hello from the server!")
})

app.listen(7777 , ()=> {
    console.log('Server started on port 7777');
});
 

