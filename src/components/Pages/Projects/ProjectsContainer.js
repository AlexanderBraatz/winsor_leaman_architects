import styled from 'styled-components';
import { Link, Outlet, useResolvedPath, useMatch } from 'react-router-dom';

const ProjectsContainer = children => {
	return (
		<StyledProjectsContainer>
			<Navbar>
				<StyledLinkList>
					<CustomLink to="/projects/extensions">Extensions</CustomLink>
					<CustomLink to="/projects/houses">Houses</CustomLink>
					<CustomLink to="/projects/renovation">Renovation</CustomLink>
					<CustomLink to="/projects/flats">Flats</CustomLink>
					<CustomLink to="/projects/leisure">Leisure</CustomLink>
					<CustomLink to="/projects/churches">Churches</CustomLink>
					<CustomLink to="/projects/view_all">View All</CustomLink>
				</StyledLinkList>
			</Navbar>
			<Outlet />
		</StyledProjectsContainer>
	);
};

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

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
	background-color: ${props => props.theme.desktop.dark1};
`;
const Navbar = styled.nav`
	padding: 1rem 6.4rem;
	height: 4.7rem;
	background-color: ${props => props.theme.desktop.dark1_2};
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
		background-color: ${props => props.theme.desktop.white};
	}
`;
const StyledLink = styled(Link)`
	color: ${props => props.theme.desktop.white};
	font-family: 'Button', Arial, Serif;
	text-decoration: none;
	font-size: 1.6rem;
	padding: 0 0.3rem;
`;

const Underline = styled.div`
	width: 100%;
	height: 0.15rem;
	background-color: transparent;
	transition: background-color 0.3s;
	&.active {
		background-color: ${props => props.theme.desktop.white};
	}
`;

export default ProjectsContainer;
