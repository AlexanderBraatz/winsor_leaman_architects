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
		<>
			{props.clicked ? (
				<Loader />
			) : (
				<Container>
					<Button
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						<Text>Submit</Text>
					</Button>
					<Background className={hover ? 'hasHover' : 'doesNotHaveHover'} />
				</Container>
			)}
		</>
	);
}

const Container = styled.div`
	background-color: ${props => props.theme.desktop.dark_4};
	position: relative;
	width: fit-content;
	overflow: hidden;
	margin-top: 2.4rem;
	border-radius: 0.5rem;
`;
const Button = styled.button`
	//styles
	width: 8.9rem;
	height: 3.6rem;
	border-radius: 0.5rem;
	border: none;

	cursor: pointer;

	//effect properties
	background-color: transparent;
	position: relative;
	z-index: 2;

	@media (max-width: 550px) {
		width: 32.8rem;
		height: 4.8rem;
	}
	@media (max-width: 350px) {
		width: 28.8rem;
	}
`;
const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Button', Arial, Serif;
	font-size: 1.6rem;
`;
const Background = styled.div`
	width: 8.9rem;
	height: 3.6rem;

	//color fade effect
	&.hasHover {
		background-color: ${props => props.theme.desktop.primary};
		left: 0%;
	}
	&.doesNotHaveHover {
		background-color: ${props => props.theme.desktop.dark_3};
		left: -100%;
	}
	// swipe effect
	position: absolute;
	bottom: 0%;
	z-index: 1;

	// effect transition timing
	transition: left 0.4s linear, background-color 0.4s linear;

	@media (max-width: 550px) {
		width: 32.8rem;
		height: 4.8rem;
	}
	@media (max-width: 350px) {
		width: 28.8rem;
	}
`;

const Loader = styled.div`
	margin-top: 2.4rem;
	margin-left: 0.4rem;
	border: 0.6rem solid ${props => props.theme.desktop.grey_2};
	border-top: 0.6rem solid ${props => props.theme.desktop.grey_5};
	border-radius: 50%;
	width: 3.6rem;
	height: 3.6rem;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
