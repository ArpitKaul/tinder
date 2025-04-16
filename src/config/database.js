const mongoose = require('mongoose');

const connectDB = async () =>{
   await mongoose.connect("mongodb+srv://arpit:tLoHgCY4CdJJeBvn@cluster0.wpztmix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
};

module.exports = connectDB;


