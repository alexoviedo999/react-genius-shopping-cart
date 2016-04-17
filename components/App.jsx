import React, {Component} from 'react';
import CartItem from './CartItem.jsx';
import CartList from './CartList.jsx';
import Product from './Product.jsx';
import ProductList from './ProductList.jsx';
import Products from '../Products.js';
import Banner from './Banner.jsx'
import { Appbar, Button, Container } from 'muicss/react';


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
		this.clearCart = this.clearCart.bind(this);
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

	clearCart (){
	  this.setState({cartItems : []})
	}


	render(){
		const {products, cartItems} = this.state;

		const appStyle = {
			wrapperDiv: {
				width: '100%'

			},
			leftComponentsStyle: {
				display: 'inline-block',
				width: '60%',
				margin: '0 0 0 15px',
				position: 'relative',
				top: '-50px'
			},
			resetDiv: {
				// width: '98px'
			},
			resetButtonStyle: {
				borderRadius:'15px',
				height: '30px',
				width: '200px',
				float: 'right',
				backgroundColor: "#E45DbF",
				color: '#fff',

				buttonSpan: {
					lineHeight:'32px',
					fontWeight:'200',
					textTransform: 'none',
					letterSpacing: '3px',
					fontSize: '12px',
					display: 'inherit'
				}
			}
		}

	  	return (
			<div style={appStyle.wrapperDiv}>
				<Banner />
				<div style={appStyle.leftComponentsStyle}>
					<div>
						<ProductList
							products={products}
							addToCart={this.addToCart}
							/>
					</div>
					<div style={appStyle.resetDiv}>
						<Button style={appStyle.resetButtonStyle} onClick={()=> this.clearCart()}>
							<span style={appStyle.resetButtonStyle.buttonSpan}>Reset Cart</span>
						</Button>
					</div>
				</div>

				<CartList
					cartItems={cartItems}
					removeItem={this.removeItem}
					updateQty={this.updateQty}
					clearCart={this.clearCart}
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
