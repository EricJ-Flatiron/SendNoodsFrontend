import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from './ButtonAppBar.js';
import { loadStripe } from "@stripe/stripe-js";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"
import Button from '@material-ui/core/Button';

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Cart(noodles) {

  const naked = noodles.noodles[0]
  const miso = noodles.noodles[1]
  const bare = noodles.noodles[2]
  const cute = noodles.noodles[3]
  const total = (naked*12.00) + (miso*13.00) + (bare*11.50) + (cute*12.00)
  
  return (
    <div>
      <br/>
      <CssBaseline/>
      <Typography variant="h4">YOUR DOPE CART</Typography>
      <br/>
      {(noodles.noodles[0] < 1) ? null 
      : <Typography variant="h5">{noodles.noodles[0]} x NAKED TONKOTSU = {noodles.noodles[0]*(12.00)}</Typography>}
      <br/>
      {(miso < 1) ? null 
      : <Typography variant="h5">{miso} x MI-SO-HOT = {miso*(13.00)}</Typography>}
      <br/>
      {(bare < 1) ? null 
      : <Typography variant="h5">{bare} x BARE ESSENTIALS = {bare*(11.50)}</Typography>}
      <br/>
      {(cute < 1) ? null 
      : <Typography variant="h5">{cute} x CUTE VEGAN = {cute*(12.00)}</Typography>}
      <br/>
      {(total < 1) ? null
      : <Typography variant="h4">TOTAL = {total}</Typography>}
    </div>
  );
}

function PayTab(noodles) {

  const [orderCreated, setOrderCreated] = useState(false)

  const naked = noodles.noodles[0]
  const miso = noodles.noodles[1]
  const bare = noodles.noodles[2]
  const cute = noodles.noodles[3]
  const total = (naked*12.00) + (miso*13.00) + (bare*11.50) + (cute*12.00)
  
  const user = noodles.user
  const address = noodles.user.addresses[0]
  const stripePromise = noodles.stripe
  const token = noodles.token
  const classes = useStyles();

  const userId = user.id
  let orderId = 0

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        cost : total,
        user_id: userId
      })
    }).then(res => res.json())
    .then(order => {
      orderId = order.order.id
      let noodleArray = [];
      let noodleCounts = [naked,miso,bare,cute];
      let noodleTypes = ["naked","miso","bare","cute"]
      let noodleCosts = [12.00,13.00,11.50,12.00]
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < noodleCounts[i]; j++){
          let nood = {
            cost: noodleCosts[i],
            description: noodleTypes[i],
            group: "noodle",
            order_id: orderId
          }
          noodleArray.push(nood)
        }
      }
      for(let k = 0; k < noodleArray.length; k++){
        let noodle = noodleArray[k]
        fetch('http://localhost:3001/noodles', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            noodle
          })
        })
      }
      setOrderCreated(true)
    })
  }

  return (
    <div>
      <br/>
      <br/>{(!orderCreated) ? <Typography variant="h5">{user.firstName + " " + user.lastName}</Typography> : null}
      <br/>{(!orderCreated) ? <Typography variant="h5">{user.email}</Typography> : null}
      <br/>{(!orderCreated) ? <Typography variant="h5">{address.address_one}</Typography> : null}
      <br/>{(!orderCreated) ? <Typography variant="h5">{address.city + ", " + address.state + " " + address.zip}</Typography> : null}
      <br/>{(!orderCreated) ? <Button onClick={handleSubmit} type="submit" variant="contained"
        color="primary" className={classes.submit}> Confirm Order </Button>
      : <Elements stripe={stripePromise}><CheckoutForm token={token} user={user} total={total}/></Elements>}
    </div>
  );
}

