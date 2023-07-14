import styled from 'styled-components';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

export default function NavbarComponent() {
	return (
		<Navbar>
			<SiteTitle to="/">
				<Logo />
				<CompanyName>Winsor + Leaman Architects</CompanyName>
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
		<li>
			<StyledLink
				className={isActive ? 'active' : ''}
				to={to}
				{...props}
			>
				{children}
			</StyledLink>
		</li>
	);
}

const Navbar = styled.nav`
	background-color: #333;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	gap: 2rem;
	padding: 0 1rem;
`;

const SiteTitle = styled(Link)`
	color: inherit;
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const Logo = styled.div`
	height: 64px;
	width: 64px;
	background-color: grey;
`;

const CompanyName = styled.h1`
	font-size: 1.4rem;
	font-family: 'test';
	font-size: 4rem;
	font-family: 'Logo';
	font-size: 28px;
`;

const StyledLinkList = styled.ul`
	list-style: none;
	display: flex;
	gap: 1rem;
`;
const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0.25rem;
	background-color: #777;
	&.active {
		background-color: ${props => props.theme.desktop.grey1};
	}
	font-family: 'Button';
	font-size: 22px;
`;
