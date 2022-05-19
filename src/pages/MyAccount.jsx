import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<div class="avatar">
					<img src="https://media-exp1.licdn.com/dms/image/C4D03AQFT8DvHlzetNA/profile-displayphoto-shrink_400_400/0/1565003114016?e=1658361600&v=beta&t=Lwo5UkUv0gZqgth_fH74m32bQhnJPakvIiepL8mwDJU"/>
				</div>
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<p className="value">Juan Alessandrini</p>
						<label for="email" className="label">Email</label>
						<p className="value">juan_alessandrini@hotmail.com</p>
						<label for="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
