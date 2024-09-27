import React from 'react';
import styled from 'styled-components';
import ResponsiveInteractiveTimeline from './ResponsiveInteractiveTimeline';

import PictureOfMrWinsor from '../../../assets/images/About/PictureOfMrWinsor.jpeg';
import JamesPicture from '../../../assets/images/About/james_picture.jpeg';

import RIBALogoWhiteOnDark from '../../../assets/images/About/RIBALogoWhiteOnDark.png';
import { ReactComponent as Frame114svg } from '../../../assets/images/About/Frame114.svg';

export default function About() {
	return (
		<React.Fragment>
			<Content>
				<Heading>About us</Heading>

				<Text>
					We are a small practice founded in 2004 with expertise in simple,
					sensitive and economical buildings. <br />
					<br />
					We aim to create beautiful buildings using the best materials and the
					latest and most reliable building techniques. We design extensions and
					private houses, affordable social housing, commercial and leisure
					developments as well as being specialists in the alteration and
					renovation of historic buildings and churches. <br />
					<br />
					We deliver a quality service that gives our clients good value for
					money. We achieve this through our use of the latest computer and
					software technology including our project management and specification
					software, designed in-house. <br />
					<br />
					At the end of each stage of the project, we give our clients a
					detailed breakdown of costs and communicate well to ensure they have a
					real-time perspective of what’s happening.
				</Text>
				<StaffProfileSection>
					<StaffProfileWrapper>
						<StyledImage
							src={PictureOfMrWinsor}
							alt="picture of Richard Winsor"
						/>
						<ImageLabelWrapper>
							<ImageLabelName>Richard Winsor</ImageLabelName>
							<ImageLabelParagraph>
								Richard Winsor qualified as an architect in 1968 and has worked
								on projects ranging from residential homes to commercial
								buildings.
							</ImageLabelParagraph>
						</ImageLabelWrapper>
					</StaffProfileWrapper>
					<StaffProfileWrapper id="second">
						<StyledImage
							src={JamesPicture}
							alt="James"
						/>
						<ImageLabelWrapper id="secondImageLabelWrapper">
							<ImageLabelName>James Gillespie</ImageLabelName>
							<ImageLabelParagraph className="second">
								A part 1 qualified architect who has also recently acquired a
								master’s degree in construction project management. James has
								worked at Winsor & Leaman Architects for four years and has
								enjoyed providing clients with both value and satisfaction. He
								has a meticulous attention to detail combined with a creative
								touch.
							</ImageLabelParagraph>
						</ImageLabelWrapper>
					</StaffProfileWrapper>
				</StaffProfileSection>
				<LogoWrapper>
					<StyledRIBALogo
						src={RIBALogoWhiteOnDark}
						alt="RIBA logo"
					/>
					<StyledARBLogo alt="ARB logo" />
				</LogoWrapper>
			</Content>
			<ResponsiveInteractiveTimeline />
		</React.Fragment>
	);
}

const Content = styled.div`
	width: 84.8rem;
	margin: auto;
	margin-top: 4.6rem;
	@media (max-width: 843px) {
		width: 70.7rem;
	}
	@media (max-width: 740px) {
		width: 32.8rem;
	}
`;
const Heading = styled.h2`
	font-family: 'Jost', Arial, Serif;
	font-weight: 400;
	font-size: 4.8rem;
	text-align: left;
	color: ${props => props.theme.desktop.grey_5};
	margin-bottom: 6.4rem;
	@media (max-width: 843px) {
		font-family: 'Jost', Arial, Serif;
		font-weight: 400;
		font-size: 2.8rem;
		font-weight: 300;
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
	}
	@media (max-width: 740px) {
		font-family: 'Jost', Arial, Serif;
		font-weight: 400;
		font-size: 2.8rem;
		margin-bottom: 2.4rem;
	}
`;

