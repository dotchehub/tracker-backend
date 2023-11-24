const Workout = require("../models/workout")

const createNewWorkout = async (data)=>{
    try {   
        const {name, date, note,userId} = data;

        const existingWorkout = await Workout.findOne({name});

        if(existingWorkout){
            throw Error("User with the provided nale already exists");
        }
    
        const newWorkout = new Workout({
            name,
            date,
            note,
            userId
        })

        const createdWorkout = await newWorkout.save();

        return createdWorkout; 
    } catch (error) {
        throw  error;
    }
}

const getOne = async (id) =>{
    try {
        const workout = await Workout.findById(id);
        return workout;
    } catch (error) {
        throw error
    }
    
}

const getUserWorkouts = async(userId) =>{
    try {
       const workouts = await Workout.find({userId: userId})
       
       return workouts;
    } catch (error) {
        throw error
    }
}
module.exports = { createNewWorkout, getOne, getUserWorkouts }