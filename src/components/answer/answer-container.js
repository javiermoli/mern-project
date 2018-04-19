import React, { Component } from 'react';
import Answer from './answer'



class AnswerContainer extends Component {
  constructor(props) {
      super(props);

    }
  render() {
    let array = this.props.arrayAnswers.map((answer) =>{
      return(
        <Answer textAnswer={answer.text} key={answer.id} name={this.props.name}/>
      )
    })
     return (
       <div>
         { array }
       </div>
     );
   }
 }

export default AnswerContainer;
