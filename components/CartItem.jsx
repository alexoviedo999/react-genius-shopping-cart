import React from 'react';

function CartItem (props) {
	const {item} = props
	const itemAmount = item.qty !== 0 ? item.amount / item.qty : 0;

	const cartStyle = {
		liStyle: {
			listStyleType: 'none'
		},
		divStyle: {
			display: 'inline-block',
			margin: '10px'
		}
	}


	return (
		<li style={cartStyle.liStyle}>
			
			<div style={cartStyle.divStyle}>

			</div>
			<div style={cartStyle.divStyle}>
				{item.code} - {item.name}
			</div>
			<div style={cartStyle.divStyle}>
				{item.qty}
			</div>
			<div style={cartStyle.divStyle}>
				{item.price} -- {itemAmount}
			</div>
		</li>


	)
}

export default CartItem;
