import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Answer from './answer'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    width: 200
  },
  input: {
    display: 'none',
  },
});

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      //  name: '',
        answer: ''
      }
  }

  /*nameHandleChange = e => {
    this.setState({
      name: e.target.value
    })
  }*/

  answerHandleChange = e => {
    this.setState({
      answer:e.target.value
    })
  }



  render() {
    const { classes } = this.props;
    let input
    let inputt
    return (
      <form className={classes.container}
         noValidate autoComplete="off"
         ref={node => {
           inputt = node}}

         onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(input.value);
            inputt.reset() //se puede resetear asi o seteando el estado a ''
            /*this.setState({
              answer:''
            })*/

             }}>
        <TextField
          id="name"
          label="name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.nameHandleChange}
          margin="normal"
        />
        <textarea
          className='textarea-form-answer'
          placeholder='Respuesta'
          ref={node => {
            input = node}}
          /*value={this.state.answer}
          onChange={this.answerHandleChange}*/
          >
          </textarea>
        <Button variant="raised" color="primary" className={classes.button}
          type='submit'
          input='submit'
          >
          Responder
        </Button>
      </form>
    );
  }
}

AnswerForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit:PropTypes.func.isRequired
};

export default withStyles(styles)(AnswerForm);
