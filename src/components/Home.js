import React from 'react';
import ButtonAppBar from './ButtonAppBar.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  root2: {
    flexGrow: 1
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1540162416395-16f7dfbb68d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  wood: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1525973779373-015bdf68e579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div>
      {/* {console.log(props.user)} */}
      <ButtonAppBar token={props.token}/>
      <CssBaseline />
      <Grid container component="main" className={classes.root}>
        <Grid item xl={6} className={classes.image}/>
        <Grid item xl={6} className={classes.wood}/>
      </Grid>
    </div>
  );
}
