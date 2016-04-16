import React, {Component} from 'react';

const Products = [
  {code: 'FR1', price: '$3.11', name: 'Fruit tea', promo: 'BOGO - Buy One Get One Free!'},
  {code: 'AP1', price: '$5.00', name: 'Apple', promo: 'Only $4.50 when buying 3 or more!'},
  {code: 'CF1', price: '$11.23', name: 'Coffee', promo: null}
];

class App extends Component {


	render(){

	  return (
		<div>
			<h1>hello</h1>
			<ProductList products={Products}/>

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
			<p>{product.name}</p>
		</li>
	)
}



export default App;
