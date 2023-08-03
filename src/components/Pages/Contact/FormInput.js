import styled from 'styled-components';

import React, { useState } from 'react';

export default function FormInput(props) {
	const { label, type, name, required, errorMessage } = props.input;
	const { showError, onBlur } = props;

	return (
		<InputWrapper>
			<Label
				className={showError ? 'invalidLabel' : ''}
				children={showError ? errorMessage : label}
			/>
			<Input
				className={showError ? 'invalidInput' : ''}
				type={type}
				name={name}
				required={required}
				onChange={props.onChange}
				value={props.value}
				onBlur={onBlur}
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
