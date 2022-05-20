import React, {useState, useContext} from 'react';
import '../styles/Header.scss';
import Menu from './Menu';
import AppContext from '../context/AppContext';
import MyOrder from '@containers/MyOrder';



const Header = () => {
	const [userToggle, setUserToggle] = useState(false);
	const [orderToggle, setOrderToggle] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = ()=>{
		setUserToggle(!userToggle);
	}

	return (
		<nav>
			<img src="./icons/icon_menu.svg" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/search?All">All</a>
					</li>
					<li>
						<a href="/search?Clothes">Clothes</a>
					</li>
					<li>
						<a href="/search?Elec">Electronics</a>
					</li>
					<li>
						<a href="/search?Fur">Furnitures</a>
					</li>
					<li>
						<a href="/search?Toys">Toys</a>
					</li>
					<li>
						<a href="/search?Other">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						nombre@dominio.com
						
					</li>
					<li onClick={()=>{setOrderToggle(!orderToggle)}} className="navbar-shopping-cart">
					
						<i className="material-icons" alt="shopping cart" >shopping_cart</i>
					
					{state.cart.length > 0 ?( <div>{state.cart.length}</div>) : null}
					</li>
				</ul>
			</div>
			{userToggle && <Menu/>}
			{orderToggle && <MyOrder/>}
			
		</nav>
	);
}

export default Header;
