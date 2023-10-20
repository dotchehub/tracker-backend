const Serie = require('../models/serie');

const createNewSerie = async (data) =>{
    try {   
        const {orderNumber,repetition,weight,trainingExercice} = data;

        const newSerie  = new Serie({
            orderNumber,
            repetition,
            weight,
            trainingExercice
        })

        const createdExercice  = await newSerie.save();

        return createdExercice; 
    } catch (error) {
        throw  error;
    }
}

module.exports = { createNewSerie }