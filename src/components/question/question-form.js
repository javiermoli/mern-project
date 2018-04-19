import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SelectIcon from '../question/select-icon'

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

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      //  name: '',
        checkIcon: ''

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
    let titleVal
    let descriptionVal
    let formVal
    let checkedVal
    return (
      <form className={classes.container}
         noValidate autoComplete="off"
         ref={el => {
          formVal  = el}}

         onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(titleVal.value, descriptionVal.value, checkedVal.value)
            formVal.reset() //se puede resetear asi o seteando el estado a 'vacio'
            /*this.setState({
              answer:''
            })*/

             }}>
        <textarea
          id="title"
          label="Title"
          className={classes.textField}
          /*value={this.state.answer}
          onChange={this.answerHandleChange}*/
          margin="normal"
          ref={node => {
           titleVal  = node}}
        />
        <textarea
          className='textarea-form-answer'
          placeholder='Description'
          ref={node => {
            descriptionVal = node}}
          /*value={this.state.answer}
          onChange={this.answerHandleChange}*/
          >
          </textarea>
          <SelectIcon  inputRef={el => {
           checkedVal  = el}}
          />
        <Button variant="raised" color="primary" className={classes.button}
          type='submit'
          input='submit'
          >
          Create Question
        </Button>
      </form>
    );
  }
}

QuestionForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit:PropTypes.func.isRequired
};

export default withStyles(styles)(QuestionForm);
