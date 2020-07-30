import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { useHistory } from "react-router-dom";
// import CardSection from './CardSection';

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const user = props.user
  const history = useHistory();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    fetch("http://localhost:3001/payment", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(res => res.json())
    .then(secretObj => {
      // console.log(secretObj.clientSecret)
      stripe.confirmCardPayment( secretObj.clientSecret , {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${user.firstName} ${user.lastName}`,
          },
        }
      });
      setTimeout(() => {
        history.push('/profile')
      },3000)
    })

    // if (result.error) {
    //   console.log(result.error.message);
    // } else {
    //   if (result.paymentIntent.status === 'succeeded') {
    //   }
    // }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle}  />
      <button id="pay-button" >Pay</button>
    </form>
  );
}