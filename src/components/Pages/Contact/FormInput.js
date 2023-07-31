import styled from 'styled-components';

import React, { useRef, useState } from 'react';

export default function FormInput(props) {
	return (
		<InputWrapper>
			<Label>{props.input.label}</Label>
			<Input
				type={props.input.type}
				name={props.input.name}
				required={props.input.required}
				onChange={props.onChange}
				value={props.value}
			/>
		</InputWrapper>
	);
}

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 0.8rem;
`;

const InputGroup = styled.div`
	width: 44rem;
	height: 18.4rem;
	flex-wrap: wrap;
	display: flex;
	column-gap: 1.6rem;
`;

const Label = styled.label`
	color: ${props => props.theme.desktop.dark2};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding-left: 1rem;
`;

const Input = styled.input`
	width: 21.2rem;
	height: 3.6rem;
	border-radius: 0.5rem;
	border: 0.1rem solid ${props => props.theme.desktop.grey4};

	color: ${props => props.theme.desktop.dark2};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding-left: 1rem;
`;
