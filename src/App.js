//libraries
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import './assets/fonts/fonts.css';
//components
import NavbarComponent from './components/Navbar/NavbarComponent';
import Projects from './components/Pages/Projects/Projects';
import Fees from './components/Pages/Fees/Fees';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import StyleGuide from './components/Pages/StyleGuide/StyleGuide';
import Extensions from './components/Pages/Projects/Extensions/Extensions';
import Houses from './components/Pages/Projects/Houses/Houses';
import Renovation from './components/Pages/Projects/Renovation/Renovation';
import Flats from './components/Pages/Projects/Flats/Flats';
import Leisure from './components/Pages/Projects/Leisure/Leisure';
import Churches from './components/Pages/Projects/Churches/Churches';
import ViewAll from './components/Pages/Projects/ViewAll/ViewAll';

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
					<Route
						path="/styleGuide"
						element={<StyleGuide />}
					/>
					<Route
						path="/projects/extensions"
						element={<Extensions />}
					/>
					<Route
						path="/projects/houses"
						element={<Houses />}
					/>
					<Route
						path="/projects/renovation"
						element={<Renovation />}
					/>
					<Route
						path="/projects/flats"
						element={<Flats />}
					/>
					<Route
						path="/projects/leisure"
						element={<Leisure />}
					/>
					<Route
						path="/projects/churches"
						element={<Churches />}
					/>
					<Route
						path="/projects/view_all"
						element={<ViewAll />}
					/>
				</Routes>
			</Container>
		</div>
	);
};

const Container = styled.div`
	margin: 1rem 0;
	text-align: center;
`;
export default App;
