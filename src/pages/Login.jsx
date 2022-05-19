import React from 'react';
import '../styles/Login.scss';

const Login = () => {
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/search" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" placeholder="juan_alessandrini@hotmail.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Log in" className="primary-button login-button" />
					<a href="/">Forgot my password</a>
				</form>
				<a href="./signup"><button className="secondary-button signup-button">Sign up</button></a>
			</div>
		</div>
	);
}

export default Login;
