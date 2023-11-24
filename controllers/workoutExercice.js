const WorkoutExercices = require('../models/workoutExercice');
const Exercice = require('../models/exercice');

const mongoose = require("mongoose")

const createNewTrainingExercice = async (data) =>{
    try {   
        const {orderNumber, exerciceId, workoutId,_id} = data;

        
        const exist = await  WorkoutExercices.findOne({workoutId:workoutId,exerciceId:exerciceId})
       // Need to be change for only post new workoutExercices
        let createdTrainingExercice = {}
        if(!exist){
            const newTrainingExercice  = new WorkoutExercices({
                orderNumber,
                workoutId,
                exerciceId
            })
            createdTrainingExercice  = await newTrainingExercice.save();
        }
       

        return createdTrainingExercice; 
    } catch (error) {
        throw  error;
    }
}

const getWorkoutExercices = async (workoutId)=>{
    try{
        var mysort = { orderNumber: -1 };
        const workouts = await WorkoutExercices.find({workoutId})

        const response = [];

        for(const element of workouts){
            const objectToReturn = {};
            const exerciceId = element.exerciceId;
            const exercice = await  Exercice.findOne({exerciceId:exerciceId})
            
            objectToReturn._id = element.id;
            objectToReturn.exerciceName = exercice.name;
            objectToReturn.orderNumber = element.orderNumber;
            objectToReturn.exerciceId = element.exerciceId;
            objectToReturn.workoutId = element.workoutId;

            response.push(objectToReturn)
        }

        return response;
    }catch(error){
        throw error;
    }
}


module.exports = { createNewTrainingExercice,getWorkoutExercices }
