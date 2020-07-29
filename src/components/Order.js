import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from './ButtonAppBar.js';
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe("pk_test_51H9voND7h6J7ftZvWesW0Ak9dpg5Q6sKyjwG6KgHgkmToaqJQC7QcS25pr9PRGekpAwIgKIfliVBw71q4IsCApyw00KxLMKKCD");

const useStyles = makeStyles((theme) => ({
  root: {
    height: '50vh',
  },
  root2: {
    height: '38vh',
  },
  root3: {
    height: '93vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1524438383049-2f68a48d1286?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    height: 450,
    width: 320,
  },
  paper2: {
    height: 340,
    width: 500,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Order(orderProps) {

  const [noodleZero, setNoodleZero] = useState(0);
  const [noodleOne, setNoodleOne] = useState(0);
  const [noodleTwo, setNoodleTwo] = useState(0);
  const [noodleThree, setNoodleThree] = useState(0);
  const noodleBin = [noodleZero, noodleOne, noodleTwo, noodleThree];

  const handleChangeZero = (event) => {
    setNoodleZero(Number(event.target.value));
    console.log(event.target.value);
  };

  const history = useHistory();

  const classes = useStyles();

  return(
    <div>
    <ButtonAppBar token={orderProps.token}/>
    <Grid container className={classes.root3}>
    <Grid container className={classes.root} spacing={4}>
      <Grid container justify="center" spacing={4}>
        {/* Noodle0 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={0}>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <FormLabel component="legend">Quantity</FormLabel>
            <RadioGroup name="noodleZero" aria-label="noodleZero" value={noodleZero} onChange={handleChangeZero} row>
              {[-1, 0, 1, 2, 3].map((value) => (
                (value === -1) ?
                <p className="description">-------</p>
              :<FormControlLabel value={value.toString()} control={<Radio color={'default'}/>} label={value.toString()}/>
              ))}
            </RadioGroup>
          </Paper>
        </Grid>
        {/* Noodle1 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={24}>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <FormLabel component="legend">Quantity</FormLabel>
            <RadioGroup defaultValue={0} value={noodleOne} onChange={setNoodleOne} row>
              {[-1, 0, 1, 2, 3].map((value) => (
                (value === -1) ?
                <p className="description">-------</p>
                :<FormControlLabel value={value.toString()} control={<Radio />} label={value.toString()}/>
              ))}
            </RadioGroup>
          </Paper>
        </Grid>
        {/* Noodle2 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={24}>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <FormLabel component="legend">Quantity</FormLabel>
            <RadioGroup defaultValue={0} value={noodleTwo} onChange={setNoodleTwo} row>
              {[-1, 0, 1, 2, 3].map((value) => (
                (value === -1) ?
                <p className="description">-------</p>
                :<FormControlLabel value={value.toString()} control={<Radio />} label={value.toString()}/>
              ))}
            </RadioGroup>
          </Paper>
        </Grid>
        {/* Noodle3 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={24}>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <FormLabel component="legend">Quantity</FormLabel>
            <RadioGroup defaultValue={0} value={noodleThree} onChange={setNoodleThree} row>
              {[-1, 0, 1, 2, 3].map((value) => (
                (value === -1) ?
                <p className="description">-------</p>
                :<FormControlLabel value={value.toString()} control={<Radio />} label={value.toString()}/>
              ))}
            </RadioGroup>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
    <Grid container className={classes.root2} spacing={4} justify="center">
      <Grid item m="true">
        <Paper className={classes.paper2} elevation={24}>
        </Paper>    
      </Grid>
      <Grid item m="true">
        <Paper className={classes.paper2} elevation={24}>
          <Elements stripe={stripePromise}>
            <CheckoutForm token={orderProps.token} userId={orderProps.user.id}/>
          </Elements>
        </Paper>    
      </Grid>
    </Grid>
    </Grid>
    </div>
  );
}

