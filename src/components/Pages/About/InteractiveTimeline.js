import { useCallback, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Stage from './Stage';
import StageDescription from './StageDescription';

export default function InteractiveTimeline(props) {
	const theme = useTheme();

	const [selectedStage, setSelectedStage] = useState(0);

	const updateSelectedStage = useCallback(key => {
		setSelectedStage(key);
	}, []);
	const stages = [
		{
			key: 1,
			name: 'Design',
			color: theme.desktop.primary4,
			updateSelectedStage: updateSelectedStage,
			bottom: '0rem',
			left: '0rem',
			followedByArrow: true,
			arrowGoesUp: true,
			arrowLeft: '10.7rem',
			arrowBottom: '6.7rem',
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
			color: theme.desktop.gradient1_light,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			bottom: '7.6rem',
			left: '18.7rem',
			followedByArrow: true,
			arrowGoesUp: false,
			arrowLeft: '29.4rem',
			arrowBottom: '6.7rem',
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
			color: theme.desktop.gradient2_light,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			bottom: '0rem',
			left: '37.4rem',
			followedByArrow: true,
			arrowGoesUp: true,
			arrowLeft: '48.1rem',
			arrowBottom: '6.7rem',
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
			color: theme.desktop.gradient3_light,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			bottom: '7.6rem',
			left: '56.1rem',
			followedByArrow: true,
			arrowGoesUp: false,
			arrowLeft: '66.8rem',
			arrowBottom: '6.7rem',
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
			color: theme.desktop.gradient4_light,
			onClickHandler: '',
			updateSelectedStage: updateSelectedStage,
			bottom: '0rem',
			left: '74.8rem',
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
					<Instruction>Click on each stage to learn more</Instruction>
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
	background-color: ${props => props.theme.desktop.secondary5};
	width: 100%;
	height: 37rem;
	padding: 4rem 0;
`;
const Container = styled.div`
	margin: auto;
	width: 84.8rem;
	height: 36.7rem;
`;

const Heading = styled.div`
	text-align: left;
`;

const HeadingText = styled.h2`
	color: ${props => props.theme.desktop.dark1};
	font-family: 'Heading3', Arial, Serif;
	font-size: 3.6rem;
	font-weight: 300;
	line-height: 56px;
	letter-spacing: 0em;
	text-align: left;
`;

const Instruction = styled.p`
	color: ${props => props.theme.desktop.dark5};
	font-family: 'Body', Arial, Serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: left;
`;
const ProcessContainer = styled.div`
	width: 100%;
	height: 17.6rem;
	position: relative;
	margin-top: 3.2rem;
`;
