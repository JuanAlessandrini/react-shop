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
			<div className='contentImage'>
				<img src={product.images[0]} alt="" />
				<div className='overlay'>
					{product.description}
				</div>
			</div>
			<div className="product-info">
				<div>
					<p className='price'>$ {product.price}</p>
					<p>{product.title}</p>
					<p className={`chip chip-cat-${product.category.id}`}>{product.category.name}</p>
				</div>
				<figure onClick={()=>{handleClick(product)}}>
					<i className="material-icons">add_shopping_cart</i>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
