import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Moment from 'react-moment';
import Typography from 'material-ui/Typography';
import SelectIcon from './select-icon'
import icons from '../../assets/dev-icons/icons.json'


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


function Question(props) {
  const { classes } = props;
  const dateToFormat = new Date();

  return (
    <div className={classes.root}>
      <List>
          <ListItem>
            <Avatar>
              <i className={props.iconClass}></i>
            </Avatar>
            <ListItemText primary={props.titleQuestion} secondary={props.textQuestion} id={props.id}/>
            <Moment fromNow>{dateToFormat}</Moment>
          </ListItem>
      </List>
    </div>
  );
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
