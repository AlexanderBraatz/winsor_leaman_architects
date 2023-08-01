import styled from 'styled-components';

import React, { useState, useCallback, useEffect } from 'react';

export default function FormInput(props) {
	const { label, type, name, required, errorMessage, pattern } = props.input;
	const [valid, setValid] = useState(true);

	const validateInput = useCallback(() => {
		if (pattern) {
			if (!pattern.test(props.value)) {
				setValid(false);
			} else {
				setValid(true);
			}
		}
	}, [pattern, props.value]);

	useEffect(() => {
		validateInput();
	}, [props.value, validateInput]);

	return (
		<InputWrapper>
			<Label className={!valid ? 'invalidLabel' : ''}>
				{!valid ? errorMessage : label}
			</Label>
			<Input
				className={!valid ? 'invalidInput' : ''}
				type={type}
				name={name}
				required={required}
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

const Label = styled.label`
	color: ${props => props.theme.desktop.dark2};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding-left: 1rem;
	&.invalidLabel {
		color: ${props => props.theme.desktop.error};
	}
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
	&.invalidInput {
		border: 0.1rem solid ${props => props.theme.desktop.error};
	}
`;
