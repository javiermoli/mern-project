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
    email:'javomolinas91@gmail.com',
    password:'123456'
  }
}

const questions = new Array(10).fill(question)

// GET api/questions
app.get('/', (req, res) => res.status(200).json(questions))


// GET api/questions/:id

app.get('/:id', (req, res) => {
  const { id }= req.params // es lo mismo que esto: const id = req.params.id
  const q = questions.find(({ _id }) => _id === +id) // otra forma: questions.find(({ _id }) => _id === +id)
  res.status(200).json(q)
})

// POST api/questions
app.post('/', (req, res) => {
  const question = req.body
  question._id = +new Date()
  question.user = {
    email:'javomolinas91@gmail.com',
    password:'123456',
    firstName: 'Javier',
    lastName:'Molinas',
  }
  question.createdAt= new Date();
  question.answers = [];
  questions.push(question);
  res.status(201).json(question);
})


export default app
