import styled from 'styled-components';
import SubmitButton from './SubmitButton';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm(props) {
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
					// add success popup function here ?
				},
				error => {
					console.log(error.text);
				}
			);
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
				<InputWrapper>
					<Label>First Name*</Label>
					<Input
						type="text"
						name="first_name"
						required
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Last Name*</Label>
					<Input
						type="text"
						name="last_name"
						required
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Email*</Label>
					<Input
						type="email"
						name="email"
						required
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Phone</Label>
					<Input
						type="tel"
						name="phone"
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Postcode of Project*</Label>
					<Input
						type="text"
						name="postcode_of_project"
						required
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>Budget</Label>
					<Input
						type="text"
						name="budget"
					/>
				</InputWrapper>
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

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 0.8rem;
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
