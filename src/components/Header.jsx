import React from 'react';
import '../styles/Header.scss';

const Header = () => {
	return (
		<nav>
			<img src="./icons/icon_menu.svg" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<a className='account_link' href="./account"><li className="navbar-email">nombre@dominio.com</li></a>
					<li className="navbar-shopping-cart">
					<a href="./checkout" ><i className="material-icons" alt="shopping cart" >shopping_cart</i></a>
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
