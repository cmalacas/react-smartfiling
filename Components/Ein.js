import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import { Row, Col, Card, CardBody, FormGroup, Label, Input, CardHeader, Button, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/App.css';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

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
    this.changeCompanyState = this.changeCompanyState.bind(this);
    this.changeSSN = this.changeSSN.bind(this);
    this.changeITIN = this.changeITIN.bind(this);
    this.changeOwner = this.changeOwner.bind(this);

    this.changeCompanyAddress = this.changeCompanyAddress.bind(this);

    this.accordionToggle = this.accordionToggle.bind(this);

    this.change = this.change.bind(this);

    this.next = this.next.bind(this);

  }

  next() {

    const { firstname, lastname, email, mobile, state, 
            city, address, postCode, entityType, stateOfFormation,
            dateOfFormation, companyAddress, companyCity, 
            companyPostCode, companyState, ssn, itin, ssNumber, companyName
            } = this.state;

    let errorFirstname = false;
    let errorLastname = false;
    let errorEmail = false;
    let errorMobile = false;
    
    let errorSSNumber =false;

    let valid = true;

    if (firstname == '') {

      errorFirstname = true;
      valid = false;

    }

    if (lastname == '') {

      errorLastname = true;
      valid = false;

    }

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const validateEmail = email.match( validRegex );


    if (!validateEmail) {

      errorEmail = true;
      valid = false;

    } 

    if (mobile == '') {

      errorMobile = true;
      valid = false;

    }

    if (ssNumber == '') {

      errorSSNumber = true;
      valid = false;

    }

    if (valid) {

      const data = new FormData();

      data.append('firstname', firstname);
      data.append('lastname', lastname);
      data.append('email', email);
      data.append('mobile', mobile);
      data.append('state', state);
      data.append('city', city);
      data.append('address', address);
      data.append('postCode', postCode);
      data.append('entityType', entityType);
      data.append('stateOfFormation', stateOfFormation);
      data.append('dateOfFormation', dateOfFormation);
      data.append('companyAddress', companyAddress);
      data.append('companyCity', companyCity);
      data.append('companyPostCode', companyPostCode);
      data.append('companyState', companyState);
      data.append('ssn', ssn);
      data.append('itin', itin);
      data.append('ssNumber', ssNumber); 
      data.append('companyName', companyName);
    
      axios.post('submit.php', data )
      .then( res => {

        const submission_id = res.data.submission_id;

        this.setState({ step: 2, submission_id });

      });

    } else {

      this.setState({
        errorLastname,
        errorFirstname,
        errorEmail,
        errorMobile,
        errorSSNumber
      });


    }

    

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

  changeCompanyState( e ) {

    this.setState( { companyState: e.target.value });

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

        { this.state.step == 1 ?

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

                {/* <Col>
                  <Label>State of Formation</Label>

                  <SelectState 
                    onChange={ this.changeStateOfFormation }
                    value={ this.state.stateOfFormation }
                    disabled={ false }
                  />

                  
              </Col> */}

              </FormGroup>
            </CardBody>

          </Card>

          {
            this.state.entityType == 'Limited Liability Company (LLC)' ?

              <LLC
                entityType={ this.state.entityType } 
              />
            
            : ''


          }

          {/*
          
          <Card className="mb-30">
            <CardBody>
              <h2>SS4 Questions

                <p>Please answer these questions so that we may prepare the SS4 Form to obtain an 
                  EIN (Employer Identification Number, frequently called a Tax ID number).</p>
              </h2>

              <FormGroup>
                <Label className="form-checkbox">
                <Input 
                  type="checkbox" 
                  onChange={ this.changeOwner } 
                  checked={ this.state.sameContact } 
                /> Name of principal officer or owner
                </Label>
                
              </FormGroup>

              <FormGroup row>
                  <Col>
                    <Label>First Name</Label>
                    <Input 
                      type="text" 
                      name="ownerFirstname"
                      value={ this.state.ownerFirstname } 
                      disabled={ this.state.sameContact } 
                      onChange={ this.change }
                    />
                  </Col>
                  <Col>
                    <Label>Last Name</Label>
                    <Input 
                      type="text" 
                      name="ownerLastname"
                      onChange={ this.change }
                      value={ this.state.ownerLastname } 
                      disabled={ this.state.sameContact } 
                    />
                    
                  </Col>
              </FormGroup>

              <Row>
                <Col>
                  <h4>Why am I required to provide my Social Security Number?</h4>
                  <p>
                  In order to issue an EIN, the IRS requires a Principal (typically one of the members 
                  or directors of an entity) to provide their Social Security Number. This creates a 
                  formal affiliation with the company/entity. The Social Security Number is strictly 
                  used for obtaining the EIN. Once the EIN process is complete, your SSN is 
                  permanently deleted from the Bizee database. To further protect your security, all 
                  Social Security Numbers are stored on a secure, encrypted server during the EIN process.
                  </p>
                </Col>
              </Row>

              <FormGroup row>
                <Col>
                    <Label className="form-radio">
                      <Input 
                        type="radio" 
                        onChange={ this.changeSSN } 
                        checked={ this.state.ssn } 
                      />
                      SSN
                    </Label>
                </Col>
                <Col>
                    <Label className="form-radio">
                      <Input 
                        type="radio" 
                        disabled={ true } 
                      />
                      ITIN
                    </Label> 
                </Col>
              </FormGroup>
              <FormGroup>
                <Input 
                  type="text" 
                  name="ssNumber"
                  value={ this.state.ssNumber }
                  onChange={ this.change }
                  className={ this.state.errorSSNumber ? 'invalid' : '' }
                />
                { this.state.errorSSNumber ?  <div className="invalid-feedback">SSN is required</div> : '' }

              </FormGroup>
            </CardBody>
          </Card>
        
          <Card className="mb-30">
            <CardBody>
              <h2>Physical Street Address
                <p>The IRS requires a physical address in order to issue an Employer Identification Number 
                  (EIN / Tax ID Number) to your company. Please note the IRS will not allow for the use of 
                  a PO Box; however, this address will not be public under any circumstance.</p>
              </h2>

              <FormGroup>
                <Label className="form-checkbox">
                  <Input 
                    type="checkbox" 
                    checked={ this.state.useCompanyAddress } 
                    onChange={ this.changeCompanyAddress } 
                  /> Use Company Address
                </Label>
              </FormGroup>

              <FormGroup>
                <Label>Street Address</Label>
                <Input 
                  type="text" 
                  name="address"
                  value={ this.state.address }
                  disabled={ this.state.useCompanyAddress } 
                  onChange={ this.change }
                />
              </FormGroup>

              <FormGroup row>

                <Col>
                  <Label>City</Label>
                  <Input 
                    type="text"  
                    disabled={ this.state.useCompanyAddress } 
                    value={ this.state.city }
                    onChange={ this.change }
                    name="city"
                  />
                </Col>

                <Col>
                  <Label>State</Label>
                  <SelectState 
                    value={ this.state.state }
                    onChange={ this.changeState }
                    disabled={ this.state.useCompanyAddress }
                  />
                </Col>

                <Col>
                  <Label>Zip Code</Label>
                  <Input 
                    type="text"  
                    disabled={ this.state.useCompanyAddress } 
                    name="postCode"
                    value={ this.state.postCode }
                    onChange={ this.change }
                  />
                </Col>

              </FormGroup>
            </CardBody>
                  </Card> */}
                  
          

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
              </Accordion>
            
            </CardBody>
          </Card>
        
        
        
        
        </Col>

        : this.state.step == 2 ?

          <Col md={8}>
          
            <Stripe 
              stripe_key={ this.state.stripe_key }
              amount={ AMOUNT }
              title={ TITLE }
              firstname={ this.state.firstname }
              lastname={ this.state.lastname }
              submission_id={ this.state.submission_id } 
              company_name={ this.state.companyName }
              email={ this.state.email }
              
            />
          
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

export class SelectState extends Component {

  constructor( props ) {

    super( props );

  }

  render() {

    return (

      <Input type="select" value={ this.props.value } onChange={ this.props.onChange } disabled={ this.props.disabled }>
                    <option value="">Select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="Washington DC">Washington DC</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                  </Input>

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