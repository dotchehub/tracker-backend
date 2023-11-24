const Exercice = require('../models/exercice');
const Workout = require('../models/workout');
const WorkoutExercices = require('../models/workoutExercice');

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

const getAllByBodyPart = async (bodyPart) =>{
    try{
        const exercices = Exercice.find({bodyPart});
        return exercices;
    }catch(err){
        throw err;
    }
}

const getUserExercice = async(userId)=> {
    try{
        const exercicesId = new Set();
        const exercices = [];
        const workouts = await Workout.find({userId:userId});
        for(let i=0;i<workouts.length;i++){
            let wExercices = await WorkoutExercices.find({workoutId:workouts[i].id});
            for(let j=0;j< wExercices.length;j++){
                const exercice = await Exercice.findOne({exerciceId:wExercices[j].exerciceId}) 
                if(!exercicesId.has(exercice.exerciceId)){
                    exercices.push(exercice);
                    exercicesId.add(exercice.exerciceId);
                }                
                
            }
        }
        return exercices;
    }catch(error){
        throw error;
    }
}

const deleteAll = async ()=>{
    try{
       const deleted = await Exercice.deleteMany({})

    }catch(error){
        throw error;
    }
}

module.exports = { createNewExercice, getAllByBodyPart,deleteAll,getUserExercice }