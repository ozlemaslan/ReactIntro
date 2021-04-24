import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,

} from 'reactstrap';

export default class Sepet extends Component {
    render() {
        return (
            <div className="col-md-3" style={{marginLeft:"650px",float:"right"}}>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Sepetim--{this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>

                        {
                            this.props.cart.map(sepetEleman => (
                                <DropdownItem key={sepetEleman.product.id}>
                                    <Badge color="danger" onClick={()=>this.props.sepetSil(sepetEleman.product)}>Sil</Badge>
                                    {sepetEleman.product.productName}
                                    <Badge color="success">{sepetEleman.quantity}</Badge>
                                </DropdownItem>
                            ))
                        }
                        <DropdownItem >
                            <Link to="cart">Sepete Git</Link>
                            </DropdownItem>
                        <DropdownItem divider />
                        
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
