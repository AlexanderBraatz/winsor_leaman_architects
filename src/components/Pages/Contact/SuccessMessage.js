import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Check } from '../../../assets/images/check.svg';

export default function SuccessMessage() {
	const [position, setPosition] = useState(2);

	useEffect(() => {
		setTimeout(() => {
			setPosition(0);
		}, 100);
	}, []);

	return (
		<Wrapper>
			<Message style={{ top: `${position}rem` }}>
				Thank you, your message has been received.
			</Message>
			<StyledCheck />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	position: relative;
`;
const Message = styled.p`
	text-align: left;
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	position: absolute;
	top: ${props => props.style.top};
	transition: top 0.5s ease-out;
`;
const StyledCheck = styled(Check)``;
