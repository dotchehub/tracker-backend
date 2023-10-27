const TrainingExercice = require('../models/trainingExercice').default;

const createNewTrainingExercice = async (data) =>{
    try {   
        const {orderNumber, idExercice, idTraining} = data;

        const newTrainingExercice  = new TrainingExercice({
            orderNumber,
            idExercice,
            idTraining
        })

        const createdTrainingExercice  = await newTrainingExercice.save();

        return createdTrainingExercice; 
    } catch (error) {
        throw  error;
    }
}

module.exports = { createNewTrainingExercice }