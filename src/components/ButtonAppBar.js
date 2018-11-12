import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

const styles = {
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    top: "0",
    zIndex: "100",
    justifyContent: "space-between",
    flexDirection: "wrap"
  },
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginLeft: -12,
    marginRight: "auto",
  }, 
  flexQ: {
    marginRight: "auto"
  }
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541400100/g1069.png" alt="logo" width="200px" height="80%" className={classes.flexQ}/>
            <Button color="inherit" >Cart</Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);