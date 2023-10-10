const morgan = require('morgan')

morgan.token('body', (req) => {
  return JSON.stringify(req.body)
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body')

module.exports = logger;
