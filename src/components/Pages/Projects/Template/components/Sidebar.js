import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function Sidebar({ sideBarProps: { thumbnails }, id }) {
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
								id={id}
							/>
						);
					})}
				</ImageList>
			</SideNavBar>
		</SideBar>
	);
}

const CustomNavElement = ({ thumbnail, id }) => {
	const isActive = thumbnail.to.charAt(thumbnail.to.length - 1) === id;

	return (
		<NavElement>
			<Line className={isActive ? 'activeLine' : ''} />
			<ImageContainer
				className={`hoverImage ${isActive ? 'activeImage' : ''}`}
				to={thumbnail.to}
			>
				<Image src={thumbnail.thumbnailDesktop} />
			</ImageContainer>
		</NavElement>
	);
};

const SideBar = styled.div`
	width: 22.7rem;

	/* height: 61.3rem; */
	height: 100%;

	display: flex;
	flex-direction: column;
`;
const SideHeading = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Button', Arial, Serif;
	font-size: 1.6rem;
	padding-left: 6.4rem;
	margin-top: 3.7rem;
	text-align: left;
	height: 6.1rem;
`;
const SideNavBar = styled.div`
	width: 100%;
	padding-top: 1.9rem;
	height: 100%;
`;
const ImageList = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 6.4rem;
	height: 100%;
	row-gap: 0.8rem;
`;
const NavElement = styled.li`
	flex-grow: 1;

	position: relative;
	width: 12.7rem;
	max-height: 10.7rem;
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
	background-color: ${props => props.theme.desktop.grey_5};
	&.activeLine {
		height: 70%;
	}
`;
const ImageContainer = styled(Link)`
	width: 10.7rem;
	height: 100%;
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
	max-width: 100%;
	height: 100%;
	object-fit: cover;
`;
