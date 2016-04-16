import React from 'react';
import CartItem from './CartItem.jsx';

function CartList (props) {
	const {cartItems} = props;

	const cartListStyle = {
		divStyle: {
			display: 'inline-block',
			margin: '10px',
			width: '300px'
		},
		h4Style: {
			textAlign: 'center'
		}
	}

	return (
		<div style={cartListStyle.divStyle}>
			<h4 style={cartListStyle.h4Style}>Cart</h4>
			<ul>
				{
					cartItems.map(item => {
						return <CartItem item={item} />
					})
				}
			</ul>
		</div>
	)

}

export default CartList;
