import styled from 'styled-components';
import { ReactComponent as CostExpensesGraph } from '../../../assets/images/CostExpensesGraph.svg';

export default function Fees() {
	return (
		<Container>
			<Heading>Fees</Heading>
			<Content>
				<Text>
					Our fees are negotiable, though the chart on the right shows an
					estimate of how much we charge for a full service for each client
					based on the cost of the works. <br /> <br />
					According to this chart, the maximum fee for a project that costs
					£30,000 would be around £4,500, while the maximum fee for a project
					that costs £100,000 would be around £11,000. <br /> <br />
					We reserve the right to adjust your fee due to unforeseen
					complexities. If you only need a partial service, we can adjust the
					fee accordingly based on an assessment of the building cost.
				</Text>
				<StyledCostExpensesGraph />
			</Content>
		</Container>
	);
}

const Container = styled.div`
	width: 83.3rem;
	margin: auto;
	margin-top: 5.35rem;
	display: absolute;
	transform: translateX(-3rem);
`;
const Heading = styled.h1`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Heading2', Arial, Serif;
	font-size: 4.8rem;
	font-weight: 400;
	letter-spacing: -0.048rem;
	text-align: left;
	margin-bottom: 2.8rem;
`;
const Content = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Text = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	font-family: 'Body', Arial, Serif;
	font-size: 1.6rem;
	text-align: left;
	width: 40.8rem;
`;
const StyledCostExpensesGraph = styled(CostExpensesGraph)`
	transform: translateY(-0.5rem);
`;
