const Serie = require('../models/serie');
const Workout = require("../models/workout")
const WorkoutExercices = require('../models/workoutExercice');

const createNewSerie = async (data) =>{
     
        const {orderNumber,repetition,weight,workoutExercice,id} = data;
        const _id = id;
        const existingSerie = await Serie.findOne({_id});

        let serie=null;
        if(existingSerie){
            console.log("SERIE ALREAD>Y EXIST KJNJNDKNZDJNZCIJNF JCNJZCNSJDFCNJFCNJKCNJZCNZKCNKELCNKECKEFNCK")
            try{
               serie =  await Serie.updateOne({_id},{orderNumber,repetition,weight})
            }catch(error){
                throw error;
            }
        }else{
            const date = Date.now();
            try{
                const newSerie  = new Serie({
                    orderNumber,
                    repetition,
                    date,
                    weight,
                    workoutExercice
                })
                serie  = await newSerie.save();
            }catch(error){
                throw error;
            }
           
        }
       
        return serie; 
  
}

const getAllSerieByWorkoutExercice = async(workoutExerciceId)=>{
    const series = await Serie.find({workoutExercice:workoutExerciceId});
    return series;
}

const getAllSeriesByExercice = async(userId,exerciceId)=>{
    const workouts = await Workout.find({userId: userId})
    console.log("Number of Workouts "+workouts.length)
    foundedSeries = [];
    for(let i=0;i<workouts.length;i++){
        const workoutExercice = await WorkoutExercices.findOne({workoutId: workouts[i].id,exerciceId:exerciceId});
        if(workoutExercice){
            const series = await Serie.find({workoutExercice:workoutExercice.id})
            const object = {};
            object["date"] = workouts[i].date;
            object["serie"] = series;

            foundedSeries.push(object);
            /*
            series.forEach(element => {
                foundedSeries[workouts[i].date](element);
            });
            */
        }
        
    }

    return foundedSeries

}
module.exports = { createNewSerie,getAllSerieByWorkoutExercice,getAllSeriesByExercice }