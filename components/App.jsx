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
			items: []
		}
	}

	render(){

		const {products} = this.state;

	  	return (
			<div>
				<h1>hello</h1>
				<ProductList products={products}/>

			</div>
	  )
	}
}

function ProductList(props) {
	const {products} = props;
	console.log('products', products);

	return (
		<div>
			<div>Products</div>
			<ul>
				{
					Products.map(product => {
						return (
							<Product product={product} key={product.code} />
						)
					})
				}
			</ul>
		</div>
	)
}

function Product (props) {
	const {product} = props;

	return (
		<li>
			<div>
				<button>+</button>
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



export default App;
