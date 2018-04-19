import React, { Component } from 'react';
import Question from '../question/Question-answer.js'
import AnswerContainer from '../answer/answer-container.js'
import AnswerHeader from '../answer/answerHeader.js'
import AnswerForm from '../answer/answer-form.js'
import Header from '../header/Header'
import urljoin from 'url-join'
import { CircularProgress } from 'material-ui/Progress';



window.id = 0
class HomeQuestionAnswer extends Component {
  constructor() {
    super();
    this.state = {
      answers:[],
      name:'Javier Molinas',
      title:'',
      description:'',
      spinned:true
    }
  }

  componentDidMount() {
    const http = "http://localhost:4040/api"
    fetch(urljoin('/api/questions/:id'))
      .then(res => res.json())
      .then(
        (result) => {
        //this.state.questions.push(result)
        console.log(result);

          this.setState({
            title:result.title,
            description:result.description
          })

        },
         //Note: it's important to handle errors here
         //instead of a catch() block so that we don't swallow
         //exceptions from actual bugs in components.
        (error) => {
          console.log(`Error ${error} ${error.status}`);
        }
      )
    }


  onSubmit = (val) => {
    const answer = {text: val, id:window.id++}
    this.state.answers.push(answer)
    this.setState({answers: this.state.answers})
    console.log(this.state.answers);
  }
  render() {
    const dateToFormat = new Date();
     return (
         <div>
           <Header/>
            {
              this.state.title === ''
              ?<CircularProgress size={50}/>
              :<Question dateToFormat={dateToFormat} title={this.state.title} description={this.state.description}/>
            }
           <AnswerHeader/>
           <AnswerForm onSubmit={this.onSubmit}/>
           <AnswerContainer arrayAnswers={this.state.answers} name={this.state.name}/>

         </div>
     );
   }
 }


export default HomeQuestionAnswer;
