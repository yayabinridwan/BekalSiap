import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log('currentIndex', currentIndex)
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log('new', newChecked)
    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;
    const {pic, name, description, totalCal, harga, id} = this.props.order

    return (
      <div>
        <div className={classes.root}>
          <List>
            {[2].map(value => (
              <ListItem key={value} dense button>
                <Avatar alt="Menu" src={pic} />
                <ListItemText primary={`${name} Rp. ${harga.toLocaleString()}`} />
                <ListItemSecondaryAction>
                  <div className="delete">X</div>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);