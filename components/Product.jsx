import React from 'react';
import { Appbar, Button, Container } from 'muicss/react';

function Product (props) {
	const {product, addToCart} = props;

	const productStyle = {
		liStyle: {
			listStyleType: 'none'
		},
		divStyle: {
			display: 'inline-block',
			margin: '10px'
		},
		addButton: {
			backgroundColor: '#78BE20',
			color: '#fff',
			fontSize: '22px',
			width:'30px',
			height:'30px',
			position: 'relative',

			spanStyle: {
				position: 'absolute',
				top: '-5px',
				left: '10px'
			}
		}
	}

	return (
		<li style={productStyle.liStyle}>
			<div style={productStyle.divStyle}>
				<Button style={productStyle.addButton} variant="fab" size="small" onClick={()=> addToCart(product)}>
					<span style={productStyle.addButton.spanStyle}>+</span>
					</Button>
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
