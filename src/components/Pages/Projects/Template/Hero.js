import React from 'react';

import TSidebar from './components/TSidebar.js';

import { ReactComponent as InfoIcon } from '../../../../assets/images/ProjectHero/Info-2.svg';

import styled from 'styled-components';
export default function Hero({
	heroProps: { sideBarProps, heroImage, imageLabel }
}) {
	return (
		<StyledHero>
			<TSidebar sideBarProps={sideBarProps} />
			<HeroImageContainer>
				<HeroImage
					src={heroImage.heroImage}
					alt={heroImage.alt}
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
	width: 153.6rem;
	height: 61.5rem;
	display: flex;
	margin: auto;
`;

const HeroImageContainer = styled.div`
	width: 130.9rem;
	height: 61.5rem;
	position: relative;
`;
const HeroImage = styled.img`
	width: 130.9rem;
	height: 61.5rem;
`;
const ImageLabel = styled.div`
	background-color: ${props => props.theme.desktop.secondary1};
	width: 32.9rem;
	height: 5.6rem;
	position: absolute;
	left: 0rem;
	bottom: 0rem;
	display: flex;
	align-items: center;
	padding: 0.8rem 1.6rem;
`;
const LabelText = styled.p`
	color: ${props => props.theme.desktop.grey5};
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
