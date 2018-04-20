import express from 'express'
import { question } from './routes'
import bodyParser from 'body-parser'


//const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


if(process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*')
    res.setHeader('Acces-Control-Allow-Origin', 'Origin, X-Request-With, Accept')
    res.setHeader('Acces-Control-Allow-Origin', 'POST, GET, PATCH, DELETE, OPTIONS')
    Next()
  })
}
app.use('/api/questions', question/*, cors()*/)
//app.use('/api/questions/:id', question /*cors()*/)

export default app
