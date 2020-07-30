import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './ButtonAppBar.js';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '93vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1543806053-d4617b244862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile(props) {
  
  const classes = useStyles();
  const address = props.user.addresses[0];
  const user = props.user;
  const orders = props.user.orders
  const lastOrder = orders[orders.length-1]

  return (
    <div>
    <ButtonAppBar token={props.token}/>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <RestaurantOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" gutterBottom={true}>
            Your Souper Noodly Self
          </Typography>
          <Typography component="h1" variant="h6" gutterBottom={true}>
            {"Full Name: " + user.firstName + " " + user.lastName}
          </Typography>
          <Typography component="h1" variant="h6" gutterBottom={true}>
            {"Email Address: " + user.email}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" gutterBottom={true}>
            Your Kingdom's Details
          </Typography>
          <Typography component="h1" variant="h6" gutterBottom={true}>
            {address.name}
          </Typography>
          <Typography component="h1" variant="h6" gutterBottom={true}>
            {address.address_one}
          </Typography>
          <Typography component="h1" variant="h6" gutterBottom={true}>
            {address.city + ", " + address.state + " " + address.zip}
          </Typography>
          <br/><br/>
          <Typography component="h1" variant="h5" gutterBottom={true}>
            Your Most Recent Order
          </Typography>
          <Typography component="h1" variant="h6" gutterBottom={true}>
            ${lastOrder.cost} of dope noodles ordered on {lastOrder.created_at.substring(0,10)}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
    </div>
  );
}