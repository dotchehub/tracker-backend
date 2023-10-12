require("./config/db")
const express = require('express')
const cors = require('cors')

const errorHandler = require("./middlewares/error")
const logger = require('./middlewares/logger')

const notesRouter = require('./routes/notes')
const usersRouter = require('./routes/users')
const workoutRouter = require('./routes/workout')

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
app.use('/workout',workoutRouter)



app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})