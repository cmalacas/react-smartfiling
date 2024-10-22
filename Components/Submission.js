import React, { Component } from 'react'

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';


export default class Submission extends Component {

  constructor( props ) {

    super( props );

    this.state = {
      entityType: '',
      companyName: '',
      companyAddress: '',
      companyCity: '',
      companyState: '',

      mailingAddress: '',
      mailingCity: '',
      mailingState: '',

      tradeName: '',
      member: 1,
      taxationIndividual: 1,
      taxationCorporation: 0,
      taxationScorporation: 0,
      firstname: '',
      lastname: '',
      ssNumber: '',
      title: '',      
      companyPostCode: '',
      mobile:'',
      email: '',
      hasMotor: 0,
      gambling: 0,
      alcohol: 0,
      payExcise: 0,
      acceptCard: 0,
      hireEmployee: 0,
      submissionDate: '',
      stateOfFormation: '',
      reason: '',
      activity: '',
      specificActity: '',
      dateOfFormation: '',
      closingMonth: '',

      status: '',

      id: 0
    }

  }

  componentDidMount() {

    axios.post('get-submission.php', { id : SUBMISSION_ID }) 
    .then( response => {

      const data = response.data;

      this.setState({
        entityType: data.entity_type,
        companyName: data.company_name,
        companyAddress: data.company_address,
        companyCity: data.company_city,
        companyState: data.company_state,
        companyPostCode: data.company_post_code,
        
        mailingAddress: data.mailing_address,
        mailingCity: data.mailing_city,
        mailingState: data.mailing_state,
        mailingPostCode: data.mailing_post_code,
        tradeName: data.trade_name,
        member: data.member,
        taxationIndividual: data.taxation_individual,
        taxationCorporation: data.taxation_corporation,
        taxationScorporation: data.taxation_scorporation,
        firstname: data.firstname,
        lastname: data.lastname,
        ssNumber: data.ss_number,
        title: data.title,
        mobile: data.mobile,
        email: data.email,
        hasMotor: data.has_motor,
        gambling: data.gambling,
        alcohol: data.alcohol,
        payExcise: data.pay_excise,
        acceptCard: data.accept_card,
        hireEmployee: data.hire_employee,

        stateOfFormation: data.state_of_formation,
        reason: data.reason,
        activity: data.activity,
        specificActivity: data.specific_activity,
        dateOfFormation: data.date_of_formation,
        closingMonth: data.closing_month,

        submissionDate: data.submissionDate,

        status: data.status,
        id: data.id
      });

    })

  }

