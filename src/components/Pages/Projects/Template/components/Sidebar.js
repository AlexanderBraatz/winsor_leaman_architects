import { Link, useResolvedPath, useMatch } from 'react-router-dom';

import styled from 'styled-components';

export default function Sidebar({ sideBarProps: { thumbnails } }) {
	return (
		<SideBar>
			<SideHeading>Similar projects</SideHeading>
			<SideNavBar>
				<ImageList>
					{thumbnails.map((thumbnail, index) => {
						return (
							<CustomNavElement
								key={index}
								thumbnail={thumbnail}
							/>
						);
					})}
				</ImageList>
			</SideNavBar>
		</SideBar>
	);
}

const CustomNavElement = ({ thumbnail }) => {
	const resolvedPath = useResolvedPath(thumbnail.to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<NavElement>
			<Line className={isActive ? 'activeLine' : ''} />
			<ImageContainer
				className={`hoverImage ${isActive ? 'activeImage' : ''}`}
				to={thumbnail.to}
			>
				<Image src={thumbnail.image} />
			</ImageContainer>
		</NavElement>
	);
};

const SideBar = styled.div`
	width: 22.7rem;
	padding-top: 3.7rem;
`;
const SideHeading = styled.p`
	color: ${props => props.theme.desktop.white};
	font-family: 'Button', Arial, Serif;
	font-size: 1.6rem;
	padding-left: 6.4rem;
	text-align: left;
`;
const SideNavBar = styled.div`
	width: 100%;
	padding-top: 1.9rem;
`;
const ImageList = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 6.4rem;
`;
const NavElement = styled.li`
	position: relative;
	width: 12.7rem;
	height: 10.7rem;
	display: flex;
	align-items: center;
	&:hover > .hoverImage {
		margin-left: 2rem;
	}
`;
const Line = styled.div`
	width: 0.15rem;
	height: 0rem;
	transition: height 0.2s;
	background-color: ${props => props.theme.desktop.white};
	&.activeLine {
		height: 8rem;
	}
`;
const ImageContainer = styled(Link)`
	width: 10.7rem;
	height: 10.7rem;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin-left: 0rem;
	transition: margin-left 0.25s;
	&.activeImage {
		margin-left: 2rem;
	}
`;
const Image = styled.img`
	width: 10.7rem;
	height: 10.7rem;
	max-width: 100%;
	max-height: 100%;
`;
