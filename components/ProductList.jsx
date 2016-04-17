import React from 'react';
import Products from '../Products.js';
import Product from './Product.jsx';

function ProductList(props) {
	const {products, addToCart} = props;

	const productListStyle = {
		divStyle: {
			display: 'inline-block',
			margin: '10px',
			width: '100%'
		},
		ulStyle: {
			paddingLeft: '0'
		},
		headerStyle: {
		  color:'#40b7e4',
		  fontWeight:'100',
		  marginLeft: '10px'
		}
	}

	return (
		<div style={productListStyle.divStyle}>
			<h2 style={productListStyle.headerStyle}>Available Products</h2>
			<ul style={productListStyle.ulStyle}>
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
