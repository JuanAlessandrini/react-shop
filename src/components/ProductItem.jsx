import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals';
import React, { useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';


const ProductItem = ({product}) => {
	const  {addToCart} = useContext(AppContext);
	const handleClick = (item)=>{
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>{handleClick(product)}}>
					<i className="material-icons">add_shopping_cart</i>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
