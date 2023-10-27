const router = require("express").Router();


const { createNewTrainingExercice } = require('../controllers/trainingExercice')
// CREATE ONE
router.post("/", async (req,res)=>{

    try {
        let {orderNumber,idTraining,idExercice } = req.body;


    
        if(!(orderNumber && idTraining && idExercice )){
            throw Error(" Empty input fields!")
        }else{
            const newSerie = await createNewTrainingExercice(req.body)
            res.status(200).json(newSerie)
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
   
})

module.exports = router;