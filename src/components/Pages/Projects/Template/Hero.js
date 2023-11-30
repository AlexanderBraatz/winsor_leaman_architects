import React from 'react';
import Sidebar from './components/Sidebar.js';
import { ReactComponent as InfoIcon } from '../../../../assets/images/ProjectHero/Info-2.svg';
import styled from 'styled-components';

export default function Hero({
	sideBarProps,
	showcaseProps: { hero, imageLabel },
	id
}) {
	return (
		<StyledHero>
			<Sidebar
				sideBarProps={sideBarProps}
				id={id}
			/>
			<HeroImageContainer>
				<HeroImage
					src={hero.heroImage}
					sizes
					srcset={`${hero.heroImageMobile} 1200w,${hero.heroImageTablet} 1366w,${hero.heroImageDesktop} 2400w`}
					// 					srcset="
					//     https://placehold.co/800x200/png   800w,
					//     https://placehold.co/1600x400/png 1600w,
					//     https://placehold.co/3200x800/png 3200w
					//   "
					alt={hero.alt}
				/>
				<ImageLabel>
					<LabelText>{imageLabel}</LabelText>
					<LabelIcon />
				</ImageLabel>
			</HeroImageContainer>
		</StyledHero>
	);
}

const StyledHero = styled.div`
	/* max-width: 153.6rem; */
	width: 100vw;
	/* height: 61.3rem; */
	height: calc(
		100vh - 4.7rem - 10.4rem
	); // accounting for the ProjectsNavBar and PageNavbar
	display: flex;
	margin: auto;
	justify-content: left;
`;

const HeroImageContainer = styled.div`
	/* max-width: 130.9rem; */
	height: 100%;
	position: relative;
	margin-left: 3.9rem;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const HeroImage = styled.img`
	max-width: 100%;
	min-height: 100%;
	max-height: auto;
	object-fit: cover;
	object-position: center;
`;
const ImageLabel = styled.div`
	background-color: ${props => props.theme.desktop.dark_3};
	width: fit-content;
	height: 5.6rem;
	position: absolute;
	left: 0rem;
	bottom: 0rem;
	display: flex;
	align-items: center;
	padding: 0.8rem 1.6rem;
`;
const LabelText = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	text-align: right;
	font-family: 'SubHeading', Arial, Serif;
	font-size: 2.8rem;
	line-height: 4rem;
	margin-right: 2rem;
`;
const LabelIcon = styled(InfoIcon)`
	width: 3.6rem;
	height: 3.6rem;
`;
