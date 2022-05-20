import React, {useState, useContext} from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';



const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	const [cart, setCart] = useState(product);
	
	const handleClick = (index)=>{
		removeFromCart(index);
		
	}


	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}</p>
			<i onClick={()=>{handleClick(product.id)}} className='material-icons' alt="close">close</i>
			
		</div>
	);
}

export default OrderItem;
