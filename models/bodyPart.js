const mongoose = require('mongoose')



// Define Schema
const BodyPartSchema = new mongoose.Schema({
    name: String,
})

BodyPartSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// Export model
module.exports = mongoose.model('BodyPart', BodyPartSchema)
