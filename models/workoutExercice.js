const mongoose = require('mongoose')



// Define Schema
const workoutExerciceSchema = new mongoose.Schema({
    orderNumber: Number,
    workoutId: String,
    exerciceId: String,
})

workoutExerciceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// Export model
module.exports = mongoose.model('workoutExercice', workoutExerciceSchema)
