import styled from 'styled-components';
import FeesImage from '../../../assets/images/Feediagram2.png';

export default function Fees() {
	return (
		<Background>
			<Container>
				<Heading>Fees</Heading>
				<Content>
					<Text>
						Our fees are negotiable, though the chart on the right gives an
						estimate of how much we charge for a full service for each client
						based on the cost of the works. <br /> <br />
						According to this chart, the fee for a project that costs £10,000
						would be about £1,000, while the fee for a project that costs
						£100,000 would be around £5,000. <br /> <br />
						It may be necessary to adjust your fee due to unforeseen
						complexities. If you only need a partial service, we will adjust the
						fee based on an assessment of the project.
					</Text>
					<GraphContainer>
						{/* <StyledCostExpensesGraph /> */}
						<Feediagram2Image
							src={FeesImage}
							alt="Graph displaying the fees and "
						/>
					</GraphContainer>
				</Content>
			</Container>
		</Background>
	);
}
const Background = styled.div`
	background-color: ${props => props.theme.desktop.dark_1};
	min-height: 100vh;
	width: 100%;
`;
const Container = styled.div`
	max-width: 94.8rem;
	margin: auto;
	display: absolute;
	padding: 4.8rem 3rem;
	height: fit-content;
	@media (max-width: 843px) {
		padding: 2.4rem 1.6rem;
	}
`;
const Heading = styled.h1`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Heading2', Arial, Serif;
	font-size: 4.8rem;
	font-weight: 400;
	letter-spacing: -0.048rem;
	text-align: left;
	margin: auto;
	margin-bottom: 2.8rem;
	@media (max-width: 965px) {
		max-width: 48rem;
	}
`;
const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 4rem;
	@media (max-width: 965px) {
		flex-direction: column;
	}
`;
const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	max-width: 32.4rem;
	@media (max-width: 965px) {
		max-width: 48rem;
	}
`;
const GraphContainer = styled.div``;

const Feediagram2Image = styled.img`
	width: 100%;
	height: 100%;
`;
