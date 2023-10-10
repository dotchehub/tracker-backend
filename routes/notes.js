const router = require("express").Router();
const Note = require("../models/note");

// Insert one
router.post("/", (req, res, next) => {
  const body = req.body;
  // Check body
  
  // Insert
  const newNote = new Note(body);
  newNote
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err))

});

module.exports = router;
