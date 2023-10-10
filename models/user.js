const mongoose = require('mongoose')

// Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: {type:String,unique:true},
    password: String,
    token: String,
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    
  }
})


// Export model
module.exports = mongoose.model('User', userSchema)
