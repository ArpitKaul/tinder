const express = require('express')
const connectDB = require("./config/database")
const app = express();
const User = require('./models/user')

app.post("/signup" , async(req,res) =>{
   
    // creating a new instance of the user model
    const user = new User({
        firstName: "Arpit",
        lastName: "Kaul",
        email: "arpit@gmail.com", 
        password: "arpit123"
    });

    try{
        await user.save();
    res.send("User Added successfully!!")
    } catch (err){
        res.status(400).send("error saving the user "+ err.message);
    }  
})

connectDB().then(()=>{
    console.log("Database connection established...")
    app.listen(7777, () => {
        console.log("Server is running on port 7777");
    })
    
}).catch(err=>{
    console.error("Database cannot be connected")
})


  