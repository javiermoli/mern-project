import React, { Component } from 'react';
import logo from './logo.svg';
import HomeSignIn from './components/home/home-sign-in'
import HomeQuestionAnswer from './components/home/home-question-answer'
import CreateAccountHome from './components/home/home-create-account'
import Question from './components/question/question'
import QuestionHome from './components/home/question-home'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";




window.id = 0
class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {



     return (
       <Router>
         <div>
           <Route exact path='/' component={HomeSignIn}/>
           <Route path='/create-account' component={CreateAccountHome}/>
           <Route exact path='/question-home' component={QuestionHome}/>
           <Switch>
            <Route path='/question-home/:number' component={HomeQuestionAnswer}/>
           </Switch>
         </div>
       </Router>
     );
   }
 }


export default App;
