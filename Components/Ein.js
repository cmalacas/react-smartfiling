import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import { Row, Col, Card, CardBody, FormGroup, Label, Input, CardHeader, Button, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/App.css';

import 'react-phone-number-input/style.css'


import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import {loadStripe} from '@stripe/stripe-js';

import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import LLC from './LLC';

import SoleProprietor from './SoleProprietor';

import Estate from './Estate';

export default class Ein extends Component {

  constructor( props ) {

    super( props );

    this.state = {

        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        
        state: '',
        city: '',
        address: '',
        postCode: '',

        entityType: 'Limited Liability Company (LLC)',
        stateOfFormation: '',
        dateOfFormation: '',

        companyName: '',
        designator: '',

        companyAddress: '',
        companyCity: '',
        companyPostCode: '',
        companyState: '',

        sameContact: false,

        ssn: 1,
        itin: 0,

        ssNumber: '',

        accordionId: '',

        useCompanyAddress: false,

        step: 1,

        stripe_key: '',

        submission_id: 0
      
    }

    this.changeMobile = this.changeMobile.bind(this);
    this.changeEntity = this.changeEntity.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeStateOfFormation = this.changeStateOfFormation.bind(this);
    
    this.changeSSN = this.changeSSN.bind(this);
    this.changeITIN = this.changeITIN.bind(this);
    this.changeOwner = this.changeOwner.bind(this);

    this.changeCompanyAddress = this.changeCompanyAddress.bind(this);

    this.accordionToggle = this.accordionToggle.bind(this);

    

  }

  

  change( e ) {

    const errorFirstname = false;
    const errorLastname = false;
    const errorEmail = false;
    const errorMobile = false;
    const errorSSNumber = false;

    this.setState({ [e.target.name] : e.target.value,
          errorFirstname, errorLastname, errorEmail, errorMobile, errorSSNumber });

  }

  changeCompanyAddress() {
    
    const useCompanyAddress = this.state.useCompanyAddress ? false : true;

    let address = this.state.address;
    let city = this.state.city;
    let state = this.state.state;
    let postCode = this.state.postCode;

    if (useCompanyAddress) {

      address = this.state.companyAddress;
      city = this.state.companyCity;
      state = this.state.companyState;
      postCode = this.state.companyPostCode;      

    }

    this.setState({ 
      useCompanyAddress,
      address,
      city,
      state,
      postCode
    });

  }

  accordionToggle( id ) {

    this.setState({ accordionId: id });

  }

  changeOwner() {

    const sameContact = this.state.sameContact ? false: true;

    let ownerFirstname = this.state.ownerFirstname;
    let ownerLastname = this.state.ownerLastname;

    if (sameContact) {

      ownerFirstname = this.state.firstname;
      ownerLastname = this.state.lastname;

    }
 
    this.setState({ 
      sameContact,
      ownerFirstname,
      ownerLastname
    });

  }

  changeITIN() {

    if (this.state.ssn == 1) {

      Swal.fire({
        icon: 'info',
        title: 'Confirm',
        showCancelButton: true,
        confirmButtonText: 'I Agree',
        html: 'The obtainment for an EIN using an ITIN number cannot be procured through the IRS automated system and will take up 12 weeks to obtain'
      })
      .then( response  => {

        if (response.isConfirmed) {

          this.setState({ ssn: 0, itin: 1 });

        }

      })
    }
  }

  changeSSN() {

    this.setState( { ssn: 1, itin: 0 } );

  }

  changeState( e ) {

    this.setState( { state: e.target.value });

  }

  changeStateOfFormation( e ) {

    this.setState( { stateOfFormation: e.target.value });

  }

  

  changeEntity( e ) {

    this.setState({ entityType: e.target.value });

  }

  changeMobile( mobile  ) {
    this.setState({ mobile });
  }

  componentDidMount() {

    const submission_id = 0;

    axios.post('get-stripe-data.php', { submission_id })
    .then( response => {

        const stripe_key = response.data.stripe_key;
        // const submission_id = response.data.submission_id;
        // const amount = response.data.amount;
        // const title = response.data.title;
        
        this.setState({ stripe_key });

    })    


  }

  
  render() {

    const entities = ['Sole Proprietor / Individual',
                      'Estate',
                      'Corporation',
                      'Church Organization',
                      'S-Corporation',
                      'Limited Liability Company (LLC)',
                      'Trust',
                      'Partnership',
                      'Non-Profit Organization'].map( e => { return <option value={e}>{e}</option> });

    return (

    <div>

      <Row className="ein-container">

        { this.state.step === 1 ?

        <Col md={8} className="pr-30">

          <div className="mb-30">
              <h1>
                Federal Employer Identification Number<br />
                EIN / Tax ID Number
              </h1>

              <p>The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, 
                frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social 
                Security Number for your business. It is usually required to open a bank account in the 
                name of the business and to properly pay and account for any wage/payroll employees of 
                your company.</p>
            
          </div>

          
          <Card className="mb-30">

            <CardBody>
              <h2>Entity Type</h2>

              <FormGroup row>

                <Col>
                  <Input 
                    type="select" 
                    value={ this.state.entityType } 
                    onChange={ this.changeEntity }
                  >
                    <option value="entity-type">Entity Type</option>
                    { entities }
                  </Input>
                </Col>
             

              </FormGroup>
            </CardBody>

          </Card>

          {
            this.state.entityType === 'Limited Liability Company (LLC)' ?

              <LLC 
                entityType = { this.state.entityType }
              />

            : this.state.entityType === 'Sole Proprietor / Individual' ?

              <SoleProprietor 
              />

            : ''


          }

          
                  
          

          <Card className="mb-30">
            <CardBody>
              <h2>Additional Explanation</h2>

              <Accordion open={ this.state.accordionId } toggle={ this.accordionToggle }>
                <AccordionItem>
                  <AccordionHeader targetId='1'>
                    What will my email be used for?
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    Email is the primary method of contact, which will be used to send your order confirmation, 
                    provide order status updates, and possibly to request any additional information required 
                    to complete your order.
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId='2'>
                    What will my phone number be used for?
                  </AccordionHeader>
                  <AccordionBody accordionId='2'>
                  Please provide a valid phone number as we may need to contact you to request additional 
                  information required to complete your order as well for keeping you informed of any order 
                  status updates.
                  </AccordionBody>
                </AccordionItem>
                
                <AccordionItem>
                  <AccordionHeader targetId='3'>
                    Who should I list as the contact person?
                  </AccordionHeader>
                  <AccordionBody accordionId='3'>
                    The person granted authority to make decisions on behalf of the ownership of the company.
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId='4'>
                    Why am I required to provide my Social Security Number?
                  </AccordionHeader>
                  <AccordionBody accordionId='4'>
                    To obtain an Employer Identification Number (EIN), the IRS requires that a Principal—typically a member or director of the entity—provides their Social Security Number (SSN). This step establishes a formal affiliation with the company or entity. The SSN will only be used for the purpose of obtaining the EIN Additionally, to enhance security, all Social Security Numbers are stored on a secure, encrypted server throughout the EIN application process.
                  </AccordionBody>
                </AccordionItem>
              
              </Accordion>

              

              
            
            </CardBody>
          </Card>
        
        
        
        
        </Col>

        : this.state.step === 2 ?

          <Col md={8}>
          
            {/* <Stripe 
              stripe_key={ this.state.stripe_key }
              amount={ AMOUNT }
              title={ TITLE }
              firstname={ this.state.firstname }
              lastname={ this.state.lastname }
              submission_id={ this.state.submission_id } 
              company_name={ this.state.companyName }
              email={ this.state.email }
              
            /> */}
          
          </Col>


        : ''

        }


        <Col md={4}>
          <Card className="order-summary">
            <CardBody>

              <h2>Order Summary</h2>

              <Row className="order-item mb-30 pb-30">
                <Col>
                    { TITLE }
                </Col>
                <Col className="text-right">
                  $ { AMOUNT.toFixed(2) }
                </Col>
              </Row>

              <Row>
                <Col>
                    <h3>Totals</h3>
                </Col>
                <Col className="text-right">
                  <h3>$ { AMOUNT.toFixed(2) }</h3>
                </Col>
              </Row>

            </CardBody>
          </Card>
        </Col>
      </Row>
      
    </div>

    )
    

  }


}



class Stripe extends Component {

  constructor( props ) {

    super( props )

  }

  render() {

      const stripePromise = loadStripe(this.props.stripe_key);
  
      const options = {
        mode: 'payment',
        amount: this.props.amount,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
          /*...*/
        }
      }
    
      return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm 
            amount={ this.props.amount }
            submission_id={ this.props.submission_id }
            firstname={ this.props.firstname }
            lastname={ this.props.lastname }
            email={ this.props.email }
            title={ TITLE }
            company_name={ this.props.company_name }
          />
        </Elements>
  
      )
    
      

  }

}

const CheckoutForm = ( props ) => {
  const stripe = useStripe();
  const elements = useElements();

  const data = new FormData();

  data.append('amount', props.amount );
  data.append('submission_id', props.submission_id );

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
        return_url: DASHBOARD_URL + "/success?id=" + props.submission_id ,
        payment_method_data: {
          billing_details: {
            name: `${ props.firstname  } ${ props.lastname }`,
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

            <Row className="mb-15">

              <Col>

                <PaymentElement />

              </Col>

            </Row>

            <Row>
              <Col>
                <button className="btn btn-primary" type="submit" disabled={!stripe || !elements}>
                  Pay
                </button>
              </Col>
            </Row>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
          </div>
        </Col>
      </Row>
    </form>
  );
};