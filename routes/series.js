const router = require("express").Router();


const { createNewSerie,getAllSerieByWorkoutExercice,getAllSeriesByExercice } = require('../controllers/series')
// CREATE ONE
router.post("/", async (req,res)=>{

    try {
        let {orderNumber,repetition,weight,workoutExercice } = req.body;


    
        if(!(orderNumber && repetition && weight && workoutExercice )){
            console.log("Order Number "+ orderNumber);
            console.log("Repetition " +repetition);
            console.log("Weight " + weight);
            console.log(workoutExercice);
            throw Error(" Empty input fields! WHILE TRYING TO INSERT SERIE ")
        }else{
            const newSerie = await createNewSerie(req.body)
            res.status(200).json(newSerie)
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
   
})

router.get("/workoutExercice/:id",async(req,res)=>{
    try{
        let workoutExercice = req.params.id;
        if(!workoutExercice){
            throw Error("Missing workout exercice id");
        }else{
            const series = await getAllSerieByWorkoutExercice(workoutExercice);
            res.status(200).json(series);
        }
    }catch(error){
        res.status(400).send(error.message)
    }
})

router.get("/user/:userId/exercice/:exerciceId",async (req,res)=>{
    try{
         let userId = req.params.userId;
         let exerciceId = req.params.exerciceId;

         if(!userId || !exerciceId){
            throw Error("Missing mandatory params");
        }else{
            const series = await getAllSeriesByExercice(userId,exerciceId);
            res.status(200).json(series);
        }

    }catch(error){
        res.status(400).send(error.message)
    }
})
module.exports = router;