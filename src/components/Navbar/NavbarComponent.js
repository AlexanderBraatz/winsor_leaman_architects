import styled from 'styled-components';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

export default function NavbarComponent(props) {
	return (
		<Navbar>
			<SiteTitle to="/">
				<LogoIcon />
				<LogoName>Winsor + Leaman Architects</LogoName>
			</SiteTitle>

			<StyledLinkList>
				<CustomLink to="/">Projects</CustomLink>
				<CustomLink to="/about">About</CustomLink>
				<CustomLink to="/fees">Fees</CustomLink>
				<CustomLink to="/contact">Contact</CustomLink>
			</StyledLinkList>
		</Navbar>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<StyledCustomLink>
			<StyledLink
				className={isActive ? 'active' : ''}
				to={to}
				{...props}
			>
				{children}
			</StyledLink>
		</StyledCustomLink>
	);
}

const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 2rem 6.4rem;
`;

// Logo

const SiteTitle = styled(Link)`
	color: ${props => props.theme.desktop.dark1};
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 3rem;
`;
const LogoIcon = styled.div`
	height: 64px;
	width: 64px;
	background-color: grey;
`;

const LogoName = styled.h1`
	font-family: 'Logo';
	font-size: 28px;
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

	//centers the text vertically
	height: 100%;
	display: flex;
	align-items: center;
`;
const StyledLink = styled(Link)`
	color: ${props => props.theme.desktop.dark1};
	font-family: 'Button', Arial, Serif;
	font-size: 22px;
	text-decoration: none;

	padding: 0 0.3rem;

	//maintains centering between active and inactive class being applied
	border-bottom: 0.2rem solid transparent;
	border-top: 0.2rem solid transparent;

	&.active {
		border-bottom: 0.2rem solid ${props => props.theme.desktop.dark1};
	}
`;
