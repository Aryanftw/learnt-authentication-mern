const mongoose = require('mongoose')



const database = async() => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    console.log('MongoDb connected')
  } catch(err){
    console.log(err)
  }
}

module.exports = database
