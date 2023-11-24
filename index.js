require("./config/db")
const express = require('express')
const cors = require('cors')

const errorHandler = require("./middlewares/error")
const logger = require('./middlewares/logger')

const notesRouter = require('./routes/notes')
const usersRouter = require('./routes/users')
const workoutRouter = require('./routes/workout')
const exerciceRouter = require('./routes/exercices')
const serieRouter = require('./routes/series')
const workoutExerciceRouter = require('./routes/workoutExercices')
const bodyPart = require('./routes/bodyPart')

const {PORT} = process.env;


// Connect to database

// Create server
const app = express()

// Init server
app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/api/notes',notesRouter)
app.use('/users',usersRouter)
app.use('/workouts',workoutRouter)
app.use('/exercices',exerciceRouter)
app.use('/series',serieRouter)
app.use('/workoutExercices',workoutExerciceRouter)
app.use('/bodyparts',bodyPart);



app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})