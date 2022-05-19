import React from 'react';
import FullGradient from '../containers/FullGradient';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<FullGradient>
			<div></div>
			<div className="CreateAccount">
				<div className="CreateAccount-container">
					<h1 className="title">Mi cuenta</h1>
					<form action="/" className="form">
						<div>
							<label for="name" className="label">Name</label>
							<input type="text" id="name" placeholder="James" className="input input-name" />
							<label for="email" className="label">Email</label>
							<input type="text" id="email" placeholder="mail@example.com" className="input input-email" />
							<label for="password" className="label">Password</label>
							<input type="password" id="password" placeholder="*********" className="input input-password" />
						</div>
						<input type="submit" value="Create" className="primary-button login-button" />
					</form>
				</div>
			</div>
		</FullGradient>
		
	);
}

export default CreateAccount;
