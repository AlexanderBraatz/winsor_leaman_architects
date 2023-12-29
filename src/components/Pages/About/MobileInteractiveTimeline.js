import React from 'react';
import styled, { useTheme } from 'styled-components';

import { ReactComponent as DesignArrow } from '../../../assets/images/ArrowDesignMobile.svg';
import { ReactComponent as PlanningArrow } from '../../../assets/images/PlanningArrow.svg';
import { ReactComponent as PreconstructionArrow } from '../../../assets/images/PreconstructionArrow.svg';
import { ReactComponent as ConstructionArrow } from '../../../assets/images/ConstructionArrow.svg';

export default function InteractiveTimeline(props) {
	const theme = useTheme();

	const stages = [
		{
			name: 'Design',
			color: theme.desktop.primary,
			details: [
				'Initial meeting with the client to discuss requirements and preferences',
				'Survey of the site',
				'Sketch designs to explore different options',
				'3D Illustrations to visualize solutions in more detail',
				'Approximate pricing'
			],
			arrow: '<StyledDesignArrow></StyledDesignArrow>'
		},
		{
			name: 'Planning',
			color: theme.desktop.gradient_1,
			details: [
				'Drawings for planning',
				'Design and Access statement',
				'Planning application submission',
				'Liaising with planners'
			]
		},
		{
			name: `Pre-
			construction`,
			color: theme.desktop.gradient_2,
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
			name: 'Construction',
			color: theme.desktop.gradient_3,
			details: [
				'Site inspections',
				'Further detailed drawings',
				'Amendments to drawings',
				'Payment certificates'
			]
		},
		{
			name: 'Completion',
			color: theme.desktop.gradient_4,
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
				</Heading>
				<OuterContainer>
					<Stage>
						<IconContainer>
							<Circle style={{ backgroundColor: stages[0].color }}>
								<Text>{stages[0].name}</Text>
							</Circle>
							<StyledDesignArrow></StyledDesignArrow>
						</IconContainer>
						<List>
							{stages[0].details.map((listItem, index) => (
								<ListItemContainer key={index}>
									<ListItemDot>
										<LittleCircle />
									</ListItemDot>
									<StyledListItem>{listItem}</StyledListItem>
								</ListItemContainer>
							))}
						</List>
					</Stage>
					<Stage>
						<IconContainer>
							<Circle style={{ backgroundColor: stages[1].color }}>
								<Text>{stages[1].name}</Text>
							</Circle>
							<StyledPlanningArrow></StyledPlanningArrow>
						</IconContainer>
						<List>
							{stages[1].details.map((listItem, index) => (
								<ListItemContainer key={index}>
									<ListItemDot>
										<LittleCircle />
									</ListItemDot>
									<StyledListItem>{listItem}</StyledListItem>
								</ListItemContainer>
							))}
						</List>
					</Stage>
					<Stage>
						<IconContainer>
							<Circle style={{ backgroundColor: stages[2].color }}>
								<Text>{stages[2].name}</Text>
							</Circle>
							<StyledPreconstructionArrow></StyledPreconstructionArrow>
						</IconContainer>
						<List>
							{stages[2].details.map((listItem, index) => (
								<ListItemContainer key={index}>
									<ListItemDot>
										<LittleCircle />
									</ListItemDot>
									<StyledListItem>{listItem}</StyledListItem>
								</ListItemContainer>
							))}
						</List>
					</Stage>
					<Stage>
						<IconContainer>
							<Circle style={{ backgroundColor: stages[3].color }}>
								<Text>{stages[3].name}</Text>
							</Circle>
							<StyledConstructionArrow></StyledConstructionArrow>
						</IconContainer>
						<List>
							{stages[3].details.map((listItem, index) => (
								<ListItemContainer key={index}>
									<ListItemDot>
										<LittleCircle />
									</ListItemDot>
									<StyledListItem>{listItem}</StyledListItem>
								</ListItemContainer>
							))}
						</List>
					</Stage>
					<Stage>
						<IconContainer>
							<Circle style={{ backgroundColor: stages[4].color }}>
								<Text>{stages[4].name}</Text>
							</Circle>
						</IconContainer>
						<List>
							{stages[4].details.map((listItem, index) => (
								<ListItemContainer key={index}>
									<ListItemDot>
										<LittleCircle />
									</ListItemDot>
									<StyledListItem>{listItem}</StyledListItem>
								</ListItemContainer>
							))}
						</List>
					</Stage>
				</OuterContainer>
			</Container>
		</Background>
	);
}

const Background = styled.div`
	background-color: ${props => props.theme.desktop.dark_2};
	width: 100%;
	padding: 1.6rem 0;
	height: fit-content;
`;
const Container = styled.div`
	margin: auto;
	width: 100%;
	height: fit-content;
`;

const Heading = styled.div`
	text-align: center;
`;

const HeadingText = styled.h2`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Heading3', Arial, Serif;
	font-weight: 300;
	letter-spacing: 0em;
	text-align: left;
	font-size: 2.2rem;
	line-height: 32px;
	width: 32.8rem;
	margin: 0 auto;
	margin-bottom: 2.4rem;
`;

const OuterContainer = styled.div`
	width: 32.8rem;
	margin: auto;
`;
const Stage = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin: auto;
	height: fit-content;
`;
const IconContainer = styled.div`
	width: 8.4rem;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;
const Circle = styled.div`
	height: 8rem;
	width: 8rem;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 1px 3px 0px #0000004d, 0px 4px 8px 3px #00000026;

	&::before {
		content: '';
		height: 8rem;
		width: 8rem;
		border-radius: 100%;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.15);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
		z-index: 1;
	}
`;

const StyledDesignArrow = styled(DesignArrow)`
	width: 7.6rem;
	margin: 1.7rem auto;
`;

const StyledPlanningArrow = styled(PlanningArrow)`
	width: 7.6rem;
	margin: 1.7rem auto;
`;

const StyledPreconstructionArrow = styled(PreconstructionArrow)`
	width: 7.6rem;
	margin: 1.7rem auto;
`;

const StyledConstructionArrow = styled(ConstructionArrow)`
	width: 7.6rem;
	margin: 1.7rem auto;
`;

const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Body', Arial, Serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.6rem;
	letter-spacing: 0em;
	text-align: center;
`;

const List = styled.ul`
	width: 24.4rem;
	margin-left: 2rem;
	list-style: none;
`;
const ListItemContainer = styled.div`
	display: flex;
`;
const ListItemDot = styled.div`
	min-width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LittleCircle = styled.div`
	width: 0.2rem;
	height: 0.2rem;
	border-radius: 100%;
	background-color: ${props => props.theme.desktop.grey_5};
`;

const StyledListItem = styled.li`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Body', Arial, Serif;

	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0em;
	text-align: left;
`;
