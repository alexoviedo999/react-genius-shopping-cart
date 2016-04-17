import React from 'react';
import { Appbar, Button, Container } from 'muicss/react';
import {formatMoney} from '../format';

function Product (props) {
	const {product, addToCart} = props;
	const productStyle = {
		liStyle: {
			listStyleType: 'none'
		},
		divStyle: {
			display: 'inline-block',
			fontSize: '14px',
			fontWeight: '500',
			paddingRight: '5px',
			paddingLeft: '5px',
			position: 'relative'
		},
		nameStyle: {
			display: 'inline-block',
			margin: '10px',
			fontSize: '14px',
			fontWeight: '500',
			paddingRight: '5px',
			paddingLeft: '5px',
			position: 'relative',
			minWidth: '200px',
			marginLeft: '0'
		},
		buttonStyle: {
			display: 'inline-block',
			fontSize: '14px',
			fontWeight: '500',
			paddingRight: '5px',
			paddingLeft: '5px',
			position: 'relative',
			top: '-3px'
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
		},
		promoStyle: {
			position: 'absolute',
			top: '22px',
			left: '5px',
			color: '#cc0000',
			position: 'absolute',
			fontSize: '12px',
		},
		itemNameStyle: {
			fontSize: '18px'
		},
		priceStyle: {
			display: 'inline-block',
			margin: '10px',
			fontSize: '14px',
			fontWeight: '500',
			paddingRight: '5px',
			paddingLeft: '5px',
			position: 'relative',
			float: 'right'
		}
	}

	return (
		<li style={productStyle.liStyle}>
			<div style={productStyle.buttonStyle}>
				<Button style={productStyle.addButton} variant="fab" size="small" onClick={()=> addToCart(product)}>
					<span style={productStyle.addButton.spanStyle}>+</span>
				</Button>
			</div>
			<div style={productStyle.nameStyle}>
				<p style={productStyle.itemNameStyle}>{product.code} - {product.name}</p>
				<span style={productStyle.promoStyle}>{product.promo}</span>
			</div>
			<div style={productStyle.priceStyle}>
				<p style={productStyle.itemNameStyle}>{formatMoney(product.price(1))}</p>
			</div>

		</li>
	)
}

export default Product;
