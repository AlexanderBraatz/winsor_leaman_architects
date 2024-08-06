import styled from 'styled-components';
import React, { useContext } from 'react';
import { ResponsiveContext } from '../../../ResponsiveContext';
import { Link, Outlet, useResolvedPath, useMatch } from 'react-router-dom';

const ProjectsContainer = () => {
	const { isMobile } = useContext(ResponsiveContext);
	return (
		<StyledProjectsContainer>
			{isMobile ? (
				<></>
			) : (
				<Navbar>
					<StyledLinkList>
						<CustomLink to="/projects/houses/1">Houses</CustomLink>
						<CustomLink to="/projects/extensions/1">Extensions</CustomLink>
						<CustomLink to="/projects/flats/1">Flats</CustomLink>
						<CustomLink to="/projects/renovation/1">Renovation</CustomLink>
						<CustomLink to="/projects/churches/1">Churches</CustomLink>
						<CustomLink to="/projects/commercial/1">Commercial</CustomLink>
					</StyledLinkList>
				</Navbar>
			)}
			<Outlet />
		</StyledProjectsContainer>
	);
};

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const basePath = resolvedPath.pathname.replace(/\/1$/, '');
	const isActive = useMatch({ path: basePath, end: false });

	return (
		<StyledCustomLink>
			<StyledLink
				to={to}
				{...props}
			>
				{children}
			</StyledLink>
			<Underline className={`underline ${isActive ? 'active' : ''}`} />
		</StyledCustomLink>
	);
}
const StyledProjectsContainer = styled.div`
	background-color: ${props => props.theme.desktop.dark_1};
`;
const Navbar = styled.nav`
	padding: 1rem 6.4rem;
	height: 4.7rem;
	background-color: ${props => props.theme.desktop.dark_2};
	@media (max-width: 843px) {
		padding: 1rem 2.4rem;
	}
	@media (max-width: 602px) {
		padding: 1rem 2.4rem;
	}
`;

const StyledLinkList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const StyledCustomLink = styled.li`
	padding-top: 0.15rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover > .underline {
		width: 100%;
	}
`;
const StyledLink = styled(Link)`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Button', Arial, Serif;
	text-decoration: none;
	font-size: 1.6rem;
	padding: 0 0.3rem;
`;

const Underline = styled.div`
	width: 0%;
	height: 0.15rem;
	background-color: ${props => props.theme.desktop.grey_5};
	transition: width 0.3s;
	&.active {
		width: 100%;
	}
`;

export default ProjectsContainer;
