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
				<Image
					loading="lazy"
					src={thumbnail.thumbnailDesktop}
				/>
			</ImageContainer>
		</NavElement>
	);
};

const SideBar = styled.div`
	width: 26.6rem;
	z-index: 1;
	background-color: ${props => props.theme.desktop.dark_extra};

	/* height: 61.3rem; */
	height: 100%;
	padding-right: 3.9rem;
	display: flex;
	flex-direction: column;
	@media (max-width: 843px) {
		margin-left: 0rem;
		width: 100%;
		height: 12rem;
		background-color: ${props => props.theme.desktop.dark_2};
	}
	@media (max-width: 480px) {
		height: 12.6rem;
	}
`;
const SideHeading = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Button', Arial, Serif;
	font-size: 1.6rem;
	padding-left: 6.4rem;
	margin-top: 3.7rem;
	text-align: left;
	height: 6.1rem;
	@media (min-width: 480px) and (max-width: 843px) {
		display: none;
	}
	@media (max-width: 480px) {
		font-family: 'Subheading', Arial, Serif;
		padding-left: 1.6rem;
		margin-top: 0.8rem;
		height: fit-content;
		font-size: 1.4rem;
	}
`;
const SideNavBar = styled.div`
	width: 100%;
	padding-top: 1.9rem;
	height: 100%;
	@media (max-width: 843px) {
		padding-top: 0rem;

		overflow-x: scroll;
		overscroll-behavior-inline: contain;
		white-space: nowrap;
		scroll-behavior: smooth;

		/*FireFox*/
		scrollbar-width: none;
		/*IE10+*/
		-ms-overflow-style: -ms-autohiding-scrollbar;

		&::-webkit-scrollbar {
			/*Chrome, Safari, Edge*/
			display: none;
			-webkit-appearance: none;
			width: 0;
			height: 0;
		}
	}
`;
const ImageList = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 6.4rem;
	height: 100%;
	row-gap: 0.8rem;
	@media (max-width: 843px) {
		flex-direction: row;

		width: fit-content;
		padding-left: 2.4rem;
		padding-right: 2.4rem;
		align-items: center;
		justify-content: flex-start;
		column-gap: 1.6rem;
		padding-top: 1.6rem;
		padding-bottom: 1.6rem;
	}
	@media (max-width: 480px) {
		column-gap: 0.8rem;
		padding-left: 1.6rem;
		padding-top: 0.6rem;
	}
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
	@media (max-width: 843px) {
		height: 8.8rem;
		width: 8.8rem;
		flex-grow: 0;
		&:hover > .hoverImage {
			margin-left: 0rem;
		}
	}
	@media (max-width: 480px) {
		height: 7.6rem;
		width: 7.6rem;
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
	@media (max-width: 843px) {
		display: none;
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
	@media (max-width: 843px) {
		height: 8.8rem;
		width: 8.8rem;
		&.activeImage {
			margin-left: 0rem;
		}
	}
	@media (max-width: 480px) {
		height: 7.6rem;
		width: 7.6rem;
	}
`;
const Image = styled.img`
	width: 10.7rem;
	max-width: 100%;
	height: 100%;
	object-fit: cover;
`;
