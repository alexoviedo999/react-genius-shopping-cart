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
		this.updateQty = this.updateQty.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	addToCart (item) {
		let {cartItems} = this.state;
		this.setState({cartItems : addToCart(cartItems, item)})
	}

	updateQty (code, qty){
      qty = parseInt(qty) || 0;
      let {cartItems} = this.state;
      cartItems = cartItems.map((item) => {
        if(item.code === code){
          item = updateItemQty(item, qty);
        }
        return item;
      });
      this.setState({cartItems});
    }

	removeItem (code) {
	  let {cartItems} = this.state;
	  cartItems = cartItems.filter( item => item.code !== code );
	  this.setState({cartItems});
	}


	render(){
		const {products, cartItems} = this.state;

	  	return (
			<div>
				<ProductList
					products={products}
					addToCart={this.addToCart}

					/>

				<CartList
					cartItems={cartItems}
					removeItem={this.removeItem}
					updateQty={this.updateQty}
					/>
			</div>
	  )
	}
}

function updateItemQty(item, qty){
  item.qty = qty;
  item.amount = item.price(item.qty) * ( item.qty - item.freeQty(item.qty));
  return item;
}

function addToCart(cart, item){
  const itemInCart = cart.findIndex(ci => ci.code === item.code) > -1;
  if (itemInCart){
     cart = cart.map(ci => {
       if (ci.code === item.code) {
         ci.qty += 1;
       }
       return updateItemQty(ci, ci.qty)
     })
  }
  else{
    cart.push(updateItemQty(item, 1))
  }
  return cart;
}



export default App;
