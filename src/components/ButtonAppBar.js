import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeButton from './buttons/HomeButton.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  bar: {
    height: 85
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Toolbar position="static" className={classes.bar}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Sign Up</Button>
          <HomeButton/>
        </Toolbar>
    </div>
  );
}
