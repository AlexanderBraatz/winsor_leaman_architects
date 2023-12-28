import React from 'react';
import styled from 'styled-components';
import InteractiveTimeline from './InteractiveTimeline';

import PictureOfMrWinsor from '../../../assets/images/About/PictureOfMrWinsor.jpeg';
import JamesPlaceholder from '../../../assets/images/About/JamesPlaceholder.jpeg';

import { ReactComponent as Frame114svg } from '../../../assets/images/About/Frame114.svg';
import { ReactComponent as LogoWhiteOnBlackJpgjpg1svg } from '../../../assets/images/About/LogoWhiteOnBlackJpgjpg1.svg';

export default function About() {
	return (
		<React.Fragment>
			<Heading>About</Heading>
			<InteractiveTimeline />
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
					<ImagesContainer>
						<ImageWrapper>
							<StyledImage
								src={PictureOfMrWinsor}
								alt="picture of Richard Winsor"
							/>
							<ImageLabel>
								Richard Winsor qualified as an architect in 1968 and has worked
								on projects ranging from residential homes to commercial
								buildings.
							</ImageLabel>
						</ImageWrapper>
						<ImageWrapper>
							<StyledImage
								src={JamesPlaceholder}
								alt="James"
							/>
							<ImageLabel className="second">Paragraph about James</ImageLabel>
						</ImageWrapper>
					</ImagesContainer>
				</StyledDiv>
				<LogoWrapper>
					<StyledRIBALogo
						//	src={LogoWhiteOnBlackJpgjpg1}
						alt="RIBA logo"
					/>
					<StyledARBLogo
						//	src={Frame114}
						alt="ARB logo"
					/>
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
		width: 30rem;
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
		width: 30rem;
	}
`;
const SubHeading = styled.h2`
	font-family: 'Heading3', Arial, Serif;
	font-size: 3.6rem;
	font-weight: 300;
	text-align: left;
	//height: 5.2rem;
	color: ${props => props.theme.desktop.grey_5};
	@media (max-width: 843px) {
		font-size: 2.2rem;
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
	}
	@media (max-width: 740px) {
	}
`;
const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 4rem 0;
	@media (max-width: 843px) {
		padding: 2.4rem 0;
	}
	@media (max-width: 740px) {
		flex-direction: column;
	}
`;
const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	width: 40rem;
	@media (max-width: 843px) {
		font-size: 1.4rem;
		width: 34rem;
	}
	@media (max-width: 740px) {
		font-size: 1.4rem;
		width: 32rem;
		font-weight: 400;
		margin-bottom: 2.4rem;
	}
`;

const ImagesContainer = styled.div`
	width: fit-content;
`;
const ImageWrapper = styled.div`
	width: 41rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 2.4rem;
	@media (max-width: 843px) {
		width: 34.8rem;
	}
	@media (max-width: 740px) {
		background-color: ${props => props.theme.desktop.dark_3};
		width: 32rem;
	}
`;

const StyledImage = styled.img`
	margin: 1.6rem;
	width: 17.3rem;
	height: 14rem;
	@media (max-width: 843px) {
		width: 12rem;
		height: 9.7rem;
	}
	@media (max-width: 740px) {
		margin: 2.7rem 1.6rem;
	}
`;

const ImageLabel = styled.p`
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	color: ${props => props.theme.desktop.grey_5};
	height: 14rem;
	min-width: 17.3rem;
	line-height: 2.2rem;
	margin: 1.6rem;
	vertical-align: middle;
	&.second {
		line-height: 14rem;
	}
	@media (max-width: 843px) {
		font-size: 1.4rem;
		line-height: 2rem;
		height: 10rem;
		width: 18rem;
		&.second {
			line-height: 10rem;
		}
	}
	@media (max-width: 740px) {
		width: 16rem;
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
