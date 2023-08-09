import styled from 'styled-components';
import { Link, useResolvedPath, useMatch, useLocation } from 'react-router-dom';
import { ReactComponent as WLALogo } from '../../assets/images/WLALogoNew.svg';

export default function NavbarComponent(props) {
	const location = useLocation();
	const path = location.pathname;
	const onProjects = /\/projects.+/.test(path);

	return (
		<Navbar className={onProjects ? 'onProjects' : 'notOnProjects'}>
			<SiteTitle
				className={onProjects ? 'onProjects' : 'notOnProjects'}
				to="/projects"
			>
				<StyledWLALogo
					className={onProjects ? 'onProjects' : 'notOnProjects'}
				/>
				<LogoName>Winsor + Leaman Architects</LogoName>
			</SiteTitle>

			<StyledLinkList>
				<CustomLink
					onProjects={onProjects}
					to="/projects"
				>
					Projects
				</CustomLink>
				<CustomLink
					onProjects={onProjects}
					to="/about"
				>
					About
				</CustomLink>
				<CustomLink
					onProjects={onProjects}
					to="/fees"
				>
					Fees
				</CustomLink>
				<CustomLink
					onProjects={onProjects}
					to="/contact"
				>
					Contact
				</CustomLink>
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
				className={`${onProjects ? 'onProjects' : 'notOnProjects'} ${
					isActive ? 'active' : ''
				}`}
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
	&.onProjects {
		background-color: ${props => props.theme.desktop.dark2};
	}
	&.notOnProjects {
		background-color: ${props => props.theme.desktop.white};
	}
`;

// Logo

const SiteTitle = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 3rem;
	&.onProjects {
		color: ${props => props.theme.desktop.grey5};
	}
	&.notOnProjects {
		color: ${props => props.theme.desktop.dark1};
	}
`;
const StyledWLALogo = styled(WLALogo)`
	width: 6.4rem;
	&.onProjects {
		& path {
			fill: ${props => props.theme.desktop.grey5};
		}
	}
	&.notOnProjects {
		& path {
			fill: ${props => props.theme.desktop.dark1};
		}
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

	//centers the text vertically
	height: 100%;
	display: flex;
	align-items: center;
`;
const StyledLink = styled(Link)`
	/* color: ${props => props.theme.desktop.dark1}; */
	font-family: 'Button', Arial, Serif;
	font-size: 2.2rem;
	text-decoration: none;

	padding: 0 0.3rem;

	//maintains centering between active and inactive class being applied
	border-bottom: 0.2rem solid transparent;
	border-top: 0.2rem solid transparent;

	&.onProjects {
		color: ${props => props.theme.desktop.grey5};
		&.active {
			border-bottom: 0.2rem solid ${props => props.theme.desktop.grey5};
		}
	}
	&.notOnProjects {
		color: ${props => props.theme.desktop.dark1};
		&.active {
			border-bottom: 0.2rem solid ${props => props.theme.desktop.dark1};
		}
	}
`;
