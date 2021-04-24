

import React, { Component } from 'react'
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import { Container, Row, Col } from "reactstrap"
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import SepetListesi from './SepetListesi';

export default class App extends Component {

  state = {
    currentCategory: "",
    products: [],
    cart: []
  }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId != null) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));

    console.log("products", this.state.products);

  }

  SepeteEkle = (product) => {
    let sepet = this.state.cart;
    var eklenmisMi = sepet.find(c => c.product.id === product.id);

    if (eklenmisMi) {
      eklenmisMi.quantity += 1;
      console.log("eklenmisMi", eklenmisMi);
      console.log("quantity", eklenmisMi.quantity);
    }
    else { sepet.push({ product: product, quantity: 1 }); }



    this.setState({ cart: sepet });

    console.log("cart", this.state.cart)
  }

  SepettenSil = (product) => {

    var sepet = this.state.cart.filter(a => a.product.id !== product.id);

    this.setState({ cart: sepet });
    console.log("sepetten sil", this.state.cart);
  }

  render() {

    return (

      <div className="App">
        <Container>

          <Navi sepetSil={this.SepettenSil} cart={this.state.cart} />
          <Row>
            <Col className="col-md-3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
            </Col>
            <Col className="col-md-9">
              <Switch>
                <Route exact path="/" render={prop => (
                  <ProductList SepeteEkle={this.SepeteEkle} products={this.state.products} currentCategory={this.state.currentCategory} />

                )
                }></Route>

                <Route exact path="/cart" render={prop => (
                  <SepetListesi sepetSil={this.SepettenSil} cart={this.state.cart} />
                )
                }></Route>

                <Route exact component={NotFound}></Route>
              </Switch>

            </Col>

          </Row>
        </Container>


      </div>
    );


  }

}



