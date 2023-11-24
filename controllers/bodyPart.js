const BodyPart = require('../models/bodyPart');

const createNewBodyPart= async (data) =>{
    try {   
        const {name} = data;

        const existingExercice = await Exercice.findOne({name});

        if(existingExercice){
            throw Error("Body part with the provided name already exists");
        }
    
        const newBodyPart  = new BodyPart({
            name,
        })

        const createdBodyPart  = await newBodyPart.save();

        return createdBodyPart; 
    } catch (error) {
        throw  error;
    }
}

const getAll = async ()=>{
    try{
        const bodyParts = await BodyPart.find({});
        return bodyParts;

    }catch (err){
        throw err;
    }
}

module.exports = { createNewBodyPart,getAll }