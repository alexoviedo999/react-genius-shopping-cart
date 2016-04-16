import React, {Component} from 'react';
import CartItem from './CartItem.jsx';
import CartList from './CartList.jsx';
import Product from './Product.jsx';
import ProductList from './ProductList.jsx';
import Products from '../Products.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: Products,
			cartItems: []
		}

		this.addToCart = this.addToCart.bind(this);
	}

	addToCart (item) {
		let {cartItems} = this.state;
		this.setState({cartItems : addToCart(cartItems, item)})
	}

	render(){
		const {products, cartItems} = this.state;

	  	return (
			<div>
				<ProductList
					products={products}
					addToCart={this.addToCart}

					/>

				<CartList cartItems={cartItems}/>
			</div>
	  )
	}
}

function addToCart (cart, item) {
	cart.push(item);
	return cart;
}


export default App;
