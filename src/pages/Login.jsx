import React, { useRef, useState } from 'react';
import { Router, Redirect } from 'react-router-dom';

import '../styles/Login.scss';

const Login = () => {

	const [loading, setLoading] = useState(false);
	const form = useRef(null);
	const handleSubmit = (event)=>{
		event.preventDefault();
		setLoading(true);
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		}
		console.log(data);
		const resultado = setTimeout(()=>{
			authenticated(true);
		}, 2000);
		
		
	};

	const authenticated = (value)=>{
		const red = new Redirect("./search");
		console.log('Redireccioando');
		setLoading(false);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="juan_alessandrini@hotmail.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button onClick={handleSubmit} className="primary-button login-button">Log In</button>
					<a href="/">Forgot my password</a>
				</form>
				{loading ? <a>Loading...</a> : <button className="secondary-button signup-button">Sign up</button>}
			</div>
		</div>
	);
}

export default Login;
