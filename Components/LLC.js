import React, {Component, Fragment} from 'react';

import { Card, CardBody, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';

import { SelectState } from './Ein';

export default class LLC extends Component {

    constructor( props ) {

        super( props );

        this.state = {
            companyName: '',
            dateOfFormation: '',
            tradeName: '',
            member: 1,
            taxationIndividual: 1,
            taxationCorporation: 0,
            taxationScorporation: 0,
            dateStarted: '',
            closingMonth: 'December',
            reason: 'Banking Purposes',
            activity: 'Please Select an Option',
            otherActivity: '',
            contactPhone: '',
            differentAddress: 0,
            email: '',
            confirmEmail: '',

            firtname: '',
            lastname: '',
            middlename: '',
            ssNumber: '',
            title: '',

            hasMotor: 0,
            gambling: 0,
            alcohol: 0,
            payExcise: 0,
            acceptCard: 0,
            hireEmployee: 0,

            agreement: 1
        }

        this.change = this.change.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeTaxation = this.changeTaxation.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
        this.selectMember = this.selectMember.bind(this);

        this.next = this.next.bind(this);

    }

    next() {

        

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

        if (name == 'individual') {

            taxationIndividual = 1;

        } else if (name == 'scorporation') {

            taxationScorporation = 1;

        } else if (name == 'corporation') {

            taxationCorporation = 1;

        }

        this.setState({ taxationIndividual, taxationCorporation, taxationScorporation });

    }

    change( e ) {

        this.setState({ [e.target.name]: e.target.value });

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
                            <Label>LLC Name</Label>
                            <Input 
                                type="text" 
                                name="companyName"
                                value={ this.state.companyName }
                                onChange={ this.change }    
                            />
                            
                        </FormGroup>

                        <FormGroup row>

                            <Col>
                                <Label>Trade Name / DBA</Label>
                                <Input 
                                    placeholder="optional" 
                                    name="tradeName" 
                                    value={ this.state.tradeName} 
                                    onChange={ this.change }
                                />
                            </Col>

                            <Col>
                            
                                <Label>Number of LLC Members</Label>
                                <Input type="select"
                                    value={ this.state.members}
                                    onChange={ this.selectMember }
                                >
                                    {
                                        [1,2,3,4,5,6,7,8,9,10,11].map( o => {

                                            if (o > 10) {

                                                return <option value="more than 10">more than 10</option>

                                            } else {

                                                return <option value={o}>{o}</option>

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
                                    tabIndex={1}
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
                                    tabIndex={2}
                                    
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
                                    tabIndex={3}
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
                            />
                        </Col>

                        <Col>
                            <Label>Title</Label>
                            <Input 
                                type="text" 
                                name="title" 
                                value={ this.state.title } 
                                onChange={ this.change } 
                            />         
                        </Col>
                    </FormGroup>

                        <FormGroup row className="d-none">

                            <Col>

                                <div className="mb-15">

                                    <Label>Email</Label>
                                    <Input 
                                        type="text" 
                                        name="email" 
                                        value={ this.state.email } 
                                        onChange={ this.change }
                                        tabIndex={3}
                                        className={ this.state.errorEmail ? 'invalid' : '' }
                                    />

                                    { this.state.errorEmail ?  <div className="invalid-feedback">Email is not valid</div> : '' }


                                </div>
                            </Col>

                            <Col>

                                <div className="mb-15">

                                    <Label>Mobile Phone</Label>
                                    <Input 
                                    type="text" 
                                    name="mobile"
                                    placeholder="(201)555-0123"
                                    value={ this.state.mobile }
                                    onChange={ this.change }
                                    className={ this.state.errorMobile ? 'invalid' : '' }
                                    />

                                    { this.state.errorMobile ?  <div className="invalid-feedback">Mobile Phone is required</div> : '' }

                                
                                </div>
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
                                />
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
                                />
                            </Col>
                            
                            <Col>
                                <Label>State</Label>
                                <SelectState 
                                    value={ this.state.companyState }
                                    onChange={ this.changeCompanyState }
                                    disabled={ false }
                                />
                            </Col>
                            
                            <Col>
                                <Label>Zip Code</Label>
                                <Input 
                                    type="text" 
                                    name="companyPostCode"
                                    value={ this.state.companyPostCode }
                                    onChange={ this.change }
                                />
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
                                        checked={ this.state.differentAddress == 0 } 
                                        onChange={() => this.changeAddress(0) }
                                    />No
                                </Label>
                            </Col>

                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.differentAddress == 1 }
                                        onChange={() => this.changeAddress(1)}
                                    />Yes
                                </Label>
                            </Col>
                        </FormGroup>

                        { this.state.differentAddress == 1 ?

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
                                        />
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
                                        />
                                    </Col>
                                    
                                    <Col>
                                        <Label>Mailing State</Label>
                                        <SelectState 
                                            value={ this.state.mailingyState }
                                            onChange={ this.changeMailingState }
                                            disabled={ false }
                                        />
                                    </Col>
                                    
                                    <Col>
                                        <Label>Mailing Zip Code</Label>
                                        <Input 
                                            type="text" 
                                            name="mailingPostCode"
                                            value={ this.state.mailingPostCode }
                                            onChange={ this.change }
                                        />
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
                                    value={ this.state.mailingyState }
                                    onChange={ this.changeMailingState }
                                    disabled={ false }
                                />
                            </Col>
                            <Col>
                                <Label>Reason for Applying</Label>
                                <Input 
                                    type='select'
                                    name="reason"
                                    value={ this.state.reason }
                                >
                                    { reasons.map( r => {

                                        return <option value={r}>{r}</option>

                                    })}
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                                <Label>Primary Activity</Label>
                                <Input type="select"
                                        value={ this.state.activity }
                                        onChange={ this.changeActivity }
                                >
                                    { activities.map( a => {

                                        return <option value={a}>{a}</option>

                                    })}
                                </Input>
                            </Col>
                            <Col>
                                <Label>Specific Products/Services</Label>
                                <Input type="text" />
                            </Col>
                        </FormGroup>

                        {
                            this.state.activity == 'Other' ?

                            <FormGroup>
                                <Label>Specific Other Activity</Label>
                                <Input type="text" name="otherActivity" onChange={ this.change } value={ this.state.otherActivity } />
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
                                />
                            </Col>
                            <Col>
                                <Label>Closing Month of Accounting Year</Label>
                                <Input type="select"
                                    value={ this.state.closingMonth }
                                >
                                    { months.map( m => {

                                        return <option value={m}>{m}</option>

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
                                        checked={ this.state.gambling == 0 } 
                                        onChange={ () => this.setState({ gambling: 0 }) } 
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.gambling == 1 } 
                                        onChange={ () => this.setState({ gambling: 1 }) } 
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
                                        checked={ this.state.alcohol == 0 } 
                                        onChange={ () => this.setState({ alcohol: 0 }) } 
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.alcohol == 1 } 
                                        onChange={ () => this.setState({ alcohol: 1 }) } 
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
                                        checked={ this.state.payExcise == 0 } 
                                        onChange={ () => this.setState({ payExcise: 0 }) } 
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.payExcise == 1 } 
                                        onChange={ () => this.setState({ payExcise: 1 }) } 
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
                                        checked={ this.state.acceptCard == 0 } 
                                        onChange={ () => this.setState({ acceptCard: 0 }) } 
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.acceptCard == 1 } 
                                        onChange={ () => this.setState({ acceptCard: 1 }) } 
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
                                        checked={ this.state.hireEmployee == 0 } 
                                        onChange={ () => this.setState({ hireEmployee: 0 }) } 
                                    /> No
                                </Label>
                            </Col>
                            <Col>
                                <Label className="form-radio">
                                    <Input 
                                        type="radio" 
                                        checked={ this.state.hireEmployee == 1 } 
                                        onChange={ () => this.setState({ hireEmployee: 1 }) } 
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
                            <Label className="form-checkbox d-flex">
                                <Input 
                                    type="checkbox" 
                                    checked={ this.state.agreement == 1 } 
                                    onChange={ () => this.setState({ agreement: this.state.agreement == 1 ? 0 : 1 }) } 
                                /> 
                                
                                <div>
                                    By checking this box I agree to submit my information to this website. I also 
                                    agree to the Terms of Service and Privacy Policy of this website. I authorize 
                                    goveasyfilings.com as a third party designee to submit my application to the 
                                    IRS and obtain my Tax ID (EIN)
                                </div>
                            </Label>
                        </FormGroup>

                        <FormGroup>
                            <Label>Contact Phone</Label>
                            <Input 
                                type="text" 
                                name="contactPhone" 
                                value={ this.state.contactPhone } 
                                onChange={ this.change }
                            />
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                                <Label>Enter Email</Label>
                                <Input 
                                    type="text" 
                                    name="email" 
                                    value={ this.state.email } 
                                    onChange={ this.change } 
                                />
                            </Col>

                            <Col>
                                <Label>Confirm Email</Label>
                                <Input 
                                    type="text" 
                                    name="confirmEmail" 
                                    value={ this.state.confirmEmail } 
                                    onChange={ this.change } 
                                />
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