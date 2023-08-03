import styled from 'styled-components';
import ContactForm from './ContactForm.js';

export default function Contact() {
	return (
		<Container>
			<Heading>Contact Us</Heading>
			<StyledSection>
				<ContactInfo>
					XX Oakfield Road
					<br /> Clifton
					<br /> Bristol
					<br /> BS8 XXX
					<br />
					<br /> Tel: 0117923xxxx
				</ContactInfo>
				<ContactFormWrapper>
					<ContactForm />
				</ContactFormWrapper>
			</StyledSection>
		</Container>
	);
}

const Container = styled.div`
	width: 74rem;
	height: 80rem;
	position: absolute;
	left: 21vw;
	margin-top: 4.5rem;
`;

const Heading = styled.h1`
	font-family: 'Heading2', Arial, Serif;
	font-size: 4.8rem;
	font-weight: 400;
	letter-spacing: -0.048rem;
	text-align: left;
	margin-bottom: 2.4rem;
`;

const StyledSection = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

const ContactInfo = styled.p`
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	width: 33.8rem;
`;

const ContactFormWrapper = styled.div`
	width: 45.6rem;
`;
