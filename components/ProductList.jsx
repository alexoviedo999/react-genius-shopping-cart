import React from 'react';
import Products from '../Products.js';
import Product from './Product.jsx';

function ProductList(props) {
	const {products, addToCart} = props;

	const productListStyle = {
		divStyle: {
			display: 'inline-block',
			margin: '10px'
		}
	}

	return (
		<div style={productListStyle.divStyle}>
			<div>Available Products</div>
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
