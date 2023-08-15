import styled from 'styled-components';
import { useState } from 'react';

const ImageGallery = ({ imageGalleryProps: { images } }) => {
	const [enlargedImage, setEnlargedImage] = useState(-1);

	return (
		<Container>
			<ImageGalleryContainer>
				{images.map((image, index) => (
					<Image
						image={image}
						handleClick={() => setEnlargedImage(index)}
						key={index}
					/>
				))}
			</ImageGalleryContainer>
			{enlargedImage > -1 ? (
				<>
					<ScreenOverlay onClick={() => setEnlargedImage(-1)}></ScreenOverlay>
					<LargeImage image={images[enlargedImage]} />
				</>
			) : null}
		</Container>
	);
};

const Image = ({ image, handleClick }) => {
	return (
		<StyledImage
			src={image.image}
			width={image.width}
			alt={image.description}
			onClick={handleClick}
		/>
	);
};
const LargeImage = ({ image }) => {
	return (
		<LargeStyledImage
			src={image.largeImage}
			width={image.largeWidth}
			alt={image.description}
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
const LargeStyledImage = styled.img`
	height: 38rem;
	background-color: ${props => props.theme.desktop.dark1};
	width: ${props => props.width};
	margin-bottom: 1.6rem;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const ScreenOverlay = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.25);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default ImageGallery;
