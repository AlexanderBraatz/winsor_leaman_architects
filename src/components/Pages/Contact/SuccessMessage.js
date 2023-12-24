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

	useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

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
	transition: top 0.8s ease-out;
	@media (max-width: 843px) {
		font-size: 1.4rem;
	}
	@media (max-width: 350px) {
		font-size: 1rem;
	}
`;
const StyledCheck = styled(Check)``;
