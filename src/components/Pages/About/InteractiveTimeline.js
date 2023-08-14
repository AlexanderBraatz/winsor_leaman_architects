import styled, { useTheme } from 'styled-components';
import Stage from './Stage';

export default function InteractiveTimeline(props) {
	const theme = useTheme();
	const stages = [
		{
			key: 1,
			name: 'Design',
			color: theme.desktop.primary4,
			onClickHandler: '',
			bottom: '0rem',
			left: '0rem',
			followedByArrow: true,
			arrowGoesUp: true,
			arrowLeft: '10.7rem',
			arrowBottom: '6.7rem'
		},
		{
			key: 2,
			name: 'Planning',
			color: theme.desktop.gradient1_light,
			onClickHandler: '',
			bottom: '7.6rem',
			left: '18.7rem',
			followedByArrow: true,
			arrowGoesUp: false,
			arrowLeft: '29.4rem',
			arrowBottom: '6.7rem'
		},
		{
			key: 3,
			name: `Pre-
			construction`,
			color: theme.desktop.gradient2_light,
			onClickHandler: '',
			bottom: '0rem',
			left: '37.4rem',
			followedByArrow: true,
			arrowGoesUp: true,
			arrowLeft: '48.1rem',
			arrowBottom: '6.7rem'
		},
		{
			key: 4,
			name: 'Construction',
			color: theme.desktop.gradient3_light,
			onClickHandler: '',
			bottom: '7.6rem',
			left: '56.1rem',
			followedByArrow: true,
			arrowGoesUp: false,
			arrowLeft: '66.8rem',
			arrowBottom: '6.7rem'
		},
		{
			key: 5,
			name: 'Completion',
			color: theme.desktop.gradient4_light,
			onClickHandler: '',
			bottom: '0rem',
			left: '74.8rem',
			followedByArrow: false
		}
	];
	return (
		<Background>
			<Container>
				<Heading>
					<HeadingText>Our Process</HeadingText>
					<Instruction>Click on each stage to learn more</Instruction>
				</Heading>
				<ProcessContainer>
					{stages.map(stage => (
						<Stage
							stage={stage}
							key={stage.key}
						/>
					))}
				</ProcessContainer>
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
	font-size: 36px;
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
	/* background-color: white; */
`;
