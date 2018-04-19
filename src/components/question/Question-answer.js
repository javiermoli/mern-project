import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Img  from './sofia.JPG'
import Moment from 'react-moment';
import Grid from 'material-ui/Grid';
import './imgTitle.css'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
};

const styleTitle = {
  marginLeft: '10px'
}

function Question(props) {

  const { classes } = props;


  return (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2" >
            <div className='imgTitle'>
              <div >
                <Avatar alt="Remy Sharp" src={Img} className={classes.avatar} />
              </div>
              <div style={styleTitle}>
                {props.title}
              </div>
            </div>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
              <Moment fromNow>{props.dateToFormat}</Moment>
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </Card>

  );
}

Question.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Question);
