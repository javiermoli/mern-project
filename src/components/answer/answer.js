import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Moment from 'react-moment';
import './answer.css'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const dateToFormat = new Date();

  return (
    <ul className='nonPadding'>
      <li className='nonPoint'>
        <Card className={classes.card}>
          <CardContent>
            <div className='nameDate'>
               <Typography component="p" className= 'textAnswer'>
                {props.name}
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                <Moment fromNow>{dateToFormat}</Moment>
              </Typography>
            </div>
            <Typography component="p">
              {props.textAnswer}
            </Typography>
          </CardContent>
        </Card>
      </li>
    </ul>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