export default function Order(orderProps) {

  const [noodleZero, setNoodleZero] = useState(0);
  const [noodleOne, setNoodleOne] = useState(0);
  const [noodleTwo, setNoodleTwo] = useState(0);
  const [noodleThree, setNoodleThree] = useState(0);

  const handleChangeZero = (event) => {
    setNoodleZero(Number(event.target.value));
    console.log(event.target.value);
  };
  const handleChangeOne = (event) => {
    setNoodleOne(Number(event.target.value));
    console.log(event.target.value);
  };
  const handleChangeTwo = (event) => {
    setNoodleTwo(Number(event.target.value));
    console.log(event.target.value);
  };
  const handleChangeThree = (event) => {
    setNoodleThree(Number(event.target.value));
    console.log(event.target.value);
  };

  const user = orderProps.user;
  const token = orderProps.token;
  const classes = useStyles();

  return(
    <div>
    <ButtonAppBar token={token}/>
    <Grid container className={classes.root3}>
    <CssBaseline />
    <Grid container className={classes.root} spacing={4}>
      <Grid container justify="center" spacing={4}>
        {/* Noodle0 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={0}>
            <img src="https://ramen-tatsuya.com/wp-content/uploads/2017/07/OG6.jpg" align="center"/>
            <h2>NAKED TONKOTSU</h2><Typography>pork bone broth, chashu, ajitama, woodear mushroom, scallion</Typography>
            <br></br><br></br>
            <FormLabel component="legend">$12.00</FormLabel>
            <RadioGroup name="noodleZero" aria-label="noodleZero" value={noodleZero} onChange={handleChangeZero} row>
              {[-1, 1, 2, 3, 4].map((value) => (
                (value === -1) ?
                <p className="description">-----------</p>
              :<FormControlLabel value={value.toString()} control={<Radio color={'default'}/>} label={value.toString()}/>
              ))}
            </RadioGroup>
          </Paper>
        </Grid>
        {/* Noodle1 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={24}>
          <img src="https://ramen-tatsuya.com/wp-content/uploads/2017/07/Miso-not.jpg" align="center"/>
            <h2>MI-SO-HOT</h2><Typography>pork bone broth, spicy miso blend, goma pork, ajitama, scallion, napa cabbage, bean sprout, corn</Typography>
            <br></br>
            <FormLabel component="legend">$13.00</FormLabel>
            <RadioGroup defaultValue={0} value={noodleOne} onChange={handleChangeOne} row>
              {[-1, 1, 2, 3, 4].map((value) => (
                (value === -1) ?
                <p className="description">-----------</p>
                :<FormControlLabel value={value.toString()} control={<Radio />} label={value.toString()}/>
              ))}
            </RadioGroup>
          </Paper>
        </Grid>
        {/* Noodle2 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={24}>
          <img src="https://ramen-tatsuya.com/wp-content/uploads/2017/07/OlSkool2.jpg" align="center"/>
            <h2>BARE ESSENTIALS</h2><Typography>chicken shoyu broth, chashu, ajitama, menma, scallion, white onion, nori, pepper</Typography>
            <br></br><br></br>
            <FormLabel component="legend">$11.50</FormLabel>
            <RadioGroup defaultValue={0} value={noodleTwo} onChange={handleChangeTwo} row>
              {[-1, 1, 2, 3, 4].map((value) => (
                (value === -1) ?
                <p className="description">-----------</p>
                :<FormControlLabel value={value.toString()} control={<Radio />} label={value.toString()}/>
              ))}
            </RadioGroup>
          </Paper>
        </Grid>
        {/* Noodle3 */}
        <Grid item>
          <br></br><br></br><br></br>
          <Paper className={classes.paper} elevation={24}>
          <br/><img src="https://ramen-tatsuya.com/wp-content/uploads/2020/02/RTY-veggie-bowl-updated.jpg" align="center"/><br/>
            <h2>CUTE VEGAN</h2><Typography>soy and mushroom broth, tofu, brussels sprouts, corn, menma, woodear mushroom, greens</Typography>
            <br/>
            <FormLabel component="legend">$12.00</FormLabel>
            <RadioGroup defaultValue={0} value={noodleThree} onChange={handleChangeThree} row>
              {[-1, 1, 2, 3, 4].map((value) => (
                (value === -1) ?
                <p className="description">-----------</p>
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
          <Cart noodles={[noodleZero, noodleOne, noodleTwo, noodleThree]}></Cart>
        </Paper>    
      </Grid>
      <Grid item m="true">
        <Paper className={classes.paper2} elevation={24}>
          <PayTab noodles={[noodleZero, noodleOne, noodleTwo, noodleThree]} user={user} stripe={stripePromise} token={token}/>
        </Paper>    
      </Grid>
    </Grid>
    </Grid>
    </div>
  );
}

