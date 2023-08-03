import styled from 'styled-components';
import { ReactComponent as Check } from '../../../assets/images/check.svg';

export default function SuccessMessage() {
	return (
		<Wrapper>
			<Message>Thank you, your message has been received</Message>
			<StyledCheck />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const Message = styled.p`
	text-align: left;
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
`;
const StyledCheck = styled(Check)``;
