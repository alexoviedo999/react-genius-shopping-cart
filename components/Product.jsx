import React from 'react';

function Product (props) {
	const {product, addToCart} = props;

	const productStyle = {
		liStyle: {
			listStyleType: 'none'
		},
		divStyle: {
			display: 'inline-block',
			margin: '10px'
		}
	}

	return (
		<li style={productStyle.liStyle}>
			<div style={productStyle.divStyle}>
				<button onClick={()=> addToCart(product)}>+</button>
			</div>
			<div style={productStyle.divStyle}>
				<p>{product.name}</p>
				<span>{product.promo}</span>
			</div>
			<div style={productStyle.divStyle}>
				<p>{product.price}</p>
			</div>

		</li>
	)
}

export default Product;
