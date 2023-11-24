const router  = require("express").Router();
const BodyPart = require("../models/bodyPart");
const axios = require("axios");

const { createNewBodyPart,getAll } = require("../controllers/bodyPart")

router.post("/", async (req, res)=>{
    try{
        let {name } = req.body;

        name = name.trim();

    
        if(!(name )){
            throw Error(" Empty input fields!")
        }else{
            const newExercice = await createNewBodyPart(req.body)
            res.status(200).json(newExercice)
        }
    }catch(error){
        res.status(400).send(error.message)
    }
})

router.get("/", async (req,res)=>{
    try{
        const bodyParts = await getAll();
        res.status(200).json(bodyParts);
    }catch(err){
        res.status(400).send(err.message)
    }
})

router.post("/maj",async(req,res)=>{
    const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        params: { limit: "1500" },
        headers: {
          "X-RapidAPI-Key": "b31ae75f0emsha93d0d4ebe0de9bp1940d6jsndb53ce76cef1",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };
    
      try {
        const response = await axios.request(options);
        console.log(response.data);
        console.log(response.data.length);
    
        response.data.forEach( async (bodyPart) => {
          const newBodyPart = new BodyPart({
            name: bodyPart,
          });
    
          await newBodyPart.save();
        });
        res.status(200).json("Done");
      } catch (error) {
        console.error(error);
      }
})

module.exports = router;