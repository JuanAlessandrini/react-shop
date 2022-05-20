import React, {useContext} from 'react';
import '../styles/Order.scss';
import AppContext from '../context/AppContext';


const Order = () => {
	const { state } = useContext(AppContext);
	return (
		<div className="Order">
			<p>
				<span></span>
				<span>{state.cart.lenght} articles</span>
			</p>
			{state.cart.map((product)=> (<div>
				<p>$560.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />

			</div>) )}
			
		</div>
	);
}

export default Order;
