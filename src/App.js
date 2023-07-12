import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './Navbar/NavbarComponent';
import Projects from './Pages/Projects/Projects';
import Fees from './Pages/Fees/Fees';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

const App = () => {
	return (
		<div className="App">
			<NavbarComponent />

			<Container>
				<Routes>
					<Route
						path="/"
						element={<Projects />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/fees"
						element={<Fees />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Routes>
			</Container>
		</div>
	);
};

const Container = styled.div`
	margin: 1rem;
	text-align: center;
`;

export default App;
