import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowUpRight } from '../../../assets/images/ArrowUpRight.svg';
import { ReactComponent as ArrowDownRight } from '../../../assets/images/ArrowDownRight.svg';

export default function Stage({
	stage: {
		key,
		color,
		name,
		bottom,
		left,
		followedByArrow,
		arrowGoesUp,
		arrowLeft,
		arrowBottom,
		updateSelectedStage
	}
}) {
	return (
		<React.Fragment>
			<Circle
				style={{ backgroundColor: color, bottom: bottom, left: left }}
				onClick={() => updateSelectedStage(key)}
			>
				<Text>{name}</Text>
			</Circle>
			{!followedByArrow ? null : arrowGoesUp ? (
				<StyledArrowUpRight style={{ bottom: arrowBottom, left: arrowLeft }} />
			) : (
				<StyledArrowDownRight
					style={{ bottom: arrowBottom, left: arrowLeft }}
				/>
			)}
		</React.Fragment>
	);
}

const Circle = styled.div`
	height: 9.9rem;
	width: 9.9rem;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 1px 3px 0px #0000004d, 0px 4px 8px 3px #00000026;
	position: absolute;
`;

const Text = styled.p`
	color: ${props => props.theme.desktop.dark1};
	font-family: 'Body', Arial, Serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: 0em;
	text-align: center;
`;

const StyledArrowUpRight = styled(ArrowUpRight)`
	position: absolute;
`;
const StyledArrowDownRight = styled(ArrowDownRight)`
	position: absolute;
`;
