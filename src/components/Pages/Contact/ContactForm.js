import styled from 'styled-components';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm(props) {
	const inputs = [
		{
			id: 1,
			label: 'Name*',
			type: 'text',
			name: 'name',
			required: true,
			errorMessage: 'Please enter your name*',
			shortErrorMessage: 'Name*'
		},
		{
			id: 2,
			label: 'Email*',
			type: 'email',
			name: 'email',
			required: true,
			errorMessage: 'Please enter a valid email*',
			shortErrorMessage: 'valid email*',
			pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
		}
	];

	// track user input in state

	const [values, setValues] = useState({
		name: '',
		email: '',
		comments: ''
	});

	const handleOnChange = e => {
		const { name, value } = e.target;
		setValues(prevValues => ({
			...prevValues,
			[name]: value
		}));
	};
	// determine error display and form submission based on onBlur, pattern match, and input presence
	const hasValidPattern = currentInputName => {
		const pattern = inputs.find(
			input => input.name === currentInputName
		).pattern;

		return pattern.test(values[currentInputName]);
	};

	const [blurValues, setBlurValues] = useState({
		name: false,
		email: false
	});

	const handleOnBlur = name => {
		setBlurValues({
			...blurValues,
			[name]: true
		});
	};

	const validEmailRef = useRef(false);

	const shouldShowError = (
		name,
		values,
		isValidEmail,
		input,
		validEmailRef
	) => {
		// if the input is not required it never needs to show an error
		if (!input.required) {
			return false;
			// only once it has been focused and unfocused should it start showing errors
		} else if (blurValues[name]) {
			//email shows and error if the input is tested against the regex pattern to be an invalid email
			// email being valid or invalid is stored as ref and used in onSubmit event to prevent the form being submitted if the entered email is invalid
			if (name === 'email') {
				if (isValidEmail) {
					validEmailRef.current = true;
					return false;
				} else {
					validEmailRef.current = false;

					return true;
				}
			} else if (values[name].length > 0) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	//send email using emailjs

	const form = useRef();
	const [messageHasSent, setMessageHasSent] = useState(false);
	const [clicked, setClicked] = useState(false);
	const sendEmail = e => {
		e.preventDefault();
		if (validEmailRef.current) {
			setClicked(true);
			emailjs
				.sendForm(
					'service_45w02r2',
					'template_dxo58a9',
					form.current,
					'bLntxgwfNxi6LqN3P'
				)
				.then(
					result => {
						e.target.reset();
						setValues({
							name: '',
							last_name: '',
							email: '',
							phone: '',
							postcode_of_project: '',
							budget: '',
							comments: ''
						});
						setMessageHasSent(true);
					},
					error => {}
				);
		}
	};
	return (
		<Form
			ref={form}
			onSubmit={sendEmail}
		>
			{messageHasSent ? (
				<SuccessMessage />
			) : (
				<React.Fragment>
					<ContactFormPrompt>
						Share your project ideas with us and we’ll be in touch
					</ContactFormPrompt>
					<InputGroup>
						{inputs.map(input => {
							const isValidEmail = hasValidPattern('email', values);
							const showError = shouldShowError(
								input.name,
								values,
								isValidEmail,
								input,
								validEmailRef
							);
							return (
								<FormInput
									key={input.id}
									input={input}
									onChange={handleOnChange}
									onBlur={() => handleOnBlur(input.name)}
									value={values[input.name]}
									showError={showError}
								/>
							);
						})}
					</InputGroup>
					<TextareaWrapper>
						<Label>Other comments</Label>
						<Textarea name="comments" />
					</TextareaWrapper>
					<SubmitButton
						clicked={clicked}
						type="submit"
					/>
				</React.Fragment>
			)}
		</Form>
	);
}

const Form = styled.form`
	text-align: left;
	width: 100%;
`;

const ContactFormPrompt = styled.p`
	text-align: left;
	margin-bottom: 2.2rem;
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	@media (max-width: 843px) {
		font-size: 1.4rem;
		margin-bottom: 2rem;
	}
	@media (max-width: 350px) {
		font-size: 1rem;
	}
`;

const InputGroup = styled.div`
	width: 100%;
	height: 6.4rem;
	flex-wrap: wrap;
	display: flex;
	column-gap: 1.6rem;
	@media (max-width: 350px) {
		height: 14.4rem;
	}
`;

const Label = styled.label`
	color: ${props => props.theme.desktop.grey_3};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding-left: 0.4rem;
	@media (max-width: 350px) {
		font-size: 1rem;
	}
`;

const TextareaWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Textarea = styled.textarea`
	width: 100%;
	height: 12.4rem;
	border-radius: 0.5rem;
	border: 0.1rem solid ${props => props.theme.desktop.dark_3};
	background-color: ${props => props.theme.desktop.dark_3};
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding: 0.7rem 1rem;
	@media (max-width: 350px) {
		font-size: 1rem;
	}
`;
