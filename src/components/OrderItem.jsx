import React, {useState} from 'react';
import '../styles/OrderItem.scss';

const OrderItem = ({product}) => {
	const [cart, setCart] = useState('');

	const handleClick = ()=>{
		setCart('Anulado')
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}</p>
			<i onClick={handleClick} className='material-icons' alt="close">close</i>
			{cart}
		</div>
	);
}

export default OrderItem;
