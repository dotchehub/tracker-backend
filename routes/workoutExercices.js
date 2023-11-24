const router = require("express").Router();


const { createNewTrainingExercice,getWorkoutExercices } = require('../controllers/workoutExercice')
// CREATE ONE
router.post("/", async (req,res)=>{

    try {
        let {orderNumber,workoutId,exerciceId } = req.body;

        console.log("TRYING TO CREATE NEW workoutExercice with"+ orderNumber +" workoutId = "+workoutId+ " exerciceId="+exerciceId)


    
        if(!(orderNumber && workoutId && exerciceId )){
            throw Error(" Empty input fields to create new Workout Exercice!")
        }else{
            const newSerie = await createNewTrainingExercice(req.body)
            
            res.status(200).json(newSerie)
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
   
})

router.get("/:id",async (req,res)=>{
    try{
        const workoutId = req.params.id;
        if(!workoutId){
            throw Error(" Empty input fields!")
        }else{
            const workoutExercices = await getWorkoutExercices(workoutId);
            res.status(200).json(workoutExercices);
        }

    }catch(error){
        res.status(400).send(error.message)
    }
})
module.exports = router;