const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Jost', Arial, Serif;
	font-weight: 400;
	line-height: 2.2rem;
	font-size: 1.6rem;
	text-align: left;
	width: 100%;
	padding-bottom: 6.4rem;
	@media (max-width: 843px) {
		font-size: 1.4rem;
		/* font-family: 'Jost', Arial, Serif; */
		font-size: 1.4rem;
		line-height: 2rem;
		padding-bottom: 5.6rem;
		/* background-color: red; */
	}
	@media (max-width: 740px) {
		font-family: 'Jost', Arial, Serif;
		font-weight: 400;
		font-size: 1.4rem;
		width: 32rem;
		font-weight: 400;
		padding-bottom: 4.8rem;
	}
`;

const StaffProfileSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	@media (max-width: 843px) {
		gap: 2.4rem;
	}
`;
const StaffProfileWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 3.2rem;
	align-items: center;
	@media (max-width: 843px) {
		align-items: center;

		&#second {
			height: 15.4rem;
		}
	}
	@media (max-width: 740px) {
		width: 100%;
		flex-direction: column;
		gap: 1.6rem;
		height: 22.7rem;
		&#second {
			height: 30.8rem;
		}
	}
`;

const StyledImage = styled.img`
	min-width: 17.3rem;
	height: 14rem;
	object-fit: cover;

	@media (max-width: 843px) {
		min-width: 12.3rem;
		height: 10rem;
	}
	@media (max-width: 740px) {
		min-width: 11.1rem;
		height: 9rem;
	}
`;
const ImageLabelWrapper = styled.div`
	/* background-color: blue; */
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	justify-content: flex-start;

	height: 14rem;
	@media (max-width: 843px) {
		height: 10rem;
		&#secondImageLabelWrapper {
			height: fit-content;
		}
	}
`;
const ImageLabelName = styled.p`
	font-family: 'Jost', Arial, Serif;
	font-weight: 300;
	font-size: 2.8rem;
	color: ${props => props.theme.desktop.grey_5};
	width: 100%;
	text-align: left;
	@media (max-width: 843px) {
		font-size: 2.2rem;
		font-family: 'Jost', Arial, Serif;
		font-weight: 300;
	}
	@media (max-width: 740px) {
		font-family: 'Jost', Arial, Serif;
		font-weight: 300;
		width: 100%;
		text-align: center;
	}
`;
const ImageLabelParagraph = styled.p`
	font-family: 'Jost', Arial, Serif;
	font-size: 1.6rem;
	font-weight: 400;
	text-align: left;
	color: ${props => props.theme.desktop.grey_5};

	width: 100%;

	@media (max-width: 843px) {
		font-size: 1.6rem;
	}
	@media (max-width: 740px) {
		width: 100%;
		min-width: 16rem;
		height: 12rem;
		margin-left: 0rem;
	}
`;
const LogoWrapper = styled.div`
	width: 8.96rem;
	display: flex;
	align-items: center;
	/* height: 10.3rem; */
	padding-top: 9.5rem;
	padding-bottom: 8.8rem;
	gap: 4rem;
	/* background-color: red; */
	@media (max-width: 843px) {
		padding-top: 4.4rem;
		padding-bottom: 4.4rem;
		gap: 3rem;
	}

	@media (max-width: 740px) {
		padding-top: 6.5rem;
		padding-bottom: 4.4rem;
	}
`;

const StyledRIBALogo = styled.img`
	width: 11rem;
	height: 5rem;
	object-fit: cover;
	@media (max-width: 843px) {
		width: 10.2rem;
		height: 4.5rem;
	}
	@media (max-width: 740px) {
		width: 9rem;
		height: 4rem;
	}
`;

const StyledARBLogo = styled(Frame114svg)`
	min-height: 6rem;
	min-width: 11rem;
	@media (max-width: 843px) {
		min-height: 4.5rem;
		min-width: 9rem;
	}
	@media (max-width: 740px) {
		min-height: 4rem;
		min-width: 8rem;
	}
`;
