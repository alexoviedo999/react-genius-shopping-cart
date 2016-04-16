import React from 'react';
import CartItem from './CartItem.jsx';

function CartList (props) {
	const {cartItems} = props;

	const cartListStyle = {
		divStyle: {
			display: 'inline-block',
			margin: '10px'
		}
	}

	return (
		<div style={cartListStyle.divStyle}>			
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
