import express from 'express'
import { question } from './routes'
const app = express()

var cors = require('cors')

if(process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*')
    res.setHeader('Acces-Control-Allow-Origin', 'Origin, X-Request-With, Accept')
    res.setHeader('Acces-Control-Allow-Origin', 'POST, GET, PATCH, DELETE, OPTIONS')
    Next()
  })
}
app.use('/api/questions', question, cors())
//app.use('/api/questions/:id', question /*cors()*/)

export default app
