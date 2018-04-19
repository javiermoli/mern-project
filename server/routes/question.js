import express from 'express'

const app = express.Router()

const question = {
  id:1,
  title:'Como reutilizo un componente en Android?',
  description:'Miren esta es mi pregunta... Como hago para ser mas',
  createdAt: new Date(),
  iconClass:'devicon-android-plain',
  answers:[],
  user:{
    firstName:'Javier',
    lastName:'Molinas',
    email:'javonolinas91@gmail.com',
    password:'123456'
  }
}

const questions = new Array(10).fill(question)

//api/questions
app.get('/', (req, res) => res.status(200).json(questions))


//api/questions/:id

app.get('/:id', (req, res) => {
  setTimeout(() =>{ res.status(200).json(question) }, 1000)
})


export default app
