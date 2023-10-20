const mongoose = require('mongoose')



// Define Schema
const SerieSchema = new mongoose.Schema({
    orderNumber: Number,
    weight: Number,
    repetition: Number,
    trainingExercice: Number
})

SerieSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// Export model
module.exports = mongoose.model('Serie', SerieSchema )
