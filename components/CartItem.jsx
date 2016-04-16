import React from 'react';

function CartItem (props) {
	const {item} = props

	const cartStyle = {
		liStyle: {
			listStyleType: 'none'
		}
	}

	return (
		<li style={cartStyle.liStyle}>
			{item.name}
		</li>
	)
}

export default CartItem;
