import React from 'react';
import FullGradient from '../containers/FullGradient';
import Login from './Login';
import WelcomeMessage from '../components/WelcomeMessage';

const Home = () => {
	return (
		<FullGradient  >
			<WelcomeMessage/>
			<Login/>
		</FullGradient>
	);
}

export default Home;
