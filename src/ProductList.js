
import React, { Component } from 'react'
import { Table, Button } from "reactstrap"

export default class ProductList extends Component {

   

    render() {
        return (
            <div>
                <h4>ProductList-- {this.props.currentCategory}</h4>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button
                                    color="success"
                                    onClick={()=>this.props.SepeteEkle(product)}
                                >Ekle
                                </Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </div>


        )
    }
}
