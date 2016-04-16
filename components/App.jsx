import React, {Component} from 'react';

const Products = [
  {code: 'FR1', price: '$3.11', name: 'Fruit tea', promo: 'BOGO - Buy One Get One Free!'},
  {code: 'AP1', price: '$5.00', name: 'Apple', promo: 'Only $4.50 when buying 3 or more!'},
  {code: 'CF1', price: '$11.23', name: 'Coffee', promo: null}
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: Product,
			cartItems: []
		}

		this.addToCart = this.addToCart.bind(this);
	}

	addToCart (item) {

		let {cartItems} = this.state;
		this.setState({cartItems : addToCart(cartItems, item)})
	}

// addToCart={this.addToCart}

	render(){
		const {products, cartItems} = this.state;

	  	return (
			<div>
				<h1>hello</h1>
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


function ProductList(props) {
	const {products, addToCart} = props;
	// const {products} = props;
	// console.log('products', products);

	return (
		<div>
			<div>Products</div>
			<ul>
				{
					Products.map(product => {
						return (
							<Product
								product={product}
								key={product.code}
								addToCart={addToCart}

								/>
						)
					})
				}
			</ul>
		</div>
	)
}

function Product (props) {
	const {product, addToCart} = props;

	return (
		<li>
			<div>
				<button onClick={()=> addToCart(product)}>+</button>
			</div>
			<div>
				<p>{product.name}</p>
				<p>{product.promo}</p>
			</div>
			<div>
				<p>{product.price}</p>
			</div>

		</li>
	)
}

function CartList (props) {
	const {cartItems} = props;

	return (

		<ul>
			{
				cartItems.map(item => {
					return <CartItem item={item} />
				})
			}
		</ul>
	)

}

function CartItem (props) {
	const {item} = props;

	return (
		<li>
			{item.name}
		</li>
	)
}



export default App;
