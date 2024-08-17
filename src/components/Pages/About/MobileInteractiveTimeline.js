import React from 'react';
import styled, { useTheme } from 'styled-components';

//Desctop and Tablet Arrows
import { ReactComponent as DesignArrowDesktop } from '../../../assets/images/About/arrows/Design_Desktop.svg';
import { ReactComponent as PlanningArrowDesktop } from '../../../assets/images/About/arrows/Planning_Desktop.svg';
import { ReactComponent as PreconstructionArrowDesktop } from '../../../assets/images/About/arrows/Preconstruction_Desktop.svg';
import { ReactComponent as ConstructionArrowDesktop } from '../../../assets/images/About/arrows/Construction_Desktop.svg';
//Mobile Arrows
import { ReactComponent as DesignArrowMobile } from '../../../assets/images/About/arrows/Design_Mobile.svg';
import { ReactComponent as PlanningArrowMobile } from '../../../assets/images/About/arrows/Planning_Mobile.svg';
import { ReactComponent as PreconstructionArrowMobile } from '../../../assets/images/About/arrows/Preconstruction_Mobile.svg';
import { ReactComponent as ConstructionArrowMobile } from '../../../assets/images/About/arrows/Construction_Mobile.svg';
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
	// mapping over the stages array was avoided because of the arrow svgs
	return (
		<Background>
			<Container>
				<OuterContainer>
					<HeadingText>Our Process</HeadingText>
					<Stage>
						<IconContainer>
							<Circle style={{ backgroundColor: stages[0].color }}>
								<Text>{stages[0].name}</Text>
							</Circle>
							{props.is740 ? (
								<StyledDesignArrowM></StyledDesignArrowM>
							) : (
								<StyledDesignArrow></StyledDesignArrow>
							)}
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
							{props.is740 ? (
								<StyledPlanningArrowM></StyledPlanningArrowM>
							) : (
								<StyledPlanningArrow></StyledPlanningArrow>
							)}
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
							{props.is740 ? (
								<StyledPreconstructionArrowM></StyledPreconstructionArrowM>
							) : (
								<StyledPreconstructionArrow></StyledPreconstructionArrow>
							)}
						</IconContainer>
						<List id="PreConstructionListException">
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
							{props.is740 ? (
								<StyledConstructionArrowM></StyledConstructionArrowM>
							) : (
								<StyledConstructionArrow></StyledConstructionArrow>
							)}
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
	margin-bottom: 10.2rem;
`;

const HeadingText = styled.h2`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Logo', Arial, Serif;
	font-weight: 300;
	letter-spacing: 0em;
	text-align: left;
	font-size: 3.6rem;
	line-height: 3.2rem;
	width: 100%;
	margin: 0 auto;
	margin-top: 6.4rem;
	margin-bottom: 9.4rem;
	@media (max-width: 843px) {
		margin-top: 4rem;
	}
	@media (max-width: 740px) {
		font-size: 2.2rem;
		margin-bottom: 2.4rem;
	}
`;

const OuterContainer = styled.div`
	margin: auto;
	width: 83.2rem;
	@media (max-width: 843px) {
		width: 69.1rem;
	}
	@media (max-width: 740px) {
		width: 32.8rem;
	}
`;
const Stage = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin: auto;
	height: fit-content;
	gap: 1rem;
`;
const IconContainer = styled.div`
	width: 10rem;
	height: fit-content;
	display: flex;
	flex-direction: column;
	@media (max-width: 740px) {
		width: 7.6rem;
	}
`;
const Circle = styled.div`
	height: 10rem;
	width: 10rem;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 3px 15.5px 0px #00000026;

	@media (max-width: 740px) {
		height: 7.6rem;
		width: 7.6rem;

		box-shadow: 0px 1px 3px 0px #0000004d, 0px 4px 8px 3px #00000026;
	}
`;

const StyledDesignArrow = styled(DesignArrowDesktop)`
	margin: 0.4rem auto;
`;

const StyledPlanningArrow = styled(PlanningArrowDesktop)`
	margin: 0.4rem auto;
`;

const StyledPreconstructionArrow = styled(PreconstructionArrowDesktop)`
	margin: 0.4rem auto;
`;

const StyledConstructionArrow = styled(ConstructionArrowDesktop)`
	margin: 0.4rem auto;
`;
const StyledDesignArrowM = styled(DesignArrowMobile)`
	margin: 0.9rem auto;
`;

const StyledPlanningArrowM = styled(PlanningArrowMobile)`
	margin: 0.9rem auto;
`;

const StyledPreconstructionArrowM = styled(PreconstructionArrowMobile)`
	margin: 0.9rem auto;
`;

const StyledConstructionArrowM = styled(ConstructionArrowMobile)`
	margin: 0.9rem auto;
`;

const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Logo', Arial, Serif;
	font-size: 1.4rem;
	width: 90%; /* to text wrap "Pre- Construction*/
	font-weight: 400;
	line-height: 1.6rem;
	letter-spacing: 0em;
	text-align: center;
	@media (max-width: 740px) {
		font-size: 1.2rem;
	}
`;

const List = styled.ul`
	width: 57rem;
	list-style: none;
	&#PreConstructionListException {
		position: relative;
		top: -1rem;
	}
	@media (max-width: 740px) {
		width: 24.4rem;
		&#PreConstructionListException {
			position: relative;
			top: -2rem;
		}
	}
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
	font-family: 'Logo', Arial, Serif;

	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2.2rem;
	letter-spacing: 0.1rem;
	text-align: left;
	@media (max-width: 740px) {
		font-size: 1.4rem;
		line-height: 2rem;
	}
`;
