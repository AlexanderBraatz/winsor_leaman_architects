import { styled } from 'styled-components';

export default function StyleGuide() {
	return (
		<TestContainer>
			<H1>Heading 1</H1>
			<H2>Heading 2</H2>
			<H3>Heading 3</H3>
			<Subheading>Subheading</Subheading>
			<Logo>Logo</Logo>
			<Button>Button</Button>
			<Body>Body</Body>
			<SmallText>Small Text</SmallText>
		</TestContainer>
	);
}

const TestContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;
const H1 = styled.h1`
	font-family: 'Heading1', Arial, Serif;
	font-size: 64px;
`;
const H2 = styled.h1`
	font-family: 'Heading2', Arial, Serif;
	font-size: 48px;
`;
const H3 = styled.h2`
	font-family: 'Heading3', Arial, Serif;
	font-size: 36px;
`;
const Subheading = styled.h3`
	font-family: 'Subheading', Arial, Serif;
	font-size: 32px;
`;
const Logo = styled.p`
	font-family: 'Logo', Arial, Serif;
	font-size: 28px;
`;
const Button = styled.p`
	font-family: 'Button', Arial, Serif;
	font-size: 22px;
`;
const Body = styled.p`
	font-family: 'Body', Arial, Serif;
	font-size: 16px;
`;
const SmallText = styled.p`
	font-family: 'SmallText', Arial, Serif;
	font-size: 14px;
`;
