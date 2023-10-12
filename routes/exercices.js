const router = require("express").Router();


const { createNewExercice } = require('../controllers/exercices')
// CREATE ONE
router.post("/", async (req,res)=>{

    try {
        let {name } = req.body;

        name = name.trim();

    
        if(!(name )){
            throw Error(" Empty input fields!")
        }else{
            const newExercice = await createNewExercice(req.body)
            res.status(200).json(newExercice)
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
   
})

module.exports = router;