import styled from 'styled-components';
import image1 from '../../../../assets/images/PlaceholderImage.png';

const Extensions = props => {
	const images = [
		{
			key: 1,
			image: image1,
			width: '13.5rem',
			description: 'description'
		},
		{
			key: 2,
			image: image1,
			width: '20rem',
			description: 'description'
		},
		{
			key: 3,
			image: image1,
			width: '24.2rem',
			description: 'description'
		},
		{
			key: 4,
			image: image1,
			width: '18.7rem',
			description: 'description'
		},
		{
			key: 5,
			image: image1,
			width: '19.3rem',
			description: 'description'
		},
		{
			key: 6,
			image: image1,
			width: '19.6rem',
			description: 'description'
		}
	];

	return (
		<Container>
			<ImageGalleryContainer>
				{images.map(image => (
					<Image image={image} />
				))}
			</ImageGalleryContainer>
		</Container>
	);
};

const Image = ({ image }) => {
	return (
		<StyledImage
			src={image.image}
			width={image.width}
			alt={image.description}
			key={image.key}
		/>
	);
};
const Container = styled.div`
	padding-top: 4rem;
	padding-bottom: 2.4rem;
`;

const ImageGalleryContainer = styled.div`
	width: 60.9rem;
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	column-gap: 1.6rem;
`;

const StyledImage = styled.img`
	height: 19rem;
	background-color: ${props => props.theme.desktop.dark1};
	width: ${props => props.width};
	margin-bottom: 1.6rem;
`;

export default Extensions;
