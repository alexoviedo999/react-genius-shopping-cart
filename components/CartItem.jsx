import React from 'react';
import {formatMoney} from '../format';

function CartItem (props) {
	const {item, removeItem} = props
	const itemAmount = item.qty !== 0 ? item.amount / item.qty : 0;

	const cartStyle = {
		liStyle: {
			listStyleType: 'none'
		},
		divStyle: {
			display: 'inline-block',
			margin: '10px'
		},
		trashStyle: {
			fontSize: '16px'
		},
		itemNameStyle: {
			display: 'inline-block',
			margin: '10px 10px 10px 0',
			fontWeight: '500',
			minWidth: '100px'
		},
		itemPriceStyle: {
			display: 'inline-block',
			margin: '10px',
			color: '#bad739',
			fontWeight: '500'
		},
		qtyStyle: {
		    borderBottom:'dashed 1px lightgray',
			textAlign: 'center',
			display: 'inline-block',
			margin: '10px',
			width: '25px'
		  }

	}


	return (
		<li style={cartStyle.liStyle}>

			<div style={cartStyle.divStyle} onClick={()=> removeItem(item.code)}>

			<i className="fa fa-trash-o" style={cartStyle.trashStyle}></i>
			</div>
			<div style={cartStyle.itemNameStyle}>
				{item.code} - {item.name}
			</div>
			<div style={cartStyle.qtyStyle}>
				{item.qty}
			</div>
			<div style={cartStyle.itemPriceStyle}>
				{formatMoney(itemAmount)}
			</div>
		</li>


	)
}

export default CartItem;
