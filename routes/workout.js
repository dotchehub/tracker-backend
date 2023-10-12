const router = require("express").Router();
const Workout = require("../models/workout");

const { createNewWorkout, getOne, getUserWorkouts} = require("../controllers/workout")

// GET ALL
router.get("/",(req,res)=>{
    Workout.find({})
    .then(workouts => res.json(workouts))
    .catch(error=>{
        throw Error(`Find all workout failed ${error}`)
    })
})
// Get one by id
router.get("/:id", async (req,res)=>{
    try {
        let workoutId = req.params.id;
        if(!workoutId){
            throw Error("Missing workout id")
        }else{
            const workout = await getOne(workoutId);
            res.status(200).json(workout)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
   
})

// Find all by user id
router.get("/user/:id", async (req, res, next) => {
    try {
        console.log("USER WANTS Workouts")
        let userId = req.params.id;
        if(!userId){
            throw Error("Missing user id")
        }else{
            const workouts = await getUserWorkouts(userId);
            res.status(200).json(workouts)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
  });


// CREATE ONE
router.post("/", async (req,res)=>{

    try {
        let {name, date, note,userId} = req.body;

        name = name.trim();
        note = note.trim();
        userId = userId.trim();
    
        if(!(name && date && note)){
            throw Error(" Empty input fields!")
        }else{
            const newWorkout = await createNewWorkout(req.body)
            res.status(200).json(newWorkout)
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
   
})




module.exports = router;