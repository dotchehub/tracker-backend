const router = require("express").Router();
const User = require("../models/user");

const { createNewUser } = require("../controllers/users")

// Insert one
router.post("/", async (req, res, next) => {
 try {
    let {name, email, password} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();

    if(!(name && email && password)){
        throw Error("Empty input fields!");
    }else{
        // create new user
        const newUser = await createNewUser({
            name,
            email,
            password
        })
        res.status(200).json(newUser)
    }
 } catch (error) {
    console.log("Un promeJJJJJJJKK")
    res.status(400).send(error.message)
 }
});

module.exports = router;
