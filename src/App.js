import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import BlogLogo from './app/assets/img/logo.png';
import './App.css';

function App() {
	return (
		<div className="App">
		<Navbar dark color='primary' sticky='top' expand='md'>
				<Container>
						<NavbarBrand href='/'>
							<img src={BlogLogo} alt='blog logo' />
						</NavbarBrand>
					</Container>
				</Navbar>
				I'm ready to build!
		</div>
	);
}

export default App;
