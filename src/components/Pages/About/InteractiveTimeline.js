import React, { useCallback, useState, useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import Stage from './Stage';
import StageDescription from './StageDescription';

import { ResponsiveContext } from '../../../ResponsiveContext';

export default function InteractiveTimeline(props) {
	const { isDesktop } = useContext(ResponsiveContext);
	const theme = useTheme();

	const [selectedStage, setSelectedStage] = useState(1);

	const updateSelectedStage = useCallback(key => {
		setSelectedStage(key);
	}, []);
	const stages = [
		{
			key: 1,
			name: 'Design',
			color: theme.desktop.primary,
			updateSelectedStage: updateSelectedStage,
			left: '0rem',
			bottom: '0rem',
			leftSmall: '0rem',
			bottomSmall: '0rem',
			followedByArrow: true,
			arrowGoesUp: true,
			arrowLeft: '10.7rem',
			arrowBottom: '6.7rem',
			arrowLeftSmall: '9.9rem',
			arrowBottomSmall: '7.6rem',
			details: [
				'Initial meeting with the client to discuss requirements and preferences',
				'Survey of the site',
				'Sketch designs to explore different options',
				'3D Illustrations to visualize solutions in more detail',
				'Approximate pricing'
			]
		},
		{
			key: 2,
			name: 'Planning',
			color: theme.desktop.gradient_1,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			left: '18.7rem',
			bottom: '7.6rem',
			leftSmall: '15rem',
			bottomSmall: '7.7rem',
			followedByArrow: true,
			arrowGoesUp: false,
			arrowLeft: '29.4rem',
			arrowBottom: '6.7rem',
			arrowLeftSmall: '25.7rem',
			arrowBottomSmall: '7.4rem',
			details: [
				'Drawings for planning',
				'Design and Access statement',
				'Planning application submission',
				'Liaising with planners'
			]
		},
		{
			key: 3,
			name: `Pre-
			construction`,
			color: theme.desktop.gradient_2,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			left: '37.4rem',
			bottom: '0rem',
			leftSmall: '30.2rem',
			bottomSmall: '0rem',
			followedByArrow: true,
			arrowGoesUp: true,
			arrowLeft: '48.1rem',
			arrowBottom: '6.7rem',
			arrowLeftSmall: '40.7rem',
			arrowBottomSmall: '7rem',
			details: [
				'Detailed drawings',
				'Structural calculation',
				'The Building Reg application',
				'Detailed specification',
				'Tender documents',
				'Builders tender report'
			]
		},
		{
			key: 4,
			name: 'Construction',
			color: theme.desktop.gradient_3,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			left: '56.1rem',
			bottom: '7.6rem',
			leftSmall: '45.3rem',
			bottomSmall: '7.6rem',
			followedByArrow: true,
			arrowGoesUp: false,
			arrowLeft: '66.8rem',
			arrowBottom: '6.7rem',
			arrowLeftSmall: '55.9rem',
			arrowBottomSmall: '6.9rem',
			details: [
				'Site inspections',
				'Further detailed drawings',
				'Amendments to drawings',
				'Payment certificates'
			]
		},
		{
			key: 5,
			name: 'Completion',
			color: theme.desktop.gradient_4,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			left: '74.8rem',
			bottom: '0rem',
			leftSmall: '60.4rem',
			bottomSmall: '0rem',
			followedByArrow: false,
			details: [
				'Discharge conditions',
				'Building Regs completion certificates',
				'Defects list',
				'Practical completion'
			]
		}
	];
	return (
		<Background>
			<Container>
				<Heading>
					<HeadingText>Our Process</HeadingText>
					<Instruction>
						{isDesktop
							? 'Click on each stage to learn more'
							: 'Tap on each stage to learn more'}
					</Instruction>
				</Heading>
				{selectedStage > 0 ? (
					<StageDescription
						stage={stages.find(stage => stage.key === selectedStage)}
					/>
				) : (
					<ProcessContainer>
						{stages.map(stage => (
							<Stage
								stage={stage}
								key={stage.key}
							/>
						))}
					</ProcessContainer>
				)}
			</Container>
		</Background>
	);
}

const Background = styled.div`
	background-color: ${props => props.theme.desktop.dark_2};
	width: 100%;
	height: 37rem;
	padding: 4rem 0;
`;
const Container = styled.div`
	margin: auto;
	width: 84.8rem;
	height: 36.7rem;
	@media (max-width: 843px) {
		width: 70.4rem;
	}
`;

const Heading = styled.div`
	text-align: left;
`;

const HeadingText = styled.h2`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Heading3', Arial, Serif;
	font-size: 3.6rem;
	font-weight: 300;
	line-height: 56px;
	letter-spacing: 0em;
	text-align: left;
	@media (max-width: 843px) {
		font-size: 2.2rem;
		line-height: 32px;
	}
`;

const Instruction = styled.p`
	color: ${props => props.theme.desktop.grey_2};
	font-family: 'Body', Arial, Serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: left;
	@media (max-width: 843px) {
		font-size: 1.6rem;
		line-height: 22px;
	}
`;
const ProcessContainer = styled.div`
	width: 100%;
	height: 17.6rem;
	position: relative;
	margin-top: 3.2rem;
`;
