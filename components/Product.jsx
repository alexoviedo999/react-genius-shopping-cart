import React from 'react';

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

export default Product;
