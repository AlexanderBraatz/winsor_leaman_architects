import styled from 'styled-components';
import FormInputcopy from './FormInputcopy';
import SubmitButton from './SubmitButton';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
// import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';

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
		// {
		// 	id: 7,
		// 	label: 'Other comments',
		// 	type: 'text',
		// 	name: 'comments'
		// }
	];

	//send email using emailjs

	const form = useRef();
	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_45w02r2',
				'template_dxo58a9',
				form.current,
				'bLntxgwfNxi6LqN3P'
			)
			.then(
				result => {
					console.log('message sent successfully');
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
					// add success popup function here ?
				},
				error => {
					console.log(error.text);
				}
			);
	};

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

	const hasValidPattern = name => {
		const postcodeInput = inputs.find(input => input.name === name);
		const postcodePattern = postcodeInput.pattern;

		const postcodeValue = values[name];
		if (!postcodePattern.test(postcodeValue)) {
			return false;
		} else {
			return true;
		}
	};

	const shouldShowError = (
		name,
		values,
		isValidEmail,
		isValidPostCode,
		input
	) => {
		if (name === 'email') {
			if (isValidEmail) {
				return false;
			} else {
				console.log('email is not valid so should shoe error');
				return true;
			}
		} else if (name === 'postcode_of_project') {
			if (isValidPostCode) {
				return false;
			} else {
				console.log('email is not valid so should shoe error');
				return true;
			}
		} else if (!input.required) {
			return false;
		} else if (values[name].length > 0) {
			return false;
		} else {
			return true;
		}
	};
	return (
		<Form
			ref={form}
			onSubmit={sendEmail}
		>
			<ContactFormPrompt>
				Share your project ideas with us and we’ll be in touch soon
			</ContactFormPrompt>
			<InputGroup>
				{inputs.map(input => {
					const { name, label, errorMessage } = input;

					const isValidPostCode = hasValidPattern(
						'postcode_of_project',
						values
					);
					const isValidEmail = hasValidPattern('email', values);
					const showError = shouldShowError(
						name,
						values,
						isValidEmail,
						isValidPostCode,
						input
					);
					return (
						<FormInputcopy
							key={input.id}
							input={input}
							onChange={handleOnChange}
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

const TextareaWrapper = styled.div`
	width: 44rem;
	margin-top: 2rem;
`;

const Textarea = styled.textarea`
	width: 44rem;
	height: 12.4rem;
	border-radius: 0.5rem;
	border: 0.1rem solid ${props => props.theme.desktop.grey4};

	color: ${props => props.theme.desktop.dark2};
	font-family: 'SmallText', Arial, Serif;
	font-size: 1.4rem;
	padding: 0.7rem 1rem;
`;