  render() {

    return (

      <div>
        <Row>
          <Col md={8}>
            <Card className="mb-30">
              <CardBody>
                <h2>Entity Type</h2>

                <Row>
                  <Col className="mb-15">
                    { this.state.entityType }
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card className='mb-30'>

                <CardBody>
                  <h2>Company Information</h2>

                  <Row>
                    <Col>
                      <Label>LLC Name - Must match with company name filed with state</Label>

                      { this.state.companyName }
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label>Trade Name / DBA</Label>  
                      { this.state.tradeName }
                    </Col>
                    <Col>
                      <Label>Number of LLC Members</Label>
                      { this.state.member }
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label>Taxation of the LLC</Label>
                      {  
                        this.state.taxationIndividual === 1  ? 'Individual/Partnership: Not taxed as a separate entity from owner(s).' :
                        this.state.taxationCorporation === 1 ? 'Corporation: LLC is planning to elect a Corporation tax structure.' :
                        this.state.taxationScorporation === 1 ? 'S-Corporation: Planning to elect a S-Corporation tax structure.' : 'Not Taxed'
                      }
                    </Col>
                  </Row>
                </CardBody>

            </Card>

            <Card className='mb-30'>

              <CardBody>

                <h2>Managing Member Information</h2>

                <Row>
                  <Col>
                    <Label>First Name</Label>
                    { this.state.firstname }
                  </Col>
                  <Col>
                    <Label>Middle Name</Label>
                    { this.state.middlename }
                  </Col>
                  <Col>
                    <Label>Last Name</Label>
                    { this.state.lastname }
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>Social Security Number</Label>
                    { this.state.ssNumber }
                  </Col>
                  <Col>
                    <Label>Title</Label>
                    { this.state.title }
                  </Col>
                </Row>

              </CardBody>

            </Card>

            <Card className='mb-30'>

              <CardBody>

                <h2>Business Address (PO Boxes Not Allowed)</h2>

                <Row>
                  <Col>
                    <Label>Street Address</Label>
                    { this.state.companyAddress }  

                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>City</Label>
                    { this.state.companyCity }  
                  </Col>

                  <Col>
                    <Label>State</Label>
                    { this.state.companyState }  
                  </Col>

                  <Col>
                    <Label>Zip Code</Label>
                    { this.state.companyPostCode }  
                  </Col>
                </Row>
                

              </CardBody>

            </Card>

            <Card className='mb-30'>

              <CardBody>

                <h2>Mailing Address</h2>

                <Row>
                  <Col>
                    <Label>Mailing Address</Label>
                    { this.state.companyAddress }  

                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>Mailing City</Label>
                    { this.state.companyCity }  
                  </Col>

                  <Col>
                    <Label>Mailing State</Label>
                    { this.state.companyState }  
                  </Col>

                  <Col>
                    <Label>Mailing Zip Code</Label>
                    { this.state.companyPostCode }  
                  </Col>
                </Row>
                

              </CardBody>

            </Card>

            <Card className="mb-30">

                <CardBody>

                    <h2>Business Information</h2>

                    <Row>
                      <Col>
                        <Label>
                          Which State was the LLC Organized In?
                        </Label>
                        { this.state.stateOfFormation}
                      </Col>
                      <Col>
                        <Label>Reason for Applying</Label>
                        { this.state.reason }
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col>
                        <Label>
                          Primary Activity
                        </Label>
                        { this.state.activity }
                      </Col>
                      <Col>
                        <Label>Specific Products/Services</Label>
                        { this.state.specificActivity }
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col>
                        <Label>
                          Date business started or acquired:
                        </Label>
                        { this.state.dateOfFormation  }
                      </Col>
                      <Col>
                        <Label>Closing Month of Accounting Year</Label>
                        { this.state.closingMonth }
                      </Col>
                    </Row>

                </CardBody>

            </Card>

            <Card className='mb-30'>

              <CardBody>

                <h2>Company Details</h2>

                <Row>
                  <Col>
                    <Label>Does your business own a highway motor vehicle weighing over 55,000 pounds?</Label>
                  </Col>
                  <Col>
                      { this.state.hasMotor === 1 ? 'Yes' : 'No' }
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>Does your business involve gambling?</Label>
                  </Col>
                  <Col>
                    { this.state.gambling === 1 ? 'Yes' : 'No' }
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>Does your business sell or manufacture alcohol, tobacco or firearms?</Label>
                  </Col>
                  <Col>
                    { this.state.alcohol === 1 ? 'Yes' : 'No' }
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>Does your business pay federal excise taxes?</Label>
                  </Col>
                  <Col>
                    { this.state.payExcise === 1 ? 'Yes' : 'No' }
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>Does your business plan to accept credit card payments?</Label>
                  </Col>
                  <Col>
                    { this.state.acceptCard === 1 ? 'Yes' : 'No' }
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label>Do you currently have or expect to hire employees within 12 months?</Label>
                  </Col>
                  <Col>
                    { this.state.hireEmployee === 1 ? 'Yes' : 'No' }
                  </Col>
                </Row>

              </CardBody>

            </Card>

            <Card className='mb-30'>

              <CardBody>

                <h2>Applicant Contact</h2>

                <Row>
                  <Col>
                    <Label>Contact Phone</Label>
                    { this.state.mobile }  
                  </Col>
                  <Col>
                    <Label>Email</Label>
                    { this.state.email }  
                  </Col>
                </Row>

              </CardBody>

            </Card>

          </Col>
          <Col md={4}>
            <Card>
              <CardBody>

                  <Row>

                      <Col>

                        { this.state.status === 'Incomplete' ? <a className="btn btn-primary" href={`pay-now?id=${ this.state.id }`}>Pay Now</a> : '' }

                      </Col>

                  </Row>

                  <Row>
                    <Col>
                      Submission Date
                    </Col>
                    <Col>
                      { this.state.submissionDate }
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      Entity Type
                    </Col>
                    <Col>
                      { this.state.entityType }
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      Status
                    </Col>
                    <Col>
                      { this.state.status }
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