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
			label: 'First Name*',
			type: 'text',
			name: 'first_name',
			required: true,
			errorMessage: 'Please enter your first name*'
		},
		{
			id: 2,
			label: 'Last Name*',
			type: 'text',
			name: 'last_name',
			required: true,
			errorMessage: 'Please enter your last name*'
		},
		{
			id: 3,
			label: 'Email*',
			type: 'email',
			name: 'email',
			required: true,
			errorMessage: 'Please enter a valid email*',
			pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
		},
		{
			id: 4,
			label: 'Phone',
			type: 'tel',
			name: 'phone'
		},
		{
			id: 5,
			label: 'Postcode of Project*',
			type: 'text',
			name: 'postcode_of_project',
			required: true,
			errorMessage: 'Please enter a valid postcode*',
			pattern:
				/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/
		},
		{
			id: 6,
			label: 'Budget',
			type: 'text',
			name: 'budget'
		}
	];

	// track user input in state

	const [values, setValues] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		postcode_of_project: '',
		budget: '',
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
		first_name: false,
		last_name: false,
		email: false,
		postcode_of_project: false
	});

	const handleOnBlur = name => {
		setBlurValues({
			...blurValues,
			[name]: true
		});
	};

	const validEmailRef = useRef(false);
	const validPostcodeRef = useRef(false);

	const shouldShowError = (
		name,
		values,
		isValidEmail,
		isValidPostCode,
		input,
		validEmailRef,
		validPostcodeRef
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
				// postcode_of_project shows error in the same way as email
			} else if (name === 'postcode_of_project') {
				if (isValidPostCode) {
					validPostcodeRef.current = true;
					return false;
				} else {
					validPostcodeRef.current = false;
					return true;
				}
				//  other required values show an error if nothing was entered
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
	const sendEmail = e => {
		e.preventDefault();
		if (validEmailRef.current && validPostcodeRef.current) {
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
							first_name: '',
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
			{' '}
			{messageHasSent ? (
				<SuccessMessage />
			) : (
				<React.Fragment>
					<ContactFormPrompt>
						Share your project ideas with us and we’ll be in touch soon
					</ContactFormPrompt>
					<InputGroup>
						{inputs.map(input => {
							const isValidPostCode = hasValidPattern(
								'postcode_of_project',
								values
							);
							const isValidEmail = hasValidPattern('email', values);
							const showError = shouldShowError(
								input.name,
								values,
								isValidEmail,
								isValidPostCode,
								input,
								validEmailRef,
								validPostcodeRef
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
					<SubmitButton type="submit" />
				</React.Fragment>
			)}
		</Form>
	);
}

const Form = styled.form`
	text-align: left;
`;

const ContactFormPrompt = styled.p`
	text-align: left;
	margin-bottom: 4rem;

	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
`;

const InputGroup = styled.div`
	width: 56rem;
	height: 18.4rem;
	flex-wrap: wrap;
	display: flex;
	column-gap: 1.6rem;
`;

const Label = styled.label`
	color: ${props => props.theme.desktop.dark2};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding-left: 0.4rem;
`;

const TextareaWrapper = styled.div`
	width: 56rem;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
`;

const Textarea = styled.textarea`
	width: 56rem;
	height: 12.4rem;
	border-radius: 0.5rem;
	border: 0.1rem solid ${props => props.theme.desktop.grey4};

	color: ${props => props.theme.desktop.dark2};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding: 0.7rem 1rem;
`;
