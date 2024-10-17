import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import { Row, Col, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

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
      company_name: '',
      firstname: '',
      lastname: '',
      email: '',
      amount: 0,
      title: '',
      stripe_key: ''

    }

  }

  componentDidMount() {

    const submission_id = SUBMISSION_ID;

    axios.post('get-stripe-data.php', { submission_id })
    .then( response => {

        let title = '';

        const stripe_key = response.data.stripe_key;
        const submission_id = response.data.submission_id;
        const amount = response.data.amount;
        const _title = response.data.title;
        const company_name = response.data.company_name;
        const firstname = response.data.firstname;
        const lastname = response.data.lastname;
        const email = response.data.email;

        if (_title === 'EIN') {

          title = 'EIN/Tax ID number';

        }
        
        this.setState({ 
          stripe_key, 
          amount, 
          title, 
          company_name, 
          submission_id, 
          email, 
          firstname, 
          lastname
        });

    })


  }

  
  render() {

    const stripePromise = loadStripe(this.state.stripe_key);

    const options = {
      mode: 'payment',
      amount: this.state.amount,
      company_name: '',
      currency: 'usd',
      // Fully customizable with appearance API.
      appearance: {
        /*...*/
      }
    }

    return (

      <Row className="ein-container">
        <Col md={8}>
          <Card>
            <CardBody>
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm 
                  amount={ this.state.amount }
                  company_name={ this.state.company_name }
                  firstname={ this.state.firstname }
                  lastname={ this.state.lastname }
                  email={ this.state.email }
                  submission_id={ this.state.submission_id }
                />
              </Elements>
            </CardBody>
          </Card>

        </Col>
        <Col md={4}>


          <Card className="order-summary">
            <CardBody>

              <h2>Order Summary</h2>

              <Row className="order-item mb-30 pb-30">
                <Col>
                    { this.state.title }
                </Col>
                <Col className="text-right">
                  $ { this.state.amount.toFixed(2) }
                </Col>
              </Row>

              <Row>
                <Col>
                    <h3>Totals</h3>
                </Col>
                <Col className="text-right">
                  <h3>$ { this.state.amount.toFixed(2) }</h3>
                </Col>
              </Row>

            </CardBody>
          </Card>

        </Col>
      </Row>

      

    )

  }

}

const CheckoutForm = ( props ) => {
  const stripe = useStripe();
  const elements = useElements();

  const data = new FormData();

  data.append('amount', props.amount);
  data.append('submission_id', props.submission_id);

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
        return_url: DASHBOARD_URL + "/success?id=" + SUBMISSION_ID,
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

            <div className="mb-30">

              <PaymentElement />

            </div>

            <button className="btn btn-primary pay-btn" type="submit" disabled={!stripe || !elements}>
              Pay
            </button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
          </div>
      

    </form>
  );
};




