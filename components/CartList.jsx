import React from 'react';
import CartItem from './CartItem.jsx';
import { Appbar, Button, Container } from 'muicss/react';
import {formatMoney} from '../format';

function CartList (props) {
	const {cartItems, updateQty, removeItem, clearCart} = props;
	const total = cartItems.reduce( (prev, item) => prev + item.amount, 0);

	const cartListStyle = {

		divStyle: {
			display: 'inline-block',
			width: '28%',
			minWidth: '255px',
			marginLeft: '30px',
			height: '600px',
			backgroundColor: '#f4f4f4',
			marginTop: '30px'
		},
		h4Style: {
			textAlign: 'center',
			color:'#40b7e4',
			fontWeight:'200',
		},
		totalPriceCircleStyle: {
		    border: '10px solid #78be20',
		    opacity: '0.6',
		    borderRadius: '50%',
		    height: '140px',
		    width: '140px',
		    textAlign: 'center',
		    margin: '0 auto',
		    position: 'relative',
		    top: '30%'
		},
		totalPriceStyle: {
		    fontSize: '32px',
		    color: '#78be20',
		    position: 'relative',
		    top: '50%',
		    transform: 'translateY(-50%)',
			marginTop: '0px'
		},
		ulWrapperStyle: {
			height: '200px',
			position: 'relative'
		},
		ulStyle: {
			paddingLeft: '0'
		}
	}

	return (


			<div style={cartListStyle.divStyle}>
				<h4 style={cartListStyle.h4Style}>Cart</h4>
				<div style={cartListStyle.ulWrapperStyle}>
					<ul style={cartListStyle.ulStyle}>
						{
							cartItems.map((item, index) => {
								return <CartItem
									item={item}
									key={item.code + index}
									updateQty={updateQty}
									removeItem={removeItem}
									clearCart={clearCart} />
							})
						}
					</ul>
				</div>

				<div style={cartListStyle.totalPriceCircleStyle}>
					<h1 style={cartListStyle.totalPriceStyle}>{formatMoney(total)}</h1>
				</div>
			</div>

	)

}

export default CartList;
