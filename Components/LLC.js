import React, {Component, Fragment} from 'react';

import { Card, CardBody, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';

import SelectState  from './SelectState';

import axios from 'axios';

export default class LLC extends Component {

    constructor( props ) {

        super( props );

        this.state = {
            companyName: '',
            tradeName: '',
            member: 1,
            taxationIndividual: 1,
            taxationCorporation: 0,
            taxationScorporation: 0,

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

            step: 1,

            submission_id: 0

        }

        this.change = this.change.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeTaxation = this.changeTaxation.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
        this.selectMember = this.selectMember.bind(this);

        this.next = this.next.bind(this);

        this.changeCompanyState = this.changeCompanyState.bind(this);        
        this.changeMaililngState = this.changeMailingState.bind(this);        

        this.changeStateOfFormation = this.changeStateOfFormation.bind(this);        

    }

    changeStateOfFormation(e) {

        this.setState( { stateOfFormation: e.target.value });

    }

    changeMailingState(e) {

        this.setState( { mailingState: e.target.value });

    }

    changeCompanyState( e ) {

        this.setState( { companyState: e.target.value });

    }

    next() {

        
        const { firstname, lastname, title, email, mobile, 
                stateOfFormation, dateStarted, differentAddress, 
                reason, otherActivity, specificActivity, 
                activity, contactPhone, confirmEmail, 
                agreement, companyAddress, companyCity, 
                companyPostCode, companyState, mailingAddress, 
                mailingCity, mailingPostCode, mailingState, 
                ssNumber, companyName, tradeName, member, 
                taxationIndividual, taxationCorporation,
                taxationScorporation, hasMotor, gambling, alcohol,
                payExcise, acceptCard, hireEmployee, 
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

        
        let valid = true;

        // console.log('state', this.state);

        if (contactPhone === '') {

            errorPhone = true;
            valid = false;

        }

        if (agreement === 0) {

            errorAgreement = true;
            valid = true;

        }

        if (activity === 'Please Select an Option') {

            errorActivity = true;
            valid = false;

        }

        if (activity === 'Other') {

            if ( otherActivity === '') {

                errorOtherActivity = true;
                valid = false;

            }

        }

        if ( stateOfFormation === '') {

            errorStateOfFormation = true;
            valid = false;

        }

        if (dateStarted === '') {

            errorDateStarted = true;
            valid = false;

        }

        if ( reason === '') {

            errorReason = true;
            valid = false;

        }

        if ( specificActivity === '') {

            errorSpecificActivity = true;
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
    
            errorCompanyName = true;
            valid = false;
      
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

        if ( email !== confirmEmail) {

            errorConfirmEmail = true;
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
    
        if (valid) {
    
          const data = new FormData();
    
          data.append('firstname', firstname);
          data.append('lastname', lastname);
          data.append('email', email);

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
        
          axios.post('submit.php', data )
          .then( res => {
    
            const submission_id = res.data.submission_id;
    
            this.setState({ step: 2, submission_id }, () => {

                // window.location = DASHBOARD_URL + '/pay-now?submission_id=' + submission_id;

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
            errorPhone
          });
    
    
        }
    
        
    
    }

    selectMember( e ) {

        this.setState({ member: e.target.value });

    }

    changeActivity( e ) {

        this.setState({ activity : e.target.value });

    }

    changeAddress( differentAddress ) {

        this.setState({ differentAddress });

    }

    changeTaxation( name ) {

        let taxationIndividual = 0;
        let taxationCorporation = 0;
        let taxationScorporation = 0;

        if (name === 'individual') {

            taxationIndividual = 1;

        } else if (name === 'scorporation') {

            taxationScorporation = 1;

        } else if (name === 'corporation') {

            taxationCorporation = 1;

        }

        this.setState({ taxationIndividual, taxationCorporation, taxationScorporation });

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
            errorPhone
        });

    }

    render() {

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const reasons = ['Started New Business', 'Hired Employees', 'Banking Purposes', 'Changed Type of Organization', 'Purchased Business'];

        const activities = [
                            'Please Select an Option',
                            'Hotel/Motel', 
                            'Construction', 
                            'Finance', 
                            'Food Service', 
                            'Health Care', 
                            'Insurance', 
                            'Manufacturing', 
                            'Real Estate',
                            'Rental & Leasing',
                            'Retail',
                            'Social Assistance',
                            'Transportation',
                            'Warehousing',
                            'Wholesale',
                            'Other'
                        ];

        return (

            <Fragment>

                <Card className="mb-30">
                    <CardBody>
                        
                        <h2>Company Information</h2>

                        <FormGroup>
                            <Label>LLC Name - Must match with company name filed with state</Label>
                            <Input 
                                type="text" 
                                name="companyName"
                                value={ this.state.companyName }
                                onChange={ this.change }    
                                tabIndex={1}
                                className={ this.state.errorCompanyName ? 'invalid' : '' }
                            />
                            { this.state.errorCompanyName ? <div className="invalid-feedback">LLC Name is required</div> : '' }                               

                            
                            
                        </FormGroup>

                        <FormGroup row>

                            <Col>
                                <Label>Trade Name / DBA</Label>
                                <Input 
                                    placeholder="optional" 
                                    name="tradeName" 
                                    value={ this.state.tradeName} 
                                    onChange={ this.change }
                                    tabIndex={2}
                                />
                            </Col>

                            <Col>
                            
                                <Label>Number of LLC Members</Label>
                                <Input type="select"
                                    value={ this.state.members}
                                    onChange={ this.selectMember }
                                    tabIndex={3}
                                >
                                    {
                                        [1,2,3,4,5,6,7,8,9,10,11].map( o => {

                                            if (o > 10) {

                                                return <option key={11} value="more than 10">more than 10</option>

                                            } else {

                                                return <option key={o} value={o}>{o}</option>

                                            }

                                        })
                                    }
                                </Input>
                            </Col>
                        </FormGroup>

                    

                        <FormGroup>
                            <Label>Taxation of the LLC</Label>
                            <Row>
                                <Col>
                                    <Label className="form-radio">
                                        <Input 
                                            type="radio" 
                                            checked={ this.state.taxationIndividual == 1 } 
                                            className="mr-15" 
                                            tabIndex={4}
                                            onChange={() => this.changeTaxation('individual') }
                                        />Individual/Partnership: Not taxed as a separate entity from owner(s).
                                    </Label>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Label className="form-radio">
                                        <Input 
                                            type="radio" 
                                            checked={ this.state.taxationScorporation == 1 } 
                                            className="mr-15" 
                                            tabIndex={5}
                                            onChange={() => this.changeTaxation('scorporation') }
                                        /> S-Corporation: Planning to elect a S-Corporation tax structure.
                                    </Label>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <Label className="form-radio">
                                        <Input 
                                            type="radio" 
                                            checked={ this.state.taxationCorporation == 1 } 
                                            className="mr-15" 
                                            tabIndex={6}
                                            onChange={() => this.changeTaxation('corporation') }
                                        />Corporation: LLC is planning to elect a Corporation tax structure.
                                    </Label>
                                </Col>
                            </Row>
                        </FormGroup>
                    </CardBody>
                </Card>

                <Card className="mb-30">
                    <CardBody>

                        <Row>
                            <Col>
                                <h2>Managing Member Information</h2>
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
                                    tabIndex={7}
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
                                    tabIndex={8}
                                    
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
                                    tabIndex={9}
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
                                tabIndex={10}
                            />

                            { this.state.errorSSNumber ? <div className="invalid-feedback">Social Security Number is required</div> : '' }   
                        </Col>

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
                    
                        <h2>Business Address (PO Boxes Not Allowed)</h2>

                        <FormGroup row>

                            <Col>
                                <Label>Street Address</Label>
                                <Input 
                                    type="text" 
                                    name="companyAddress" 
                                    value={ this.state.companyAddress }
                                    onChange={ this.change }
                                    className={ this.state.errorAddress ? 'invalid' : '' }
                                    tabIndex={12}
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
                            <Col>Would you like to receive mail at a different address?</Col>
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

                                <h2>Mailing Address</h2>

                                <FormGroup row>

                                    <Col>
                                        <Label>Mailing Address</Label>
                                        <Input 
                                            type="text" 
                                            name="mailingAddress" 
                                            value={ this.state.mailingAddress }
                                            onChange={ this.change }
                                            className={ this.state.errorMailingAddress ? 'invalid' : '' }
                                            tabIndex={18}
                                        />
                                        { this.state.errorMailingAddress ? <div className="invalid-feedback">Mailing Address is required</div> : '' }   
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col>
                                        <Label>Mailing City</Label>
                                        <Input 
                                            type="text" 
                                            name="mailingCity"
                                            value={ this.state.mailingCity }
                                            onChange={ this.change }
                                            className={ this.state.errorMailingCity ? 'invalid' : '' }
                                            tabIndex={19}
                                        />
                                        { this.state.errorMailingCity ? <div className="invalid-feedback">Mailing City is required</div> : '' }   
                                    </Col>
                                    
                                    <Col>
                                        <Label>Mailing State</Label>
                                        <SelectState 
                                            value={ this.state.mailingState }
                                            onChange={ this.changeMailingState }
                                            disabled={ false }
                                            className={ this.state.errorMailingState ? 'invalid' : '' }
                                            tabIndex={20}
                                        />
                                        { this.state.errorMailingState ? <div className="invalid-feedback">Mailing State is required</div> : '' }   
                                    </Col>
                                    
                                    <Col>
                                        <Label>Mailing Zip Code</Label>
                                        <Input 
                                            type="text" 
                                            name="mailingPostCode"
                                            value={ this.state.mailingPostCode }
                                            onChange={ this.change }
                                            className={ this.state.errorMailingPostCode ? 'invalid' : '' }
                                            tabIndex={20}
                                        />
                                        { this.state.errorMailingPostCode ? <div className="invalid-feedback">Mailing Post Code is required</div> : '' }   
                                    </Col>
                                </FormGroup>

                            </Fragment>

                        : '' }
                    </CardBody>
                </Card>

                <Card className="mb-30">
                    <CardBody>
                        <h2>Business Information</h2>
                        <FormGroup row>
                            <Col>
                                <Label>Which State was the LLC Organized In?</Label>
                                <SelectState 
                                    value={ this.state.stateOfFormation }
                                    onChange={ this.changeStateOfFormation }
                                    disabled={ false }
                                    className={ this.state.errorStateOfFormation ? 'invalid' : '' }
                                    tabIndex={21}
                                />
                                { this.state.errorStateOfFormation ? <div className="invalid-feedback">State is required</div> : '' }   
                            </Col>
                            <Col>
                                <Label>Reason for Applying</Label>
                                <Input 
                                    type='select'
                                    name="reason"
                                    value={ this.state.reason }
                                    onChange={ this.change }           
                                    tabIndex={22}                         
                                >
                                    { reasons.map( r => {

                                        return <option key={r} value={r}>{r}</option>

                                    })}


                                </Input>
                                { this.state.errorReason ? <div className="invalid-feedback">Reason for Applying is required</div> : '' }   
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                                <Label>Primary Activity</Label>
                                <Input type="select"
                                        value={ this.state.activity }
                                        onChange={ this.changeActivity }
                                        lassName={ this.state.errorActivity ? 'invalid' : '' }
                                        tabIndex={23}
                                >
                                    { activities.map( (a, x) => {

                                        return <option key={x} value={a}>{a}</option>

                                    })}
                                </Input>
                                { this.state.errorActivity ? <div className="invalid-feedback">Primary Activity is required</div> : '' }   
                            </Col>
                            <Col>
                                <Label>Specific Products/Services</Label>
                                <Input 
                                    type="text" 
                                    name="specificActivity"
                                    value={ this.state.specificActivity }
                                    onChange={ this.change }
                                    className={ this.state.errorSpecificActivity ? 'invalid' : '' }
                                    tabIndex={24}
                                />
                                { this.state.errorSpecificActivity ? <div className="invalid-feedback">Specific Activity is required</div> : '' }   
                            </Col>
                        </FormGroup>

                        {
                            this.state.activity === 'Other' ?

                            <FormGroup>
                                <Label>Specific Other Activity</Label>
                                <Input 
                                    type="text" 
                                    name="otherActivity" 
                                    onChange={ this.change } 
                                    value={ this.state.otherActivity } 
                                    className={ this.state.errorOtherActivity ? 'invalid' : '' }
                                    tabIndex={25}
                                />
                                { this.state.errorOtherActivity ? <div className="invalid-feedback">Other Activity is required</div> : '' }   
                            </FormGroup>


                            : '' }
                        

                        <FormGroup row>
                            <Col>
                                <Label>Date business started or acquired:</Label>
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
                        <h2>Company Details</h2>

                        <FormGroup row>
                            <Col><Label>Does your business own a highway motor vehicle weighing over 55,000 pounds?</Label></Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.hasMotor == 0 } 
                                        onChange={ () => this.setState({ hasMotor: 0 }) } 
                                        tabIndex={28}
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.hasMotor == 1 } 
                                        onChange={ () => this.setState({ hasMotor: 1 }) } 
                                    /> Yes
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col><Label>Does your business involve gambling?</Label></Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.gambling === 0 } 
                                        onChange={ () => this.setState({ gambling: 0 }) } 
                                        tabIndex={29}
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.gambling === 1 } 
                                        onChange={ () => this.setState({ gambling: 1 }) } 
                                        tabIndex={30}
                                    /> Yes
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col><Label>Does your business sell or manufacture alcohol, tobacco or firearms?</Label></Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.alcohol === 0 } 
                                        onChange={ () => this.setState({ alcohol: 0 }) } 
                                        tabIndex={31}
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.alcohol === 1 } 
                                        onChange={ () => this.setState({ alcohol: 1 }) } 
                                        tabIndex={32}
                                    /> Yes
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col><Label>Does your business pay federal excise taxes?</Label></Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.payExcise === 0 } 
                                        onChange={ () => this.setState({ payExcise: 0 }) } 
                                        tabIndex={33}
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.payExcise === 1 } 
                                        onChange={ () => this.setState({ payExcise: 1 }) } 
                                        tabIndex={34}
                                    /> Yes
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col><Label>Does your business plan to accept credit card payments?</Label></Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.acceptCard === 0 } 
                                        onChange={ () => this.setState({ acceptCard: 0 }) } 
                                        tabIndex={35}
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.acceptCard === 1 } 
                                        onChange={ () => this.setState({ acceptCard: 1 }) } 
                                        tabIndex={36}
                                    /> Yes
                                </Label>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col><Label>Do you currently have or expect to hire employees within 12 months?</Label></Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.hireEmployee === 0 } 
                                        onChange={ () => this.setState({ hireEmployee: 0 }) } 
                                        tabIndex={37}
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.hireEmployee === 1 } 
                                        onChange={ () => this.setState({ hireEmployee: 1 }) } 
                                        tabIndex={38}
                                    /> Yes
                                </Label>
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

                            <Col>
                                <Label>Confirm Email</Label>
                                <Input 
                                    type="text" 
                                    name="confirmEmail" 
                                    value={ this.state.confirmEmail } 
                                    onChange={ this.change } 
                                    className={ this.state.errorConfirmEmail ? 'invalid' : '' }
                                    tabIndex={42}
                                />
                                { this.state.errorConfirmEmail ? <div className="invalid-feedback">You must confirmed your Email</div> : '' }   
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