import React from 'react';
import CartItem from './CartItem.jsx';

function CartList (props) {
	const {cartItems} = props;

	return (

		<ul>
			{
				cartItems.map(item => {
					return <CartItem item={item} />
				})
			}
		</ul>
	)

}

export default CartList;
