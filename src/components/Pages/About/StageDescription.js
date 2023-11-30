import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Cancel } from '../../../assets/images/CancelGrey_5.svg';

export default function StageDescription({
	stage: { color, name, details, updateSelectedStage }
}) {
	return (
		<React.Fragment>
			<Container>
				<Circle
					onClick={() => updateSelectedStage(0)}
					style={{ backgroundColor: color }}
				>
					<Text>{name}</Text>
					<StyledCancel />
				</Circle>
				<List>
					{details.map((listItem, index) => (
						<ListItemContainer key={index}>
							<ListItemDot>
								<LittleCircle />
							</ListItemDot>
							<StyledListItem>{listItem}</StyledListItem>
						</ListItemContainer>
					))}
				</List>
			</Container>
		</React.Fragment>
	);
}

const Container = styled.div`
	width: 100%;
	height: 17.6rem;
	position: relative;
	margin-top: 3.2rem;

	display: flex;
	align-items: center;
`;
const Circle = styled.div`
	height: 9.9rem;
	width: 9.9rem;
	border-radius: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 1px 3px 0px #0000004d, 0px 4px 8px 3px #00000026;
	margin-left: 4.6rem;
	cursor: pointer;

	&::before {
		content: '';
		height: 9.9rem;
		width: 9.9rem;
		border-radius: 100%;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.15);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
		z-index: 1;
	}
	&:hover::before {
		opacity: 1;
	}
`;
const StyledCancel = styled(Cancel)``;

const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Body', Arial, Serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: 0em;
	text-align: center;
`;
const List = styled.ul`
	margin-left: 2rem;
	list-style: none;
`;
const ListItemContainer = styled.div`
	display: flex;
`;
const ListItemDot = styled.div`
	width: 2.2rem;
	height: 2.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LittleCircle = styled.div`
	width: 0.2rem;
	height: 0.2rem;
	border-radius: 100%;
	background-color: ${props => props.theme.desktop.dark_1};
`;

const StyledListItem = styled.li`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Body', Arial, Serif;

	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: 0em;
	text-align: left;
`;
