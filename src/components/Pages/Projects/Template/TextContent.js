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
	color: ${props => props.theme.desktop.grey5};
	margin-top: 4rem;
`;
const DescriptionContainer = styled.div`
	width: 60.8rem;
	margin: auto;
`;
const Heading = styled.h2`
	font-family: 'Heading2';
	font-size: 48px;
	font-weight: 400;
	line-height: 80px;
	letter-spacing: -0.01em;
	text-align: left;
`;
const Year = styled.p`
	font-family: 'Body';
	font-size: 28px;
	font-weight: 400;
	line-height: 40px;
	letter-spacing: 0em;
	text-align: left;
	color: ${props => props.theme.desktop.grey2};
`;
const Divider = styled.div`
	width: 100%;
	height: 0.2rem;
	background-color: ${props => props.theme.desktop.dark3};
	margin-top: 2.4rem;
`;

const DescriptionText = styled.p`
	font-family: 'Logo';
	font-size: 2.2rem;
	font-weight: 400;
	line-height: 40px;
	letter-spacing: 0em;
	text-align: left;
	margin-top: 2.4rem;
	line-height: 32px;
	white-space: pre-wrap;
`;

const FeedbackBackground = styled.div`
	background-color: ${props => props.theme.desktop.dark2};
	margin-top: 4rem;
`;
const FeedbackContainer = styled.div`
	width: 60.8rem;
	margin: auto;
	padding: 4rem 0 5.6rem 0;
`;
const FeedbackHeading = styled.div`
	font-family: 'SmallText';
	font-size: 36px;
	font-weight: 300;
	line-height: 56px;
	letter-spacing: 0em;
	text-align: left;
`;
const FeedbackText = styled.div`
	font-family: 'SmallText';
	font-size: 22px;
	font-weight: 300;
	line-height: 32px;
	letter-spacing: 0em;
	text-align: left;
	margin-top: 2.4rem;
`;

export default TextContent;
