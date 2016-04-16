import React from 'react';
import Products from '../Products.js';
import Product from './Product.jsx';

function ProductList(props) {
	const {products, addToCart} = props;

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


export default ProductList;
