import React, { Component } from 'react';
import Question from './question'
import { Link } from 'react-router-dom'

class QuestionList extends Component {
  constructor() {
      super();

    }
  render() {
    let arrayQuestion = this.props.arrayQuestions.map((question) =>{
      return(
        <div>
          <Link to={`/question-home/${question.id}`}>
            <Question titleQuestion={question.title} key={question.id} textQuestion={question.description} iconClass={question.iconClass}/>
          </Link>
        </div>

      )
    })
     return (
       <div>
         { arrayQuestion }
       </div>
     );
   }
 }

export default QuestionList;
