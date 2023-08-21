import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ExtensionsImageLargeCropped from '../../../assets/images/ExtensionsImageLargeCropped.jpeg';
import HousesLargeCropped from '../../../assets/images/HousesLargeCropped.jpeg';
import RenovationLargeCropped from '../../../assets/images/RenovationLargeCropped.jpeg';
import FlatsLargeCropped from '../../../assets/images/FlatsLargeCropped.jpeg';
import ChurchesLargeCropped from '../../../assets/images/ChurchesLargeCropped.jpeg';
import View_allLargeCropped from '../../../assets/images/View_allLargeCropped.jpeg';
import { ReactComponent as Arrow } from '../../../assets/images/Arrow.svg';

export default function Home(props) {
	const cards = [
		{
			name: 'card1',
			src: ExtensionsImageLargeCropped,
			text: 'Extensions',
			size: 'large',
			to: 'extensions/1'
		},
		{
			name: 'card2',
			src: HousesLargeCropped,
			text: 'Houses',
			size: 'large',
			to: 'houses/1'
		},
		{
			name: 'card3',
			src: RenovationLargeCropped,
			text: 'Renovation',
			size: 'small',
			to: 'renovation/1'
		},
		{
			name: 'card4',
			src: FlatsLargeCropped,
			text: 'Flats',
			size: 'small',
			to: 'flats/1'
		},
		{
			name: 'card5',
			src: ChurchesLargeCropped,
			text: 'Churches',
			size: 'small',
			to: 'churches/1'
		},
		{
			name: 'card6',
			src: View_allLargeCropped,
			text: 'Commercial',
			size: 'small',
			to: 'commercial/1'
		}
	];
	return (
		<>
			<Container>
				{cards.map(card => (
					<Card
						className={card.name}
						to={card.to}
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
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-template-rows: 61.8% 38.2%;
	max-width: 180rem;
	max-height: 77.46rem;
	margin: 0 auto;
	height: calc(100vh - 10.4rem);
`;

const Card = styled(Link)`
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover > .image {
		transform: scale(1.1);

		& ~ .center > .underline {
			width: 100%;
			background-color: ${props => props.theme.desktop.white};
		}
	}
	&:hover > .haze {
		transform: scale(1.1);
	}

	&.card1 {
		grid-column: span 2;
		grid-row: 1;
	}

	&.card2 {
		grid-column: 3 / span 2;
		grid-row: 1;
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
	}
	&.card6 {
		grid-column: 4;
		grid-row: 2;
	}
`;

const Image = styled.img`
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
		rgba(0, 0, 0, 0.6) 0%,
		rgba(0, 0, 0, 0.27) 100%
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
	color: ${props => props.theme.desktop.white};
	font-family: 'Subheading', Arial, Serif;
	font-size: 36px;
	font-style: normal;
	font-weight: 200;
	line-height: normal;
	position: relative;
	z-index: 10;
	top: 0;
	left: 0;
	/* added transform: translateZ(0); to fix letter jiggling in safari */
	/* added to force the browser to use hardware acceleration and improve the rendering during the transition. */
	transform: translateZ(0);
	margin-right: 1rem;
	&.smallText {
		font-size: 2.8rem;
	}
`;
const StyledArrow = styled(Arrow)`
	width: 3.8rem;
	height: 3.8rem;
	&.smallArrow {
		width: 2.95rem;
		height: 2.95rem;
	}
`;

const Underline = styled.div`
	width: 0%;
	height: 0.2rem;
	background-color: transparent;
	transition: width 0.3s, background-color 0.3s;
`;
