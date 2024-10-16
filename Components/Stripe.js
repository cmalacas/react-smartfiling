import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import { Row, Col, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/App.css';

import {loadStripe} from '@stripe/stripe-js';

import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default class Stripe extends Component {

  constructor( props ) {

    super( props );

    this.state = {

      submission_id: SUBMISSION_ID,
      amount: 0,
      title: '',
      stripe_key: ''

    }

  }

  componentDidMount() {

    const submission_id = SUBMISSION_ID;

    console.log('xxx');

    axios.post('get-stripe-data.php', { submission_id })
    .then( response => {

        const stripe_key = response.data.stripe_key;
        const submission_id = response.data.submission_id;
        const amount = response.data.amount;
        const title = response.data.title;
        
        this.setState({ stripe_key, amount, title });

    })


  }

  
  render() {

    const stripePromise = loadStripe(this.state.stripe_key);

    const options = {
      mode: 'payment',
      amount: this.state.amount,
      currency: 'usd',
      // Fully customizable with appearance API.
      appearance: {
        /*...*/
      }
    }

    return (

      <Card>
        <CardBody>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm 
            />
          </Elements>
        </CardBody>
      </Card>

    )

  }

}

const CheckoutForm = ( props ) => {
  const stripe = useStripe();
  const elements = useElements();

  const data = new FormData();

  data.append('amount', props.amount);
  data.append('submission_id', SUBMISSION_ID);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('checkout.php', {
      method: 'POST',
      body: data
    });

    const { intent } = await res.json();

    const clientSecret = intent.client_secret;

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: HOME_URL + "/success?id=" + SUBMISSION_ID,
        payment_method_data: {
          billing_details: {
            name: `${ props.firstnane } ${ props.lastname }`,
            email: props.email
          }
        }
      },

      
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <h2>${ props.amount.toFixed(2) }</h2>
          <p>{ props.title }<br />{ COMPANY_NAME }</p>
        </Col>
        <Col>
          <div>
            <FormGroup row>
              <Col>
                <Label>First Name</Label>
                <Input type="text" readOnly={ true } value={ props.firstname } />
              </Col>
              <Col>
                <Label>Last Name</Label>
                <Input type="text" readOnly={ true } value={ props.lastname } />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input type="text" readOnly={ true } value={ props.email } />
            </FormGroup>

            <PaymentElement />
            <button className="btn" type="submit" disabled={!stripe || !elements}>
              Pay
            </button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
          </div>
        </Col>
      </Row>
    </form>
  );
};




