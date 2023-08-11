import styled from 'styled-components';

const Extensions = ({ imageGalleryProps: { images } }) => {
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
