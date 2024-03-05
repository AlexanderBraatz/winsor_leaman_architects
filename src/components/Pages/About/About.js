import React from 'react';
import styled from 'styled-components';
import ResponsiveInteractiveTimeline from './ResponsiveInteractiveTimeline';

import PictureOfMrWinsor from '../../../assets/images/About/PictureOfMrWinsor.jpeg';
import JamesPicture from '../../../assets/images/About/james_picture.jpeg';

import { ReactComponent as Frame114svg } from '../../../assets/images/About/Frame114.svg';
import { ReactComponent as LogoWhiteOnBlackJpgjpg1svg } from '../../../assets/images/About/LogoWhiteOnBlackJpgjpg1.svg';

export default function About() {
	return (
		<React.Fragment>
			<Heading>About</Heading>
			<ResponsiveInteractiveTimeline />
			<Content>
				<SubHeading>About us</SubHeading>

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
					<StyledRIBALogo alt="RIBA logo" />
					<StyledARBLogo alt="ARB logo" />
				</LogoWrapper>
			</Content>
		</React.Fragment>
	);
}

const Heading = styled.h1`
	width: 84.8rem;
	margin: auto;
	margin-top: 5.35rem;
	margin-bottom: 4.8rem;
	text-align: left;
	font-family: 'Heading2', Arial, Serif;
	font-size: 4.8rem;
	font-weight: 400;
	letter-spacing: -0.048rem;
	color: ${props => props.theme.desktop.grey_5};
	@media (max-width: 843px) {
		font-size: 2.8rem;
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
		padding-left: 6.4rem;
	}
	@media (max-width: 740px) {
		width: 32.8rem;
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
		padding-left: 0rem;
	}
`;

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
const SubHeading = styled.h2`
	font-family: 'Heading3', Arial, Serif;
	font-size: 4.8rem;
	font-weight: 300;
	text-align: left;
	color: ${props => props.theme.desktop.grey_5};
	margin-bottom: 6.4rem;
	@media (max-width: 843px) {
		font-size: 2.8rem;
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
	}
	@media (max-width: 740px) {
		font-size: 2.8rem;
		margin-bottom: 2.4rem;
	}
`;

const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Logo', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	width: 100%;
	padding-bottom: 6.4rem;
	@media (max-width: 843px) {
		font-size: 1.4rem;
		font-family: 'Logo', Arial, Serif;
		padding-bottom: 5.6rem;
	}
	@media (max-width: 740px) {
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
	font-family: 'Heading3', Arial, Serif;
	font-size: 2.8rem;
	color: ${props => props.theme.desktop.grey_5};
	width: 100%;
	text-align: left;
	@media (max-width: 843px) {
		font-size: 2.2rem;
		font-family: 'Logo', Arial, Serif;
		font-weight: 300;
	}
	@media (max-width: 740px) {
		width: 100%;
		text-align: center;
	}
`;
const ImageLabelParagraph = styled.p`
	font-family: 'Logo', Arial, Serif;
	font-size: 1.6rem;
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
	height: 10.3rem;
	gap: 4rem;
`;

const StyledRIBALogo = styled(LogoWhiteOnBlackJpgjpg1svg)`
	min-width: 11rem;
	min-height: 6rem;
`;

const StyledARBLogo = styled(Frame114svg)`
	min-height: 6rem;
	min-width: 11rem;
`;
