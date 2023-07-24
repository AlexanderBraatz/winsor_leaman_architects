import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ExtensionsImageLargeCropped from '../../../assets/images/ExtensionsImageLargeCropped.jpeg';
import HousesLargeCropped from '../../../assets/images/HousesLargeCropped.jpeg';
import RenovationLargeCropped from '../../../assets/images/RenovationLargeCropped.jpeg';
import FlatsLargeCropped from '../../../assets/images/FlatsLargeCropped.jpeg';
import LeisureLargeCropped from '../../../assets/images/LeisureLargeCropped.jpeg';
import ChurchesLargeCropped from '../../../assets/images/ChurchesLargeCropped.jpeg';
import View_allLargeCropped from '../../../assets/images/View_allLargeCropped.jpeg';
import { ReactComponent as Arrow } from '../../../assets/images/Arrow.svg';

export default function Projects(props) {
	return (
		<Container>
			<Card
				to="projects/extensions"
				className="largeCard"
			>
				<Image
					src={ExtensionsImageLargeCropped}
					className="largeImage image"
				/>
				<Haze className="darker-gradient" />
				<CardCenter className="center">
					<TextContainer>
						<Text>Extensions</Text>
						<StyledArrow />
					</TextContainer>
					<Underline className="underline" />
				</CardCenter>
			</Card>
			<Card
				to="projects/houses"
				className="largeCard"
			>
				<Image
					src={HousesLargeCropped}
					className="largeImage image"
				/>
				<Haze className="darker-gradient" />
				<CardCenter className="center">
					<TextContainer>
						<Text>Houses</Text>
						<StyledArrow />
					</TextContainer>
					<Underline className="underline" />
				</CardCenter>
			</Card>
			<Card
				to="projects/renovation"
				className="largeCard"
			>
				<Image
					src={RenovationLargeCropped}
					className="largeImage image"
				/>
				<Haze className="darker-gradient" />
				<CardCenter className="center">
					<TextContainer>
						<Text>Renovation</Text>
						<StyledArrow />
					</TextContainer>
					<Underline className="underline" />
				</CardCenter>
			</Card>
			<Card
				to="projects/flats"
				className="smallCard"
			>
				<Image
					src={FlatsLargeCropped}
					className="smallImage image"
				/>
				<Haze className="brighter-gradient" />
				<CardCenter className="center">
					<TextContainer>
						<Text className="smallText">Flats</Text>
						<StyledArrow className="smallArrow" />
					</TextContainer>
					<Underline className="underline" />
				</CardCenter>
			</Card>
			<Card
				to="projects/leisure"
				className="smallCard"
			>
				<Image
					src={LeisureLargeCropped}
					className="smallImage image"
				/>
				<Haze className="brighter-gradient" />
				<CardCenter className="center">
					<TextContainer>
						<Text className="smallText">Leisure</Text>
						<StyledArrow className="smallArrow" />
					</TextContainer>
					<Underline className="underline" />
				</CardCenter>
			</Card>
			<Card
				to="projects/churches"
				className="smallCard"
			>
				<Image
					src={ChurchesLargeCropped}
					className="smallImage image"
				/>
				<Haze className="darker-gradient" />
				<CardCenter className="center">
					<TextContainer>
						<Text className="smallText">Churches</Text>
						<StyledArrow className="smallArrow" />
					</TextContainer>
					<Underline className="underline" />
				</CardCenter>
			</Card>
			<Card
				to="projects/view_all"
				className="smallCard"
			>
				<Image
					src={View_allLargeCropped}
					className="smallImage image"
				/>
				<Haze className="brighter-gradient" />
				<CardCenter className="center">
					<TextContainer>
						<Text className="smallText">View all</Text>
						<StyledArrow className="smallArrow" />
					</TextContainer>
					<Underline className="underline" />
				</CardCenter>
			</Card>
		</Container>
	);
}

const Container = styled.div`
	width: 153.6rem;
	height: 35.5rem;
	display: flex;
	flex-wrap: wrap;
	margin: auto;
`;

const Card = styled(Link)`
	position: relative;
	overflow: hidden;
	&.largeCard {
		width: 51.2rem;
		height: 35.5rem;
	}
	&.smallCard {
		width: 38.4rem;
		height: 22.5rem;
	}
	&:hover > .image {
		transform: scale(1.1);

		& ~ .center > .underline {
			width: 100%;
			background-color: ${props => props.theme.desktop.white};
		}
	}
`;
const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	transition: transform 0.3s linear;

	&.largeImage {
		width: 51.2rem;
		height: 35.5rem;
	}
	&.smallImage {
		width: 38.4rem;
		height: 22.5rem;
	}
	pointer-events: none;
`;

const Haze = styled.div`
	width: 51.2rem;
	height: 35.5rem;
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	&.darker-gradient {
		background: radial-gradient(
			95.16% 29.93% at 50% 50%,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0.27) 100%
		);
	}
	&.brighter-gradient {
		background: radial-gradient(
			50% 50% at 50% 50%,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(0, 0, 0, 0) 100%
		);
	}
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
const TextContainer = styled.div`
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
