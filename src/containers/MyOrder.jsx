import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext';


const MyOrder = () => {
	const { state } = useContext(AppContext); 
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title"><i  className='material-icons'>chevron_left</i> Mi carrito </p>
			</div>
			<div className="my-order-content">
				{ state.cart.map((producto)=><OrderItem product={producto} key={`orderItem-${producto.id}`} />)}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {state.cart.length > 0 ? state.cart.reduce((a,b)=> a + b.price, 0) : 0}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
