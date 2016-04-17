import React from 'react';
import CartItem from './CartItem.jsx';
import { Appbar, Button, Container } from 'muicss/react';

function CartList (props) {
	const {cartItems, updateQty, removeItem, clearCart} = props;
	const total = cartItems.reduce( (prev, item) => prev + item.amount, 0);

	const cartListStyle = {
		wrapperStyle: {
			display: 'inline-block',
			width: '30%'
		},
		divStyle: {
			minWidth: '255px',
			marginLeft: '30px',
			height: '600px',
			backgroundColor: '#f4f4f4',
			top: '-150px',
			position: 'relative'
		},
		h4Style: {
			textAlign: 'center',
			color:'#40b7e4',
			fontWeight:'200',
		},
		resetDiv: {
			width: '250px',
			margin: '20px',
			left: '-330px',
			position: 'relative',
			bottom: '300px'
		},
		resetButtonStyle: {
			borderRadius:'15px',
			height: '30px',
			width: '200px',
			float: 'right',
			backgroundColor: "#E45DbF",
			color: '#fff',

			buttonSpan: {
				lineHeight:'32px',
				fontWeight:'200',
				textTransform: 'none',
				letterSpacing: '3px',
				fontSize: '12px',
				display: 'inherit'
			}
		},
		totalPriceCircleStyle: {
		    border: '10px solid #78be20',
		    opacity: '0.6',
		    borderRadius: '50%',
		    height: '100px',
		    width: '100px',
		    textAlign: 'center',
		    margin: '0 auto',
		    position: 'relative',
		    top: '50%'
		  }
	}

	return (
		<div style={cartListStyle.wrapperStyle}>

			<div style={cartListStyle.divStyle}>
				<h4 style={cartListStyle.h4Style}>Cart</h4>
				<ul>
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

				<div style={cartListStyle.totalPriceCircleStyle}>
					<h1>{total}</h1>
				</div>
			</div>
			<div style={cartListStyle.resetDiv}>
				<Button style={cartListStyle.resetButtonStyle} onClick={()=> clearCart()}>
					<span style={cartListStyle.resetButtonStyle.buttonSpan}>Reset Cart</span>
				</Button>
			</div>
		</div>
	)

}

export default CartList;
