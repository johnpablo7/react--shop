import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';
import AppContext from '../context/AppContext';

const OrderItem = ({ item }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	};

	return (
		<div className="OrderItem">
			<figure>
				<img src={item.product.images[0]} alt={item.product.title} />
			</figure>
			<div>
				<p>{item.product.title}</p>
				<p className="quantity">Cantidad: {item.quantity}</p>
			</div>
			<p>${item.quantity * item.product.price}</p>
			<img
				src={close}
				alt="close"
				onClick={() => handleRemove(item.product)}
			/>
		</div>
	);
};

export default OrderItem;
