const express = require('express'); 
const app = express();

app.use("/user", 
    (req , res)=>{
     console.log("Handling the route user!!");
     res.send("Response!!"); 
},
(req , res)=>{
    console.log("Handling the route  2!!");
    res.send("2nd Response!!");
})

app.listen(7777, () => {
    console.log('Server started on port 7777');
});
   

// Multiple Route handlers - play with the code
// next 
// next function and errors along with res.send()
// app.use("/route" , rh [rh2 rh3], rh4 , rh5);