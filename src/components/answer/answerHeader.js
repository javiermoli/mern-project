import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import './answer.css'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1,
    marginTop: 1
  }),
});

function AnswerHeader(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3" className='answerHeader'>
          Respuestas
        </Typography>
      </Paper>
    </div>
  );
}

AnswerHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnswerHeader);
