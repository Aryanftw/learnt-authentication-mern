const express = require('express')
const app = express()
const database = require('./db')
const Schema = require('./Schema')
const cors = require('cors')
require('dotenv').config();

app.use(cors())
const port = process.env.PORT
database()
app.use(express.json())
app.post('/register', async(req,res)=>{
  const {email,password} = req.body
  const user = new Schema({email,password});
  await user.save();
  res.json({message:'User created successfully'})
})

app.post('/login',async (req,res)=>{
  const {email,password} = req.body
  const user =  await Schema.findOne({email})
  if(!user){
    return res.send('Invalid Email/Pass')
  }

  if(user.password != password){
   return res.send('Invalid Email/Pass')
  }

  res.json({message : "Login Successfull"})


})

app.listen(port)