import styled from 'styled-components';

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
	color: ${props => props.theme.desktop.grey_3};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding-left: 0.4rem;
	&.invalidLabel {
		color: ${props => props.theme.desktop.error_1};
	}
`;

const Input = styled.input`
	width: 27.2rem;
	height: 3.6rem;
	border-radius: 0.5rem;
	border: 0.1rem solid ${props => props.theme.desktop.dark_3};
	background-color: ${props => props.theme.desktop.dark_3};

	color: ${props => props.theme.desktop.grey_5};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding-left: 1rem;
	&.invalidInput {
		border: 0.1rem solid ${props => props.theme.desktop.error_1};
	}
`;
