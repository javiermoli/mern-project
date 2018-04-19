import React, { Component } from 'react';
import Header from '../header/Header.js'
import CreateAccount from '../create-account/create-account'

class CreateAccountHome extends Component {
  constructor(props) {
    super(props);
    this.state = {

  }
}

  render() {
     return (
       <div>
         <Header/>
         <CreateAccount/>
       </div>
     );
   }
 }


export default CreateAccountHome;
