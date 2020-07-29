import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from './ButtonAppBar.js';
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, StripeProvider } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe("pk_test_51H9voND7h6J7ftZvWesW0Ak9dpg5Q6sKyjwG6KgHgkmToaqJQC7QcS25pr9PRGekpAwIgKIfliVBw71q4IsCApyw00KxLMKKCD");

export default function Order(orderProps) {

    const history = useHistory();

    return(
      <Elements stripe={stripePromise}>
        <CheckoutForm token={orderProps.token} userId={orderProps.user.id}/>
      </Elements>
    );
}

{/* <ButtonAppBar props={orderProps}></ButtonAppBar>
          <Elements stripe={promise}>
            <CheckoutForm />
          </Elements> */}