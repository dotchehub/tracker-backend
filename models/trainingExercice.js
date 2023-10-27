const mongoose = require('mongoose')



// Define Schema
const trainingExerciceSchema = new mongoose.Schema({
    orderNumber: Number,
    idTraining: String,
    idExercice: String,
  

})

trainingExerciceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// Export model
module.exports = mongoose.model('TrainingExercice', trainingExerciceSchema)
