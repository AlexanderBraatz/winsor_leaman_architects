import styled from 'styled-components';
import { Link, useResolvedPath, useMatch, useLocation } from 'react-router-dom';
import { ReactComponent as WLALogo } from '../../assets/images/LogoNew.svg';
import React, { useContext } from 'react';
import { ResponsiveContext } from '../../ResponsiveContext';

export default function NavbarComponent(props) {
	const location = useLocation();
	const path = location.pathname;
	const onProjects = /\/projects.+/.test(path);
	const { isTablet } = useContext(ResponsiveContext);

	return (
		<Navbar className={onProjects ? 'onProjects' : 'notOnProjects'}>
			<SiteTitle to="/projects">
				<StyledWLALogo />
				<LogoName>{`Winsor + Leaman ${isTablet ? '' : 'Architects'}`}</LogoName>
			</SiteTitle>
			<StyledLinkList>
				<CustomLink to="/projects">Projects</CustomLink>
				<CustomLink to="/about">About</CustomLink>
				<CustomLink to="/fees">Fees</CustomLink>
				<CustomLink to="/contact">Contact</CustomLink>
			</StyledLinkList>
		</Navbar>
	);
}

function CustomLink({ to, onProjects, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: false });

	return (
		<StyledCustomLink>
			<StyledLink
				className={` ${isActive ? 'active' : ''}`}
				to={to}
				{...props}
			>
				{children}
			</StyledLink>
			<Underline className={`underline ${isActive ? 'active' : ''}`} />
		</StyledCustomLink>
	);
}

const Navbar = styled.nav`
	height: 9.2rem;
	display: flex;
	justify-content: space-between;
	padding: 2rem 6.4rem;
	&.onProjects {
		background-color: ${props => props.theme.desktop.dark_3};
	}
	&.notOnProjects {
		background-color: ${props => props.theme.desktop.dark_1};
	}
	@media (max-width: 843px) {
		height: 8rem;
		padding: 2rem 2.4rem;
	}
`;

// Logo

const SiteTitle = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
	color: ${props => props.theme.desktop.grey_5};
	margin-right: 2rem;
	@media (max-width: 843px) {
	}
`;
const StyledWLALogo = styled(WLALogo)`
	width: 6.4rem;
	path {
		fill: ${props => props.theme.desktop.grey_5};
	}
`;

const LogoName = styled.h1`
	font-family: 'Jost', Arial, Serif;
	font-weight: 400;
	font-size: 2.8rem;
	margin-left: 1.6rem;
	@media (max-width: 1150px) {
		font-size: 2rem;
	}
	@media (max-width: 843px) {
		width: 16rem;
	}
`;

// Navbar links

const StyledLinkList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	width: 57.5rem;
	@media (max-width: 843px) {
		width: 48rem;
	}
`;
const StyledCustomLink = styled.li`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:hover > .underline {
		width: 100%;
	}
`;
const StyledLink = styled(Link)`
	font-family: 'Jost', Arial, Serif;
	font-weight: 500;

	font-size: 2.2rem;
	text-decoration: none;

	padding: 0 0.3rem;

	color: ${props => props.theme.desktop.grey_5};
	@media (max-width: 843px) {
		font-size: 2rem;
	}
	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const Underline = styled.div`
	width: 0%;
	height: 0.15rem;
	transition: width 0.3s;

	background-color: ${props => props.theme.desktop.grey_5};
	&.active {
		width: 100%;
	}
`;
