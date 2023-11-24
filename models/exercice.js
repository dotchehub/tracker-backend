const mongoose = require('mongoose')



// Define Schema
const ExerciceSchema = new mongoose.Schema({
  bodyPart:String,
  equipment:String,
  gifUrl:String,
  exerciceId:String,
  name:String,
  target:String,
  secondaryMuscles:Array,
  instructions:Array
})

ExerciceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// Export model
module.exports = mongoose.model('Exercice', ExerciceSchema)
