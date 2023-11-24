const router = require("express").Router();
const axios = require("axios");

const Exercice = require("../models/exercice");

const { createNewExercice,getAllByBodyPart,deleteAll,getUserExercice } = require("../controllers/exercices");
// CREATE ONE
router.post("/", async (req, res) => {
  try {
    let { name } = req.body;

    name = name.trim();

    if (!name) {
      throw Error(" Empty input fields!");
    } else {
      const newExercice = await createNewExercice(req.body);
      res.status(200).json(newExercice);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/bodyPart/:name", async (req, res) => {
  try {
    let name  = req.params.name;

    name = name.trim();

    if (!name) {
        throw Error(" Empty input fields!");
      } else {
        const exercices = await getAllByBodyPart(name);
        res.status(200).json(exercices);
      }

  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/maj", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
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

    response.data.forEach(async (exercice) => {
      const newExercice = new Exercice({
        bodyPart: exercice.bodyPart,
        equipment: exercice.equipment,
        gifUrl: exercice.gifUrl,
        exerciceId: exercice.id,
        name: exercice.name,
        target: exercice.target,
        secondaryMuscles: exercice.secondaryMuscles,
        instructions: exercice.instructions,
      });

      await newExercice.save();
    });
    res.status(200).json("Done");
  } catch (error) {
    console.error(error);
  }
});

router.delete("/",async (req,res)=>{
    try{
        deleteAll();
    }catch(error){
        throw error;
    }
})

router.get("/user/:userId",async(req,res)=>{
  try{
    let userId  = req.params.userId;

    if (!userId) {
        throw Error("Empty input fields (missing user id) !");
      } else {
        const exercices = await getUserExercice(userId);
        res.status(200).json(exercices);
      }
  }catch(error){
    res.status(400).send(error.message);
  }
})
module.exports = router;
