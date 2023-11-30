import styled from 'styled-components';
import { Link, useResolvedPath, useMatch, useLocation } from 'react-router-dom';
import { ReactComponent as WLALogo } from '../../assets/images/LogoNew.svg';

export default function NavbarComponent(props) {
	const location = useLocation();
	const path = location.pathname;
	const onProjects = /\/projects.+/.test(path);

	return (
		<Navbar className={onProjects ? 'onProjects' : 'notOnProjects'}>
			<SiteTitle to="/projects">
				<StyledWLALogo />
				<LogoName>Winsor + Leaman Architects</LogoName>
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
	height: 10.4rem;
	display: flex;
	justify-content: space-between;
	padding: 2rem 6.4rem;
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
	gap: 3rem;
	color: ${props => props.theme.desktop.grey_5};
`;
const StyledWLALogo = styled(WLALogo)`
	width: 6.4rem;
	path {
		fill: ${props => props.theme.desktop.grey_5};
	}
`;

const LogoName = styled.h1`
	font-family: 'Logo', Arial, Serif;
	font-size: 2.8rem;
`;

// Navbar links

const StyledLinkList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	width: 57.5rem;
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
	font-family: 'Button', Arial, Serif;
	font-size: 2.2rem;
	text-decoration: none;

	padding: 0 0.3rem;

	color: ${props => props.theme.desktop.grey_5};
`;
const Underline = styled.div`
	width: 0%;
	height: 0.2rem;
	transition: width 0.3s;

	background-color: ${props => props.theme.desktop.grey_5};
	&.active {
		width: 100%;
	}
`;
