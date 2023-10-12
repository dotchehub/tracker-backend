const Exercice = require('../models/exercice');

const createNewExercice = async (data) =>{
    try {   
        const {name} = data;

        const existingExercice = await Exercice.findOne({name});

        if(existingExercice){
            throw Error("Exerice with the provided name already exists");
        }
    
        const newExercice  = new Exercice({
            name,
        })

        const createdExercice  = await newExercice.save();

        return createdExercice; 
    } catch (error) {
        throw  error;
    }
}

module.exports = { createNewExercice }