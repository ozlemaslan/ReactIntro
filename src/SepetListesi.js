import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class SepetListesi extends Component {
   sepetListesi(){
       return(
       <Table>
           <thead>
           <tr>
               <th>#</th>
               <th>Product Name</th>
               <th>Unit Price</th>
               <th>Units InStock</th>
               <th>Quantity</th>
               <th></th>
           </tr>
           </thead>
           <tbody>
               {
                   this.props.cart.map(cartItem=>(
                       <tr key={cartItem.product.id}>
                           <td>{cartItem.product.id}</td>
                           <td>{cartItem.product.productName}</td>
                           <td>{cartItem.product.unitPrice}</td>
                           <td>{cartItem.product.unitsInStock}</td>
                           <td>{cartItem.quantity}</td>
                           <td><Button onClick={()=>this.props.sepetSil(cartItem.product)}>Sil</Button></td>
                       </tr>
                   ))
               }
           </tbody>
       </Table>
       )
   }

    render() {
        return (
            <div>
                {this.sepetListesi()}
            </div>
        )
    }
}
