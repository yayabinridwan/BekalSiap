import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  console.log('penyakit', props.penyakit)
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <div className="appBar">
            <div className="col3">
              <div><ArrowBackIos /></div>
            </div>
            <div className="col4">
               <p>{props.penyakit}</p> 
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(SimpleAppBar);