const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email : {
    type : String,
    required: true
  },password:{
    type:String,
    required:true
  }
})

const User = new mongoose.model('logindata',UserSchema)

module.exports = User;