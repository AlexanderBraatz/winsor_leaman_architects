import styled from 'styled-components';
import React, { useState } from 'react';

export default function SubmitButton(props) {
	const [hover, setHover] = useState(false);

	const handleMouseOver = () => {
		setHover(true);
	};
	const handleMouseOut = () => {
		setHover(false);
	};
	return (
		<Button
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<Text>Submit</Text>
			<Background hover={hover} />
		</Button>
	);
}
const Button = styled.button`
	//styles
	width: 8.9rem;
	height: 3.6rem;
	border-radius: 0.5rem;
	border: 0.1rem solid ${props => props.theme.desktop.grey4};
	margin-top: 2.4rem;

	//effect properties
	background-color: transparent;
	position: relative;
	overflow: hidden;
`;
const Text = styled.p`
	color: ${props => props.theme.desktop.dark1};
	font-family: 'Button', Arial, Serif;
	font-size: 1.6rem;
`;
const Background = styled.div`
	width: 8.9rem;
	height: 3.6rem;

	//color fade effect
	background-color: ${props =>
		props.hover ? props.theme.desktop.button : props.theme.desktop.white};

	// swipe effect
	position: absolute;
	left: ${props => (props.hover ? '0%' : '-100%')};
	top: 0%;
	z-index: -1;

	// effect transition timing
	transition: left 0.4s linear, background-color 0.4s linear;
`;
