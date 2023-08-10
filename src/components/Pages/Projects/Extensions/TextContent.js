import styled from 'styled-components';
const TextContent = props => {
	return (
		<Container>
			<DescriptionContainer>
				<Heading>Project Title</Heading>
				<Year>Year</Year>
				<Divider />
				<DescriptionText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</DescriptionText>
			</DescriptionContainer>
			<FeedbackBackground>
				<FeedbackContainer>
					<FeedbackHeading>Client Feedback</FeedbackHeading>
					<FeedbackText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</FeedbackText>
				</FeedbackContainer>
			</FeedbackBackground>
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
