import styled from 'styled-components';

export default function FormInput(props) {
	const { label, type, name, required, errorMessage } = props.input;
	const { showError, onBlur } = props;
	return (
		<InputWrapper>
			<Label
				className={showError ? 'invalidLabel' : ''}
				children={!showError ? label : errorMessage}
				for={name}
			/>
			<Input
				className={showError ? 'invalidInput' : ''}
				type={type}
				name={name}
				required={required}
				onChange={props.onChange}
				value={props.value}
				onBlur={onBlur}
				id={name}
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
	color: ${props => props.theme.desktop.grey_3};
	font-family: 'Jost', Arial, Serif;
	font-weight: 300;
	font-size: 1.4rem;
	padding-left: 0.4rem;
	&.invalidLabel {
		color: ${props => props.theme.desktop.error_stroke};
	}
`;

const Input = styled.input`
	width: 27.2rem;
	height: 3.6rem;
	border-radius: 0.5rem;
	border: 0.1rem solid ${props => props.theme.desktop.dark_4};
	background-color: ${props => props.theme.desktop.dark_2};

	color: ${props => props.theme.desktop.grey_3};
	font-family: 'Jost', Arial, Serif;
	font-weight: 400;
	font-size: 1.4rem;
	padding-left: 1rem;
	&.invalidInput {
		border: 0.2rem solid ${props => props.theme.desktop.error_stroke};
		background-color: ${props => props.theme.desktop.error_fill};
	}

	&:focus {
		outline: none;
		border: 0.2rem solid ${props => props.theme.desktop.dark_5};
		background-color: ${props => props.theme.desktop.dark_2};
	}
	@media (max-width: 843px) {
		width: 24.9rem;
	}
	@media (max-width: 550px) {
		width: 100%;
		height: 4.4rem;
	}
`;
