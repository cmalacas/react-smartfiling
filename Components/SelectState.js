import React, { Component } from 'react';

import { Input } from 'reactstrap';

export default class SelectState extends Component {

  constructor( props ) {

    super( props );

  }

  render() {

    const states = ['Select State',
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "Washington DC",
      "West Virginia",
      "Wisconsin",
      "Wyoming"];

    return (

      <Input 
        type="select" 
        value={ this.props.value } 
        onChange={ this.props.onChange } 
        disabled={ this.props.disabled }
        className={ this.props.className }
        tabIndex={ this.props.tabIndex }
      >

        {
          states.map( s => { return <option value={s} key={s}>{s}</option> })
        }
                   
      </Input>      

    )

  }

}