import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Product extends Component {
 constructor(props) {
   super(props);
   this.state = {qty:0};
   this.buy = this.buy.bind(this);
   this.show = this.show.bind(this);
   this.bawas = this.bawas.bind(this);
 }
 buy() {
   this.setState({qty: this.state.qty + 1});
   this.props.handleTotal(this.props.price);
 }

 show() {
   this.props.handleShow(this.props.name);
 }

 bawas() {
   this.setState({qty: this.state.qty - 1});
   this.props.handleTotal(-this.props.price);
 }

 render() {
   return (
     <div>
     <p>{this.props.name} = ${this.props.price}</p>
     <button onClick={this.buy}>Buy</button>
     <button onClick={this.show}>Show</button>
     <button onClick={this.bawas}>Remove</button>
     <h3>{this.state.qty}</h3>
     <h3>{this.state.qty*this.props.price}</h3>
     <hr />
     </div>
   );
 }
}
class Total extends Component {

 render() {
   return(
     <div>
     <h3>Total Balance: ${this.props.total}</h3>
     </div>
     )
 }
}

class ProductForm extends Component {
 constructor(props) {
   super(props);
   this.submit = this.submit.bind(this);
 }
 submit(e) {
   e.preventDefault();
 }

 render() {
   return(
     <form>
       <input type="text" placeholder="Product Name" ref="name" />
       <input type="text" placeholder="Product Price" ref="price" />
       <br/>
       <button>Create Product</button>
     </form>
   );
 }
}

class ProductList extends Component {

 constructor(props) {
   super(props);
   this.state={total:0,
       productList: [{name: "Android", price: 1000},
     {name: "Apple", price: 50000},
     {name: "Samsung", price: 40000},
     {name: "Kopiko", price: 78}]
   };
   this.calcTotal = this.calcTotal.bind(this);
 }

 calcTotal(price) {
   this.setState({total: this.state.total + price});
 }

 showProduct(name) {
   alert("You are buying " + name);
 }
 render() {
   var component = this;
   var products = this.state.productList.map(function(prod){
     return(
       <Product name={prod.name} price={prod.price}
         handleShow={component.showProduct}
         handleTotal={component.calcTotal}/>
     );
   });
     return(
       <div>
         <Product name="Android" price={1000}
           handleShow={this.showProduct}
           handleTotal={this.calcTotal}/>
         <Product name="Apple" price={50000}
           handleShow={this.showProduct}
           handleTotal={this.calcTotal}/>
         <Product name="Samsung" price={40000}
           handleShow={this.showProduct}
           handleTotal={this.calcTotal}/>
         <Product name="Kopiko" price={78}
           handleShow={this.showProduct}
           handleTotal={this.calcTotal}/>
         <Total total={this.state.total}/>
       </div>
       )
 }
}




export default ProductList;