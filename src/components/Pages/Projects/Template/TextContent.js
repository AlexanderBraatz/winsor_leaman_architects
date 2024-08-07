import styled from 'styled-components';
const TextContent = ({
	textContentProps: {
		heading,
		year,
		descriptionText,
		feedbackHeading,
		feedbackText
	}
}) => {
	return (
		<Container>
			<DescriptionContainer>
				<Heading>{heading}</Heading>
				<Year>{year}</Year>
				<Divider />
				<DescriptionText>{descriptionText}</DescriptionText>
			</DescriptionContainer>
			{feedbackHeading.length === 0 ? null : (
				<FeedbackBackground>
					<FeedbackContainer>
						<FeedbackHeading>{feedbackHeading}</FeedbackHeading>
						<FeedbackText>{feedbackText}</FeedbackText>
					</FeedbackContainer>
				</FeedbackBackground>
			)}
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	color: ${props => props.theme.desktop.grey_5};
	margin-top: 4rem;
	@media (max-width: 843px) {
		margin-top: 3.2rem;
	}
	@media (max-width: 480px) {
		margin-top: 2.4rem;
	}
`;
const DescriptionContainer = styled.div`
	width: 60.8rem;
	margin: auto;
	@media (max-width: 843px) {
		max-width: 38.5rem;
	}

	@media (max-width: 480px) {
		width: auto;
		max-width: 37rem;
		padding: 0 0.8rem;
	}
	@media (max-width: 375px) {
		max-width: 34rem;
	}
	@media (max-width: 340px) {
		max-width: 30rem;
	}
	@media (max-width: 300px) {
		max-width: 27rem;
	}
`;
const Heading = styled.h2`
	font-family: 'Heading2';
	font-size: 48px;
	font-weight: 400;
	line-height: 80px;
	letter-spacing: -0.01em;
	text-align: left;
	@media (max-width: 843px) {
		font-size: 28px;
		line-height: 40px;
		font-family: 'Heading3';
	}
`;
const Year = styled.p`
	font-family: 'Body';
	font-size: 22px;
	font-weight: 300;
	line-height: 32px;
	letter-spacing: 0em;
	text-align: left;
	color: ${props => props.theme.desktop.grey_2};
	@media (max-width: 843px) {
		font-size: 18px;
		font-weight: 300;
		line-height: 26px;
		font-family: 'Heading3';
	}
`;
const Divider = styled.div`
	width: 100%;
	height: 0.2rem;
	background-color: ${props => props.theme.desktop.dark_4};
	margin-top: 2.4rem;
`;

const DescriptionText = styled.p`
	font-family: 'Logo';
	font-size: 16px;
	line-height: 22px;
	font-weight: 400;
	letter-spacing: 0em;
	text-align: left;
	margin-top: 2.4rem;
	white-space: pre-wrap;
	@media (max-width: 843px) {
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
	}
	@media (max-width: 480px) {
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
	}
`;

const FeedbackBackground = styled.div`
	background-color: ${props => props.theme.desktop.dark_1};
	margin-top: 4rem;
`;
const FeedbackContainer = styled.div`
	width: 60.8rem;
	margin: auto;
	padding: 4rem 0 5.6rem 0;
	@media (max-width: 843px) {
		max-width: 38.5rem;
	}
	@media (max-width: 480px) {
		max-width: 37rem;
		padding: 2rem 0.8rem 3.2rem 0.8rem;
	}
	@media (max-width: 375px) {
		max-width: 34rem;
	}
	@media (max-width: 340px) {
		max-width: 30rem;
	}
	@media (max-width: 300px) {
		max-width: 27rem;
	}
`;
const FeedbackHeading = styled.div`
	font-family: 'SmallText';
	font-size: 36px;
	font-weight: 300;
	line-height: 56px;
	letter-spacing: 0em;
	text-align: left;
	@media (max-width: 843px) {
		font-size: 22px;
		font-weight: 300;
		line-height: 32px;
	}
	@media (max-width: 480px) {
		font-size: 18px;
		font-weight: 300;
		line-height: 26px;
	}
`;
const FeedbackText = styled.div`
	font-family: 'SmallText';
	font-size: 16px;
	line-height: 22px;
	font-weight: 300;
	letter-spacing: 0em;
	text-align: left;
	margin-top: 2.4rem;
	@media (max-width: 843px) {
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
	}
	@media (max-width: 480px) {
		font-size: 14px;
		font-weight: 300;
		line-height: 20px;
	}
`;

export default TextContent;
