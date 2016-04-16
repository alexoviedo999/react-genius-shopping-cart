import React from 'react';

function CartItem (props) {
	const {item} = props;

	return (
		<li>
			{item.name}
		</li>
	)
}

export default CartItem;
