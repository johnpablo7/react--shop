import { useState } from 'react';

const initialState = {
	cart: []
};

const useinitialState = () => {
	const [ state, setState ] = useState(initialState);
	//Agregar al carrito los items sin repetirse

	const addToCart = (product) => {
		const existingItem = state.cart.find(
			(item) => item.product.id == product.id
		);

		if (existingItem) {
			const newCart = state.cart.map((item) => {
				if (item.product.id === product.id) {
					return { product, quantity: existingItem.quantity + 1 };
				} else {
					return item;
				}
			});
			setState({
				...state,
				cart: newCart
			});
		} else {
			setState({
				...state,
				cart: [ ...state.cart, { product, quantity: 1 } ]
			});
		}
	};

	const removeFromCart = (product) => {
		setState({
			...state,
			cart: state.cart.filter((item) => item.product.id !== product.id)
		});
	};

	return {
		state,
		addToCart,
		removeFromCart
	};
};

export default useinitialState;
