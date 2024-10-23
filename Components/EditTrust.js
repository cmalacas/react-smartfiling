import React, {Component, Fragment} from 'react';

import { Card, CardBody, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';

import SelectState  from './SelectState';

import axios from 'axios';

export default class EditTrust extends Component {

  constructor( props ) {

    super( props );

    this.state = {

      trustName: '',
      trustType: 'Trust (All Others)',

      trusteeFirstname: '',
      trusteeLastname: '',   
      trusteeMiddlename: '',   

      companyName: '',
      tradeName: '',
      member: 1,
      taxationIndividual: 1,
      taxationCorporation: 0,
      taxationScorporation: 0,

      deceasedFirstname: '',
      deceasedMiddlename: '',
      deceasedLastname: '',
      deceasedSSNumber: '',

      firstname: '',
      lastname: '',
      middlename: '',
      ssNumber: '',
      title: '',

      companyAddress: '',
      companyCity: '',
      companyState: '',
      companyPostCode: '',

      mailingAddress: '',
      mailingCity: '',
      mailingState: '',
      mailingPostCode: '',

      stateOfFormation: '',
      reason: 'Banking Purposes',
      activity: 'Please Select an Option',
      specificActivity: '',
      otherActivity: '',
      dateStarted: '',
      closingMonth: 'December',

      hasMotor: 0,
      gambling: 0,
      alcohol: 0,
      payExcise: 0,
      acceptCard: 0,
      hireEmployee: 0,            
      
      contactPhone: '',
      differentAddress: 0,
      email: '',            
      confirmEmail: '',
      

      agreement: 1,

      errorFirstname: false,
      errorLastname: false,
      errorSSNumber: false,
      errorTitle: false,
      errorCompanyName: false,

      errorState: false,
      errorCity: false,
      errorAddress: false,
      errorPostCode: false,

      errorMailingState: false,
      errorMailingAddress: false,
      errorMailingCity: false,
      errorMailingPostCode: false,

      errorMail: false,
      errorConfirmEmail: false,
      errorAgreement: false,
      errorPhone: false,
      errorActivity: false,
      errorOtherActivity: false,
      errorSpecifActivity: false,      

      errorDateStarted: false,
      errorTrustName: false,
      errorTrusteeFirstname: false,
      errorTrusteeLastname: false,

      step: 1,

      submission_id: 0
      
    }

    this.change = this.change.bind(this);
    this.changeAddress = this.changeAddress.bind(this);    

    this.next = this.next.bind(this);

    this.changeCompanyState = this.changeCompanyState.bind(this);        
    this.changeMailingState = this.changeMailingState.bind(this);  

  }

  componentDidUpdate() {

    const submission = this.props.submission;

    if (this.state.submission_id != submission.id) {

      this.setState({
          companyName: submission.company_name,
          tradeName: submission.trade_name,
          member: submission.member,
          taxationIndividual: submission.taxation_individual,
          taxationCorporation: submission.taxation_corporation,
          taxationScorporation: submission.taxation_scorporation,

          firstname: submission.firstname,
          lastname: submission.lastname,
          middlename: submission.middlename,
          ssNumber: submission.ss_number,
          title: submission.title,

          trusteeFirstname: submission.trustee_firstname,
          trusteeLastname: submission.trustee_lastname,
          trusteeMiddlename: submission.trustee_middlename,
          
          trustName: submission.trust_name,

          companyAddress: submission.company_address,
          companyCity: submission.company_city,
          companyState: submission.company_state,
          companyPostCode: submission.company_post_code,

          mailingAddress: submission.mailing_address,
          mailingCity: submission.mailing_city,
          mailingState: submission.mailing_state,
          mailingPostCode: submission.mailing_post_code,

          stateOfFormation: submission.state_of_formation,
          reason: submission.reason,
          activity: submission.activity,
          specificActivity: submission.specific_activity,
          otherActivity: submission.other_activity,
          dateStarted: submission.date_of_formation,
          closingMonth: submission.closing_month,

          hasMotor: submission.has_motor,
          gambling: submission.gambling,
          alcohol: submission.alcohol,
          payExcise: submission.pay_excise,
          acceptCard: submission.accept_card,
          hireEmployee: submission.hire_employee,
          
          contactPhone: submission.mobile,
          differentAddress: submission.different_address,
          email: submission.email,   

          agreement: 1,

          errorFirstname: false,
          errorLastname: false,
          errorSSNumber: false,
          errorTitle: false,
          errorCompanyName: false,

          errorState: false,
          errorCity: false,
          errorAddress: false,
          errorPostCode: false,

          errorMailingState: false,
          errorMailingAddress: false,
          errorMailingCity: false,
          errorMailingPostCode: false,

          errorMail: false,
          errorConfirmEmail: false,
          errorAgreement: false,
          errorPhone: false,
          errorActivity: false,
          errorOtherActivity: false,
          errorSpecifActivity: false,

          errorDateStarted: false,

          step: 1,

          submission_id: submission.id
      })

    }

  }
  changeMailingState(e) {

      this.setState( { mailingState: e.target.value });

  }

  changeCompanyState( e ) {

      this.setState( { companyState: e.target.value });

  }

  changeAddress( differentAddress ) {

    this.setState({ differentAddress });

  }
  next() {

        
    const { firstname, lastname, title, email, mobile, middlename,
      stateOfFormation, dateStarted, differentAddress, 
      reason, otherActivity, specificActivity, 
      activity, contactPhone, submission_id, 
      agreement, companyAddress, companyCity, 
      companyPostCode, companyState, mailingAddress, 
      mailingCity, mailingPostCode, mailingState, 
      ssNumber, companyName, tradeName, member, 
      taxationIndividual, taxationCorporation,
      taxationScorporation, hasMotor, gambling, alcohol,
      payExcise, acceptCard, hireEmployee, closingMonth, 
      deceasedFirstname, deceasedLastname, deceasedSSNumber, trustName, trustType,
      trusteeFirstname, trusteeLastname, trusteeMiddlename, 
      } = this.state;

    let errorFirstname = false;
    let errorLastname = false;
    let errorEmail = false;
    let errorMobile = false;
    let errorSSNumber = false;     
    let errorTitle = false;   

    let errorState = false;
    let errorCity = false;
    let errorAddress = false;
    let errorPostCode = false;

    let errorMailingState = false;
    let errorMailingAddress = false;
    let errorMailingCity = false;
    let errorMailingPostCode = false;

    let errorCompanyName = false;

    let errorStateOfFormation = false;
    let errorDateStarted = false;
    let errorReason = false;
    let errorActivity = false;
    let errorSpecificActivity = false;
    let errorOtherActivity = false;

    let errorConfirmEmail = false;
    let errorAgreement = false;
    let errorPhone =  false;

    let errorDeceasedFirstname = false;
    let errorDeceasedLastname = false;
    let errorDeceasedSSNumber = false;
    let errorTrustName = false;
    let errorTrusteeFirstname = false;
    let errorTrusteeLastname = false;    
    

    let valid = true;

    // console.log('state', this.state);

    if (trusteeFirstname === '') {
      valid = false;
      errorTrusteeFirstname = true;
    }

    if (trusteeLastname === '') {
      valid = false;
      errorTrusteeLastname = true;
    }

    if (trustName === '') { 
      valid = false;
      errorTrustName = true;
    }
    
    if (contactPhone === '') {

      errorPhone = true;
      valid = false;

    }

    if (agreement === 0) {

      errorAgreement = true;
      valid = true;

    }

    if (activity === 'Please Select an Option') {

      // errorActivity = true;
      // valid = false;

    }

    

    if ( stateOfFormation === '') {

      // errorStateOfFormation = true;
      // valid = false;

    }

    if (dateStarted === '') {

      errorDateStarted = true;
      valid = false;

    }
    

    if (differentAddress === 1) {

      if (mailingState === '') {

          errorMailingState = true;
          valid = false;

      }    

      if (mailingAddress === '') {

          errorMailingAddress = true;
          valid = false;

      }

      if (mailingCity === '') {

          errorMailingCity = true;
          valid = false;

      }

      if (mailingPostCode === '') {

          errorMailingPostCode = true;
          valid = false;

      }

    }

    if (companyState === '') {

      errorState = true;
      valid = false;

    }

    if (companyAddress === '') {

      errorAddress = true;
      valid = false;

    }

    if (companyCity === '') {

      errorCity = true;
      valid = false;

    }

    if (companyPostCode === '') {

      errorPostCode = true;
      valid = false;

    }

    if (companyName === '') {

      // errorCompanyName = true;
      // valid = false;

    }

    if (firstname === '') {

      errorFirstname = true;
      valid = false;

    }

    if (lastname === '') {

      errorLastname = true;
      valid = false;

    }

    if (ssNumber === '') {

      errorSSNumber = true;
      valid = false;

    }

    if (title === '') {

      // errorTitle = true;
      // valid = false;

    }

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const validateEmail = email.match( validRegex );


    if (email === '' || !validateEmail) {

      errorEmail = true;
      valid = false;

    } 
    

    if (mobile === '') {

      errorMobile = true;
      valid = false;

    }

    if (ssNumber === '') {

    // errorSSNumber = true;
    // valid = false;

    }

    console.log('valid', valid);

    if (valid) {

        const data = new FormData();

        data.append('firstname', firstname);
        data.append('lastname', lastname);
        data.append('email', email);
        data.append('middlename', middlename);

        data.append('deceasedFirstname', deceasedFirstname);
        data.append('deceasedLastname', deceasedLastname);
        data.append('deceasedSSNumber', deceasedSSNumber);       
        
        data.append('trustName', trustName);
        data.append('trustType', trustType);
        data.append('trusteeFirstname', trusteeFirstname);
        data.append('trusteeLastname', trusteeLastname);
        data.append('trusteeMiddlename', trusteeMiddlename);

        data.append('state', companyState);
        data.append('city', companyCity);
        data.append('address', companyAddress);
        data.append('postCode', companyPostCode);  
        data.append('mobile', contactPhone)

        data.append('mailingState', mailingState);
        data.append('mailingCity', mailingCity);
        data.append('mailingAddress', mailingAddress);
        data.append('mailingPostCode', mailingPostCode);          

        data.append('stateOfFormation', stateOfFormation);
        data.append('dateStarted', dateStarted);

        data.append('ssNumber', ssNumber); 
        data.append('companyName', companyName);
        data.append('tradeName', tradeName)

        data.append('reason', reason);
        data.append('otherActivity', otherActivity);
        data.append('specificActivity', specificActivity);
        data.append('activity', activity);
        data.append('product_name', ENTITY_TYPE);
        data.append('entityType', this.props.entityType);

        data.append('member', member);
        data.append('taxationIndividual', taxationIndividual);
        data.append('taxationCorporation', taxationCorporation);
        data.append('taxationScorporation', taxationScorporation);
        data.append('hasMotor', hasMotor);
        data.append('gambling', gambling);
        data.append('alcohol', alcohol);
        data.append('payExcise', payExcise);
        data.append('acceptCard', acceptCard);
        data.append('hireEmployee', hireEmployee);
        data.append('closingMonth', closingMonth);
        data.append('submission_id', submission_id);

        data.append('title', title);

        axios.post('update.php', data )
        .then( res => {

          const submission_id = res.data.submission_id;

          this.setState({ step: 2, submission_id }, () => {

              window.location = DASHBOARD_URL + '/edit-pay-now?submission_id=' + submission_id;

          });

        }); 

    } else {

      this.setState({
        errorLastname,
        errorFirstname,
        errorEmail,
        errorMobile,
        errorSSNumber,
        errorTitle,
        errorCompanyName,
        errorState,
        errorAddress,
        errorCity,
        errorPostCode,
        errorMailingState,
        errorMailingAddress,
        errorMailingCity,
        errorMailingPostCode,
        errorStateOfFormation,
        errorDateStarted ,
        errorReason,
        errorActivity,
        errorSpecificActivity,
        errorOtherActivity,
        errorConfirmEmail,
        errorAgreement,
        errorPhone,
        errorDeceasedFirstname,
        errorDeceasedLastname,
        errorDeceasedSSNumber,
        errorTrustName,
        errorTrusteeFirstname,
        errorTrusteeLastname
      });
  }

}


change( e ) {

    const errorLastname = false;
    const errorFirstname= false;
    const errorEmail = false;
    const errorMobile = false;
    const errorSSNumber = false;
    const errorTitle = false;
    const errorCompanyName = false;
    const errorState = false;
    const errorAddress = false;
    const errorCity = false;
    const errorPostCode = false;
    const errorMailingState = false;
    const errorMailingAddress = false;
    const errorMailingCity = false;
    const errorMailingPostCode = false;
    const errorStateOfFormation = false;
    const errorDateStarted = false;
    const errorReason = false;
    const errorActivity = false;
    const errorSpecificActivity = false;
    const errorOtherActivity = false;
    const errorConfirmEmail = false;
    const errorAgreement = false;
    const errorPhone = false;
    const errorDeceasedFirstname = false;
    const errorDeceasedLastname = false;
    const errorDeceasedSSNumber = false;
    const errorTrustName = false;
    const errorTrusteeFirstname = false;
    const errorTrusteeLastname = false;

    this.setState({ 
        [e.target.name]: e.target.value,
        errorLastname,
        errorFirstname,
        errorEmail,
        errorMobile,
        errorSSNumber,
        errorTitle,
        errorCompanyName,
        errorState,
        errorAddress,
        errorCity,
        errorPostCode,
        errorMailingState,
        errorMailingAddress,
        errorMailingCity,
        errorMailingPostCode,
        errorStateOfFormation,
        errorDateStarted ,
        errorReason,
        errorActivity,
        errorSpecificActivity,
        errorOtherActivity,
        errorConfirmEmail,
        errorAgreement,
        errorPhone,
        errorDeceasedFirstname,
        errorDeceasedLastname,
        errorDeceasedSSNumber,
        errorTrustName,
        errorTrusteeFirstname,
        errorTrusteeLastname
    });

}

  render() {

    console.log('state', this.state)

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const types = ["Bankruptcy Estate (Individual)", "Charitable Lead Annuity Trust","Charitable Lead Unitrust", "Charitable Remainder Annunity Trust", "Charitable Remainder Unitrust", "Conservatorship", "Custodianship", "Escrow", "FNMA (Fannie Mae)", "GNMA (Ginnie Mae)", "Guardianship", "Irrevocable Trust", "Pooled Income Fund", "Qualified Funeral Trust", "Receivership", "Revocable Trust", "Settlement Fund (under IRS Sec 468B)", "Trust (All Others)"];

    return (
      <Fragment>
         <Card className="mb-30">
            <CardBody>

                <Row>
                    <Col>
                        <h2>Trust Tax ID (EIN) Application</h2>
                    </Col>
                </Row>
            

            <FormGroup row>

                <Col>

                    <div className="position-relative mb-15">

                        <Label>Name of Trust</Label>
                        <Input 
                            type="text" 
                            name="trustName" 
                            value={ this.state.trustName } 
                            onChange={ this.change }
                            tabIndex={1}
                            className={ this.state.errorTrustName ? 'invalid' : '' }
                        />

                        { this.state.errorTrustName ? <div className="invalid-feedback">Name of Trust is required</div> : '' }   

                    </div>

                </Col>

                <Col>

                    <div className="mb-15">
                        
                        <Label>Type of Trust</Label>
                        <Input 
                            type="select" 
                            name="trustType" 
                            value={ this.state.trustType } 
                            onChange={ this.change }
                            tabIndex={2}                            
                        >
                          {
                            types.map((type, index) => ( <option key={index} value={type}>{type}</option> ))
                          }
                        </Input>

                        

                    </div>

                </Col>                

              </FormGroup>
                
            </CardBody>
        </Card>
        <Card className="mb-30">
            <CardBody>

                <Row>
                    <Col>
                        <h2>Grantor / Creator Information</h2>
                    </Col>
                </Row>
            

            <FormGroup row>

                <Col>

                    <div className="position-relative mb-15">

                        <Label>First Name</Label>
                        <Input 
                            type="text" 
                            name="firstname" 
                            value={ this.state.firstname } 
                            onChange={ this.change }
                            tabIndex={3}
                            className={ this.state.errorFirstname ? 'invalid' : '' }
                        />

                        { this.state.errorFirstname ? <div className="invalid-feedback">First Name is required</div> : '' }   

                    </div>

                </Col>

                <Col>

                    <div className="mb-15">
                        
                        <Label>Middle Name</Label>
                        <Input 
                            type="text" 
                            name="middlename" 
                            value={ this.state.middlename } 
                            onChange={ this.change }
                            tabIndex={4}
                            
                        />

                        

                    </div>

                </Col>

                <Col>

                    <div className="mb-15">
                        
                        <Label>Last Name</Label>
                        <Input 
                            type="text" 
                            name="lastname" 
                            value={ this.state.lastname } 
                            onChange={ this.change }
                            tabIndex={5}
                            className={ this.state.errorLastname ? 'invalid' : '' }
                        />

                        { this.state.errorLastname ?  <div className="invalid-feedback">Last Name is required</div> : '' }

                    </div>

                </Col>

            </FormGroup>

            <FormGroup row>
                <Col>
                    <Label>Social Security Number</Label>
                    <Input 
                        type="text" 
                        name="ssNumber" 
                        value={ this.state.ssNumber } 
                        onChange={ this.change } 
                        className={ this.state.errorSSNumber ? 'invalid' : '' }
                        tabIndex={6}
                    />

                    { this.state.errorSSNumber ? <div className="invalid-feedback">Social Security Number is required</div> : '' }   
                </Col>
                
            </FormGroup>

                
                
            </CardBody>
        </Card>
        <Card className="mb-30">
            <CardBody>

                <Row>
                    <Col>
                        <h2>Trustee Information</h2>
                    </Col>
                </Row>
            

            <FormGroup row>

                <Col>

                    <div className="position-relative mb-15">

                        <Label>First Name</Label>
                        <Input 
                            type="text" 
                            name="trusteeFirstname" 
                            value={ this.state.trusteeFirstname } 
                            onChange={ this.change }
                            tabIndex={7}
                            className={ this.state.errorTrusteeFirstname ? 'invalid' : '' }
                        />

                        { this.state.errorTrusteeFirstname ? <div className="invalid-feedback">First Name is required</div> : '' }   

                    </div>

                </Col>

                <Col>

                    <div className="mb-15">
                        
                        <Label>Middle Name</Label>
                        <Input 
                            type="text" 
                            name="trusteeMiddlename" 
                            value={ this.state.trusteeMiddlename } 
                            onChange={ this.change }
                            tabIndex={8}
                            
                        />

                        

                    </div>

                </Col>

                <Col>

                    <div className="mb-15">
                        
                        <Label>Last Name</Label>
                        <Input 
                            type="text" 
                            name="trusteeLastname" 
                            value={ this.state.trusteeLastname } 
                            onChange={ this.change }
                            tabIndex={9}
                            className={ this.state.errorTrusteeLastname ? 'invalid' : '' }
                        />

                        { this.state.errorTrusteeLastname ?  <div className="invalid-feedback">Last Name is required</div> : '' }

                    </div>

                </Col>

            </FormGroup>

            <FormGroup row>
                

                <Col>
                    <Label>Title</Label>
                    <Input 
                        type="text" 
                        name="title" 
                        value={ this.state.title } 
                        onChange={ this.change } 
                        className={ this.state.errorTitle ? 'invalid' : '' }
                        tabIndex={11}
                    />     

                    { this.state.errorTitle ? <div className="invalid-feedback">Title is required</div> : '' }       
                </Col>
                
            </FormGroup>

                
                
            </CardBody>
        </Card>
        <Card className="mb-30">
            <CardBody>
            
                <h2>Mailing Address</h2>

                <FormGroup row>

                    <Col>
                        <Label>Street Address</Label>
                        <Input 
                            type="text" 
                            name="companyAddress" 
                            value={ this.state.companyAddress }
                            onChange={ this.change }
                            className={ this.state.errorAddress ? 'invalid' : '' }
                            tabIndex={13}
                        />

                        { this.state.errorAddress ? <div className="invalid-feedback">Address is required</div> : '' }   
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col>
                        <Label>City</Label>
                        <Input 
                            type="text" 
                            name="companyCity"
                            value={ this.state.companyCity }
                            onChange={ this.change }
                            className={ this.state.errorCity ? 'invalid' : '' }
                            tabIndex={13}
                        />
                        { this.state.errorCity ? <div className="invalid-feedback">City is required</div> : '' }   
                    </Col>
                    
                    <Col>
                        <Label>State</Label>
                        <SelectState 
                            value={ this.state.companyState }
                            onChange={ this.changeCompanyState }
                            disabled={ false }
                            className={ this.state.errorState ? 'invalid' : '' }
                            tabIndex={14}
                        />
                        { this.state.errorState ? <div className="invalid-feedback">State is required</div> : '' }   
                    </Col>
                    
                    <Col>
                        <Label>Zip Code</Label>
                        <Input 
                            type="text" 
                            name="companyPostCode"
                            value={ this.state.companyPostCode }
                            onChange={ this.change }
                            className={ this.state.errorPostCode ? 'invalid' : '' }
                            tabIndex={15}
                        />
                        { this.state.errorPostCode ? <div className="invalid-feedback">Zip Code is required</div> : '' }   
                    </Col>
                </FormGroup>

                <Row className="mb-15">
                    <Col>Does the Trust have an Address different than the Address entered above?</Col>
                </Row>

                <FormGroup row>

                    <Col>
                        <Label className="form-radio">
                            <Input 
                                type="radio" 
                                checked={ this.state.differentAddress === 0 } 
                                onChange={() => this.changeAddress(0) }
                                tabIndex={16}
                            />No
                        </Label>
                    </Col>

                    <Col>
                        <Label className="form-radio">
                            <Input 
                                type="radio" 
                                checked={ this.state.differentAddress == 1 }
                                onChange={() => this.changeAddress(1)}
                                tabIndex={17}
                            />Yes
                        </Label>
                    </Col>
                </FormGroup>

                { this.state.differentAddress === 1 ?

                    <Fragment>

                        <h2>Alternate Address</h2>

                        <FormGroup row>

                            <Col>
                                <Label>Address</Label>
                                <Input 
                                    type="text" 
                                    name="mailingAddress" 
                                    value={ this.state.mailingAddress }
                                    onChange={ this.change }
                                    className={ this.state.errorMailingAddress ? 'invalid' : '' }
                                    tabIndex={18}
                                />
                                { this.state.errorMailingAddress ? <div className="invalid-feedback">Address is required</div> : '' }   
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                                <Label>City</Label>
                                <Input 
                                    type="text" 
                                    name="mailingCity"
                                    value={ this.state.mailingCity }
                                    onChange={ this.change }
                                    className={ this.state.errorMailingCity ? 'invalid' : '' }
                                    tabIndex={19}
                                />
                                { this.state.errorMailingCity ? <div className="invalid-feedback">City is required</div> : '' }   
                            </Col>
                            
                            <Col>
                                <Label>State</Label>
                                <SelectState 
                                    value={ this.state.mailingState }
                                    onChange={ this.changeMailingState }
                                    disabled={ false }
                                    className={ this.state.errorMailingState ? 'invalid' : '' }
                                    tabIndex={20}
                                />
                                { this.state.errorMailingState ? <div className="invalid-feedback">State is required</div> : '' }   
                            </Col>
                            
                            <Col>
                                <Label>Zip Code</Label>
                                <Input 
                                    type="text" 
                                    name="mailingPostCode"
                                    value={ this.state.mailingPostCode }
                                    onChange={ this.change }
                                    className={ this.state.errorMailingPostCode ? 'invalid' : '' }
                                    tabIndex={20}
                                />
                                { this.state.errorMailingPostCode ? <div className="invalid-feedback">Post Code is required</div> : '' }   
                            </Col>
                        </FormGroup>

                    </Fragment>

                : '' }
            </CardBody>
        </Card>
        <Card className="mb-30">
          <CardBody>
            <h2>Dates</h2>

                <FormGroup row>
                    <Col>
                        <Label>Date Trust Funded:</Label>
                        <Input 
                            type="date" 
                            name="dateStarted" 
                            onChange={ this.change } 
                            value={ this.state.dateStarted }
                            className={ this.state.errorDateStarted ? 'invalid' : '' }
                            tabIndex={26}
                        />
                        { this.state.errorDateStarted ? <div className="invalid-feedback">Date business started or acquired is required</div> : '' }
                    </Col>
                    <Col>
                        <Label>Closing Month of Accounting Year</Label>
                        <Input type="select"
                            value={ this.state.closingMonth }
                            tabIndex={27}
                        >
                            { months.map( m => {

                                return <option key={m} value={m}>{m}</option>

                            })}
                        </Input>
                    </Col>
                </FormGroup>

            </CardBody>
        </Card>

        <Card className="mb-30">
          <CardBody>
              <h2>Applicant Agreement</h2>

              <FormGroup>
                  <Label 
                      className={`form-checkbox d-flex ${ this.state.errorAgreement ? 'invalid' : '' }`}
                  >
                      <Input 
                          type="checkbox" 
                          checked={ this.state.agreement === 1 } 
                          onChange={ () => this.setState({ agreement: this.state.agreement === 1 ? 0 : 1 }) } 
                          tabIndex={39}
                      /> 
                      
                      <div>
                      By checking this box, I confirm my consent to submit my information to this website. I also acknowledge that I have read and agree to the Terms of Service and Privacy Policy. Furthermore, I authorize smartfiling.com as my designated third party to submit my application to the IRS and obtain my Tax Identification Number (EIN).


                      </div>
                  </Label>
                  { this.state.errorAgreement ? <div className="invalid-feedback">You must agreed</div> : '' }
              </FormGroup>

              <FormGroup>
                  <Label>Contact Phone</Label>
                  <Input 
                      type="text" 
                      name="contactPhone" 
                      value={ this.state.contactPhone } 
                      onChange={ this.change }
                      className={ this.state.errorPhohe ? 'invalid-feedback' : '' }
                      tabIndex={40}
                  />
                  { this.state.errorPhone ? <div className="invalid-feedback">Contact Phone is required</div> : '' }   
              </FormGroup>

              <FormGroup row>
                  <Col>
                      <Label>Enter Email</Label>
                      <Input 
                          type="text" 
                          name="email" 
                          value={ this.state.email } 
                          onChange={ this.change } 
                          className={ this.state.errorEmail ? 'invalid' : '' }
                          tabIndex={41}
                      />
                      { this.state.errorEmail ? <div className="invalid-feedback">Email is not valid</div> : '' }   
                  </Col>

                  
              </FormGroup>

          </CardBody>
        </Card>

        <Row className="mb-30">
          <Col className="d-flex justify-content-end">
              <Button color="primary" onClick={ this.next }>
                  Next
              </Button>
          </Col>
        </Row>

        
      </Fragment>
    )

  }

}