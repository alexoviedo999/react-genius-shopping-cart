import React from 'react';

function CartItem (props) {
	const {item} = props

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

			</div>
			<div style={cartStyle.divStyle}>
				{item.price}
			</div>
		</li>


	)
}

export default CartItem;
