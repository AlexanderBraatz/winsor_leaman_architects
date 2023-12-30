import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

import housesHome_desktop from '../../../assets/images/ProjectCategories/Houses_7/1MalboroughHouse/HeroImages/Hero_desktop.jpg';
import extensionsHome_desktop from '../../../assets/images/ProjectCategories/Extensions_8/1HouseinAbbotsLeigh/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import renovationHome_desktop from '../../../assets/images/ProjectCategories/Renovation_7/2HouseinLongAshton/HeroImages/Hero_desktop.jpg';
import flatHome_desktop from '../../../assets/images/ProjectCategories/Flats_4/3PhoenixWorksFlats/HeroImages/Hero_desktop.jpg';
import churchesHome_desktop from '../../../assets/images/ProjectCategories/Churches_6/2TheOldChapel/HeroImages/Hero_desktop.jpg';
import heroImageDesktop1commercial from '../../../assets/images/ProjectCategories/Commercial_5/1StPetersHospiceGardenRoom/HeroImages/Hero_desktop.jpg';

import { ReactComponent as Arrow } from '../../../assets/images/Arrow.svg';

export default function Home(props) {
	const cards = [
		{
			name: 'card1',
			src: housesHome_desktop,
			text: 'Houses',
			size: 'large',
			to: '/projects/houses/1'
		},
		{
			name: 'card2',
			src: extensionsHome_desktop,
			text: 'Extensions',
			size: 'large',
			to: '/projects/extensions/1'
		},
		{
			name: 'card3',
			src: renovationHome_desktop,
			text: 'Renovation',
			size: 'small',
			to: '/projects/renovation/1'
		},
		{
			name: 'card4',
			src: flatHome_desktop,
			text: 'Flats',
			size: 'small',
			to: '/projects/flats/1'
		},
		{
			name: 'card5',
			src: churchesHome_desktop,
			text: 'Churches',
			size: 'small',
			to: '/projects/churches/1'
		},
		{
			name: 'card6',
			src: heroImageDesktop1commercial,
			text: 'Commercial',
			size: 'small',
			to: '/projects/commercial/1'
		}
	];
	return (
		<>
			<Container>
				{cards.map((card, i) => (
					<Card
						className={card.name}
						to={card.to}
						key={i}
					>
						<Image
							className={'image'}
							src={card.src}
						/>
						<Haze />
						<CardCenter className="center">
							<TextCOntainer>
								<Text className={`${card.size}Text`}>{card.text}</Text>
								<StyledArrow className={`${card.size}Arrow`} />
							</TextCOntainer>
							<Underline className="underline" />
						</CardCenter>
					</Card>
				))}
			</Container>
		</>
	);
}

const Container = styled.div`
	display: grid;

	max-width: 180rem;
	max-height: 90rem;
	height: 100%;
	margin: 0 auto;

	@media (min-width: 843px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-template-rows: 61.8% 38.2%;
		height: calc(100vh - 10.4rem);
	}
	@media (max-width: 843px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: 33.3%, 33.3%, 33.3%;
		height: calc(100vh - 6.4rem);
	}
`;

const Card = styled(Link)`
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover > .image {
		transform: scale(1.1);

		& ~ .center > .underline {
			width: 100%;
			background-color: ${props => props.theme.desktop.grey_5};
		}
	}
	&:hover > .haze {
		transform: scale(1.1);
	}

	&.card1 {
		grid-column: span 2;
		grid-row: 1;
		@media (max-width: 843px) {
			grid-column: 1;
		}
	}

	&.card2 {
		grid-column: 3 / span 2;
		grid-row: 1;
		@media (max-width: 843px) {
			grid-column: 2;
		}
	}

	&.card3 {
		grid-column: 1;
		grid-row: 2;
	}

	&.card4 {
		grid-column: 2;
		grid-row: 2;
	}
	&.card5 {
		grid-column: 3;
		grid-row: 2;
		@media (max-width: 843px) {
			grid-column: 1;
			grid-row: 3;
		}
	}
	&.card6 {
		grid-column: 4;
		grid-row: 2;
		@media (max-width: 843px) {
			grid-column: 2;
			grid-row: 3;
		}
	}
`;

const Image = styled.img`
	transform: scale(1.01);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	transition: transform 0.3s linear;
	width: 100%;
	height: 100%;
	pointer-events: none;
	object-fit: cover;
`;
const Haze = styled.div`
	transition: transform 0.3s linear;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	transform: scale(1);
	background: radial-gradient(
		95.16% 29.93% at 50% 50%,
		rgba(32, 43, 48, 0.6) 0%,
		rgba(32, 43, 48, 0.228) 100%
	);

	pointer-events: none;
`;

const CardCenter = styled.div`
	position: absolute;
	z-index: 3;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 0 0.3rem;
	pointer-events: none;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TextCOntainer = styled.div`
	display: flex;
	align-items: center;
`;

const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};

	font-style: normal;

	line-height: normal;
	position: relative;
	z-index: 10;
	top: 0;
	left: 0;
	/* added transform: translateZ(0); to fix letter jiggling in safari */
	/* added to force the browser to use hardware acceleration and improve the rendering during the transition. */
	transform: translateZ(0);

	@media (min-width: 843px) {
		font-family: 'Subheading', Arial, Serif;
		font-weight: 200;
		margin-right: 1rem;
		font-size: 3.6rem;

		&.smallText {
			font-size: 2.8rem;
		}
	}
	@media (min-width: 480px) and (max-width: 843px) {
		font-family: 'Subheading', Arial, Serif;
		font-weight: 200;
		margin-right: 1rem;
		font-size: 3.6rem;
	}
	@media (max-width: 480px) {
		font-family: 'Heading3', Arial, Serif;
		font-weight: 300;
		margin-right: 0.6rem;
		font-size: 2.2rem;
	}
`;
const StyledArrow = styled(Arrow)`
	width: 3.8rem;
	height: 3.8rem;
	@media (min-width: 843px) {
		&.smallArrow {
			width: 2.95rem;
			height: 2.95rem;
		}
	}
	@media (max-width: 480px) {
		width: 2.5rem;
		height: 2.4rem;
	}
`;

const Underline = styled.div`
	width: 0%;
	height: 0.2rem;
	background-color: transparent;
	transition: width 0.3s, background-color 0.3s;
`;
