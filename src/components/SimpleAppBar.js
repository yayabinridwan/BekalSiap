import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import {Link} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAFAFA'
    }, // Purple and green play nicely together.
  },
});


function SimpleAppBar(props) {
  const { classes } = props;
  console.log('penyakit', props.penyakit)
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className="appBar">
            <div className="col3">
                 <div><ArrowBackIos  onClick={() => props.history.goBack()}/></div>
            </div>
            <div className="col4">
               <h4>{props.penyakit.toUpperCase()} </h4>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}


export default withStyles(styles)(withRouter(SimpleAppBar));