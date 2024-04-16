import styled from 'styled-components';
import ContactForm from './ContactForm.js';
import React, { useContext } from 'react';
import { ResponsiveContext } from './../../../ResponsiveContext.js';

export default function Contact() {
	const { isDesktop } = useContext(ResponsiveContext);
	return (
		<Container>
			<Heading>Contact Us</Heading>
			<StyledSection>
				<ContactInfo>
					35 Oakfield Road
					<br /> Clifton
					<br /> Bristol
					<br /> BS8 2AT
					<br />
					<br /> Tel: 01179238617
				</ContactInfo>
				{!isDesktop ? <Divider /> : <></>}
				<ContactFormWrapper>
					<ContactForm />
				</ContactFormWrapper>
			</StyledSection>
		</Container>
	);
}

const Container = styled.div`
	width: 84.8rem;
	height: 80rem;
	margin: 4.8rem auto 0 auto;
	color: ${props => props.theme.desktop.grey_5};
	@media (max-width: 843px) {
		padding: 0 1.6rem;
		margin: 2.4rem auto 0 auto;
		width: fit-content;
		//background-color: aliceblue;
	}
`;

const Heading = styled.h1`
	font-family: 'Heading2', Arial, Serif;
	font-size: 4.8rem;
	font-weight: 400;
	letter-spacing: -0.048rem;
	text-align: left;
	margin-bottom: 2.8rem;
	@media (max-width: 843px) {
		font-size: 2.8rem;
	}
`;

const StyledSection = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 843px) {
		flex-direction: column;
	}
`;

const ContactInfo = styled.p`
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	width: 12.1rem;
	@media (max-width: 843px) {
		font-size: 1.4rem;
	}
`;
const Divider = styled.div`
	max-width: 51.4rem;
	height: 0.2rem;
	background-color: ${props => props.theme.desktop.dark_4};
	margin: 2.4rem 0;
`;
const ContactFormWrapper = styled.div`
	width: 56rem;
	@media (max-width: 843px) {
		width: 51.4rem;
	}
	@media (max-width: 550px) {
		width: 32.8rem;
	}
	@media (max-width: 350px) {
		width: 28.8rem;
	}
`;
