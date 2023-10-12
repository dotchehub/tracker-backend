const mongoose = require('mongoose')



// Define Schema
const WorkoutSchema = new mongoose.Schema({
    name: String,
    date: Date,
    note: String,
    userId: String
})

WorkoutSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// Export model
module.exports = mongoose.model('Workout', WorkoutSchema)
