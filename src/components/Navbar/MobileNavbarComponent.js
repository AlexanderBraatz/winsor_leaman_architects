import styled from 'styled-components';
import React, { useState } from 'react';
import { Link, useResolvedPath, useMatch, useLocation } from 'react-router-dom';
import { ReactComponent as WLALogo } from '../../assets/images/LogoNew.svg';
import { ReactComponent as HamburgerMenu } from '../../assets/images/HamburgerMenu.svg';
import { ReactComponent as HamburgerExit } from '../../assets/images/HamburgerExit.svg';

export default function MobileNavbarComponent(props) {
	const location = useLocation();
	const path = location.pathname;
	const onProjects = /\/projects.+/.test(path);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
	const [isMenuHidden, setMenuHidden] = useState(true);

	const handleClickForMenu = () => {
		if (isMenuOpen) {
			setTimeout(() => {
				setMenuHidden(true);
			}, 400);
		} else {
			setMenuHidden(false);
		}
		setTimeout(() => {
			setIsMenuOpen(prevDropdown => !prevDropdown);
		}, 1);

		setTimeout(() => {
			setIsProjectsMenuOpen(false);
		}, 400);
	};
	const handleClickForProjectsMenu = () => {
		setIsProjectsMenuOpen(prevProjectsDropdown => !prevProjectsDropdown);
	};

	return (
		<>
			<Navbar className={onProjects ? 'onProjects' : 'notOnProjects'}>
				<SiteTitle to="/projects">
					<StyledWLALogo />
					<LogoName>Winsor + Leaman</LogoName>
				</SiteTitle>
				<DropdownToggle onClick={() => handleClickForMenu()}>
					{isMenuOpen ? <StyledHamburgerExit /> : <StyledHamburgerMenu />}
				</DropdownToggle>
			</Navbar>
			<DropdownMenu
				isMenuOpen={isMenuOpen}
				isMenuHidden={isMenuHidden}
			>
				<StyledLinkList>
					<CustomLink
						to="/projects"
						onClick={() => handleClickForProjectsMenu()}
					>
						Projects
					</CustomLink>
					{!isProjectsMenuOpen ? (
						<></>
					) : (
						<ProjectsMenu>
							<CustomLink
								to="/projects/houses/1"
								onClick={() => handleClickForMenu()}
							>
								Houses
							</CustomLink>
							<CustomLink
								to="/projects/extensions/1"
								onClick={() => handleClickForMenu()}
							>
								Extensions
							</CustomLink>
							<CustomLink
								to="/projects/flats/1"
								onClick={() => handleClickForMenu()}
							>
								Flats
							</CustomLink>
							<CustomLink
								to="/projects/renovation/1"
								onClick={() => handleClickForMenu()}
							>
								Renovation
							</CustomLink>
							<CustomLink
								to="/projects/churches/1"
								onClick={() => handleClickForMenu()}
							>
								Churches
							</CustomLink>
							<CustomLink
								to="/projects/commercial/1"
								onClick={() => handleClickForMenu()}
							>
								Commercial
							</CustomLink>
						</ProjectsMenu>
					)}
					<CustomLink
						to="/about"
						onClick={() => handleClickForMenu()}
					>
						About
					</CustomLink>
					<CustomLink
						to="/fees"
						onClick={() => handleClickForMenu()}
					>
						Fees
					</CustomLink>
					<CustomLink
						to="/contact"
						onClick={() => handleClickForMenu()}
					>
						Contact
					</CustomLink>
				</StyledLinkList>
			</DropdownMenu>
		</>
	);
}

function DropdownMenu({ isMenuOpen, isMenuHidden, children, ...props }) {
	return (
		<StyledDropdownMenu
			className={` ${isMenuOpen ? 'isMenuOpen' : ''} ${
				isMenuHidden ? 'isMenuHidden' : ''
			}`}
		>
			{children}
		</StyledDropdownMenu>
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
		</StyledCustomLink>
	);
}

const Navbar = styled.nav`
	height: 6.4rem;
	display: flex;
	justify-content: space-between;
	padding-left: 1.6rem;
	padding-right: 1.6rem;
	&.onProjects {
		background-color: ${props => props.theme.desktop.dark_3};
	}
	&.notOnProjects {
		background-color: ${props => props.theme.desktop.dark_1};
	}
`;

// Logo

const SiteTitle = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 1.4rem;
	color: ${props => props.theme.desktop.grey_5};
`;
const StyledWLALogo = styled(WLALogo)`
	width: 5.6rem;
	path {
		fill: ${props => props.theme.desktop.grey_5};
	}
`;

const LogoName = styled.h1`
	font-family: 'Logo', Arial, Serif;
	font-size: 1.8rem;
`;

const DropdownToggle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.4rem;
	height: 6.4rem;
`;

const StyledHamburgerMenu = styled(HamburgerMenu)`
	width: 6.4rem;
	height: 6.4rem;
`;

const StyledHamburgerExit = styled(HamburgerExit)`
	width: 6.4rem;
	height: 6.4rem;
`;
// Navbar links

const StyledDropdownMenu = styled.div`
	/* width: 100vw; */
	width: 100%;
	min-height: calc(100vh - 6.3rem);
	background-color: ${props => props.theme.desktop.dark_1};
	position: absolute;
	top: 6.3rem;
	z-index: 4;
	left: 100vw;
	transition: left 0.15s ease-in-out;
	display: block;
	&.isMenuOpen {
		left: 0vw;
	}
	&.isMenuHidden {
		display: none;
	}
`;
const StyledLinkList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: top;
	/* width: 100vw; */
	width: 100%;
	padding-top: 1.6rem;
	padding-left: 2.4rem;
`;

const ProjectsMenu = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: top;
	/* width: 100vw; */
	width: 100%;

	margin-left: 3.2rem;
`;
const StyledCustomLink = styled.li`
	width: fit-content;
	height: 5.6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const StyledLink = styled(Link)`
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-decoration: none;
	font-weight: 500;
	color: ${props => props.theme.desktop.grey_5};
`;
