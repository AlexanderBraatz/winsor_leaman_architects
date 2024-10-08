//libraries
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import './assets/fonts/fonts.css';
//components
import ResponsiveNavbar from './components/Navbar/ResponsiveNavbar';
import Home from './components/Pages/Projects/Home';
import Fees from './components/Pages/Fees/Fees';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import StyleGuide from './components/Pages/StyleGuide/StyleGuide';
import ProjectsContainer from './components/Pages/Projects/ProjectsContainer';
import Extensions from './components/Pages/Projects/Extensions/Extensions';
import Houses from './components/Pages/Projects/Houses/Houses';
import Renovation from './components/Pages/Projects/Renovation/Renovation';
import Flats from './components/Pages/Projects/Flats/Flats';
import Churches from './components/Pages/Projects/Churches/Churches';
import Commercial from './components/Pages/Projects/Commercial/Commercial';

const App = () => {
	return (
		<Container>
			<StyledApp className="App">
				<ResponsiveNavbar />
				<BodyContainer>
					<Routes>
						<Route
							path=""
							element={<Home />}
						/>
						<Route
							path="/projects"
							element={<Home />}
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
							path="/projects"
							element={<ProjectsContainer />}
						>
							<Route
								path="extensions/:id?"
								element={<Extensions />}
							/>
							<Route
								path="houses/:id?"
								element={<Houses />}
							/>
							<Route
								path="renovation/:id?"
								element={<Renovation />}
							/>
							<Route
								path="flats/:id?"
								element={<Flats />}
							/>
							<Route
								path="churches/:id?"
								element={<Churches />}
							/>
							<Route
								path="commercial/:id?"
								element={<Commercial />}
							/>
						</Route>
					</Routes>
				</BodyContainer>
			</StyledApp>
		</Container>
	);
};

const Container = styled.div`
	/* width: 100vw; */
	width: 100%;
	overflow-x: hidden;
	background-color: black;
`;
const StyledApp = styled.div`
	background-color: ${props => props.theme.desktop.dark_1};
	/* width: 100vw; */
	width: 100%;
`;
const BodyContainer = styled.div`
	text-align: center;
`;
export default App;
