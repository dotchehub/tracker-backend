require("./config/db")
const express = require('express')
const cors = require('cors')

const middlewares = require('./utils/middlewares')

const notesRouter = require('./routes/notes')
const usersRouter = require('./routes/users')

const {PORT} = process.env;


// Connect to database

// Create server
const app = express()

// Init server
app.use(cors())
app.use(express.json())
app.use(middlewares.logger)

app.use('/api/notes',notesRouter)
app.use('/users',usersRouter)



app.use(middlewares.errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})