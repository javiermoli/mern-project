import React, { Component } from 'react';
import Header from '../header/Header'
import QuestionForm from '../question/question-form'
import QuestionList from '../question/question-list'
import urljoin from 'url-join'
import { CircularProgress } from 'material-ui/Progress';


window.id = 0
class HomeQuestionAnswer extends Component {
  constructor() {
    super();
    this.state = {
      questions:[],
      questionsAPI:[],
      spinner:true
    }
  }

  componentDidMount() {
    const http = "http://localhost:4040/api"
    fetch('api/questions')
      .then(res => res.json())
      .then(
        (result) => {
        //this.state.questions.push(result)
        this.setState({
          questions:result,
          spinner:false
        })
        console.log(this.state.questionsAPI);
        },
         //Note: it's important to handle errors here
         //instead of a catch() block so that we don't swallow
         //exceptions from actual bugs in components.
        (error) => {
          console.log(`Error ${error} ${error.status}`);
        }
      )
    }


  onSubmit = (titleVal, descriptionVal, iconVal) => {
    const question = {title: titleVal, id:window.id++, description:descriptionVal, iconClass:iconVal }
    this.state.questions.push(question)
    this.setState({questions: this.state.questions})
    console.log(this.state.questions.length);
  }



  render() {
     return (
         <div>
           <Header/>
           <QuestionForm  onSubmit={this.onSubmit}/>
           {this.state.spinner ? <CircularProgress size={50} />
           :<QuestionList arrayQuestions={this.state.questions}/>}
         </div>
     );
   }
 }


export default HomeQuestionAnswer;
