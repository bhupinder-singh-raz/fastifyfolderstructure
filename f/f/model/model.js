const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name : {type : String},
    password : {type : String}
},{ timestamps: true});

const User = new mongoose.model("User", userschema);

// export
module.exports = User;