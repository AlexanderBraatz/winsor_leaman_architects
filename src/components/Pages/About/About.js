import React from 'react';
import styled from 'styled-components';
// import InteractiveElement from './InteractiveElement';
import WhoWeAre from '../../../assets/images/WhoWeAreLargeCropped.jpeg';
import RIBALogo from '../../../assets/images/RIBALogoLarge.png';
import ARBLogo from '../../../assets/images/ARBLogoLarge.jpeg';

export default function About() {
	return (
		<React.Fragment>
			<Heading>About</Heading>
			<InteractiveElement />
			<Content>
				<SubHeading>Who we are</SubHeading>
				<StyledDiv>
					<Text>
						We are a small practice founded in 2004 with expertise in simple,
						sensitive and economical buildings. <br />
						<br />
						We aim to create beautiful buildings using the best materials and
						the latest and most reliable building techniques. We design
						extensions and private houses, affordable social housing, commercial
						and leisure developments as well as being specialists in the
						alteration and renovation of historic buildings and churches. <br />
						<br />
						We deliver a quality service that gives our clients good value for
						money. We achieve this through our use of the latest computer and
						software technology including our project management and
						specification software, designed in-house. <br />
						<br />
						At the end of each stage of the project, we give our clients a
						detailed breakdown of costs and communicate well to ensure they have
						a real-time perspective of what’s happening.
					</Text>
					<ImageWrapper>
						<StyledImage
							src={WhoWeAre}
							alt="picture of Richard Winsor"
						/>
						<ImageLabel>
							Richard Winsor qualified as an architect in 1968 and has worked on
							projects ranging from residential homes to commercial buildings.
						</ImageLabel>
					</ImageWrapper>
				</StyledDiv>
				<LogoWrapper>
					<StyledRIBALogo
						src={RIBALogo}
						alt="picture of Richard Winsor"
					/>
					<StyledARBLogo
						src={ARBLogo}
						alt="picture of Richard Winsor"
					/>
				</LogoWrapper>
			</Content>
		</React.Fragment>
	);
}

const Heading = styled.h1`
	width: 89.6rem;
	margin: auto;
	margin-top: 5.35rem;
	margin-bottom: 2.8rem;
	text-align: left;
	font-family: 'Heading2', Arial, Serif;
	font-size: 4.8rem;
	font-weight: 400;
	letter-spacing: -0.048rem;
`;

const InteractiveElement = styled.div`
	background-color: ${props => props.theme.desktop.secondary5};
	width: 100%;
	height: 36.7rem;
	padding: 4rem 0;
`;
const Content = styled.div`
	width: 89.6rem;
	margin: auto;
	margin-top: 4.6rem;
`;
const SubHeading = styled.h2`
	font-family: 'Heading3', Arial, Serif;
	font-size: 3.6rem;
	font-weight: 300;
	text-align: left;
	height: 5.2rem;
`;
const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 4rem 0;
`;
const Text = styled.p`
	color: ${props => props.theme.desktop.dark1};
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	width: 51.6rem;
`;

const ImageWrapper = styled.div`
	width: 36.4rem;
	padding: 0 3.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledImage = styled.img`
	height: 20rem;
	margin-bottom: 4.8rem;
`;

const ImageLabel = styled.p`
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
`;
const LogoWrapper = styled.div`
	width: 8.96rem;
	display: flex;
	align-items: center;
	height: 10.3rem;
	gap: 5.1rem;
`;

const StyledRIBALogo = styled.img`
	width: 19.8rem;
	height: 10.3rem;
`;

const StyledARBLogo = styled.img`
	width: 19.8rem;
	height: 4.8rem;
`;
