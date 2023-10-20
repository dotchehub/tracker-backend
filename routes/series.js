const router = require("express").Router();


const { createNewSerie } = require('../controllers/series')
// CREATE ONE
router.post("/", async (req,res)=>{

    try {
        let {orderNumber,repetition,weight,trainingExercice } = req.body;


    
        if(!(orderNumber && repetition && weight && trainingExercice )){
            throw Error(" Empty input fields!")
        }else{
            const newSerie = await createNewSerie(req.body)
            res.status(200).json(newSerie)
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
   
})

module.exports = router;