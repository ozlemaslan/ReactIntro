import React, { Component , useState} from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import Sepet from './Sepet';


export default class Navi extends Component {

    constructor(props){
      super(props);

      this.state={
          isOpen:false
      }
    }

    toggle = () =>{
     this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        
        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">NWD</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    
                   <Sepet sepetSil={this.props.sepetSil} cart={this.props.cart}/>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
    }
}






