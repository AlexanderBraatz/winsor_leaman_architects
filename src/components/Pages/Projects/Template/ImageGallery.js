import styled from 'styled-components';
import { useState } from 'react';

import { ReactComponent as Chevron_left } from '../../../../assets/images/Projects/ImageGallery/chevron_left.svg';
import { ReactComponent as Chevron_right } from '../../../../assets/images/Projects/ImageGallery/chevron_right.svg';
import { ReactComponent as Close } from '../../../../assets/images/Projects/ImageGallery/close.svg';

const ImageGallery = ({ imageGalleryProps: { images } }) => {
	const [enlargedImage, setEnlargedImage] = useState(-1);

	const handleLeftCLick = () => {
		setEnlargedImage(enlargedImage - 1);
	};

	const handleRightCLick = () => {
		if (enlargedImage + 1 === images.length) {
			setEnlargedImage(-1);
		} else {
			setEnlargedImage(enlargedImage + 1);
		}
	};

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
					<LargeImageContainer>
						<Left onClick={() => handleLeftCLick()}>
							<Gradient>
								<LeftArrow />
							</Gradient>
						</Left>
						<LargeImage image={images[enlargedImage]} />
						<Right onClick={() => handleRightCLick()}>
							<Gradient>
								<RightArrow />
							</Gradient>
						</Right>
						<TopRight onClick={() => setEnlargedImage(-1)}>
							<Gradient>
								<X />
							</Gradient>
						</TopRight>
					</LargeImageContainer>
				</>
			) : null}
		</Container>
	);
};

const Image = ({ image, handleClick }) => {
	return (
		<ImageContainer>
			<StyledImage
				src={image.image}
				width={image.width}
				alt={image.description}
				onClick={handleClick}
			/>
		</ImageContainer>
	);
};
const LargeImage = ({ image }) => {
	return (
		<LargeStyledImage
			src={image.largeImage}
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
	& div:last-child {
		max-width: 48.686%; //calculated from half the row minus half the width of the grid gap of 16px
	}
`;

const ImageContainer = styled.div`
	flex-grow: 1;
	height: 37.7rem;
	background-color: ${props => props.theme.desktop.dark1};
	width: ${props => props.width};
	margin-bottom: 1.6rem;
`;
const StyledImage = styled.img`
	height: 100%;
	background-color: ${props => props.theme.desktop.dark1};
	min-width: 100%;
	object-fit: cover;
`;

const ScreenOverlay = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LargeImageContainer = styled.div`
	position: fixed;
	width: auto;
	height: 80vh;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	z-index: 30;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LargeStyledImage = styled.img`
	height: 80vh;
	background-color: ${props => props.theme.desktop.dark1};
	width: auto;
	text-align: center;
`;

const Left = styled.div`
	position: absolute;
	height: 60%;
	width: 20rem;
	z-index: 30;
	left: 0rem;
	display: flex;
	align-items: center;
	padding-left: 2.4rem;
	&:hover > div {
		transform: scale(1.3);
	}
`;
const Gradient = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4.8rem;
	height: 4.8rem;
	background: radial-gradient(
		40.62% 40.62% at 50% 50%,
		rgba(32, 43, 48, 0.6) 0%,
		rgba(32, 43, 48, 0) 100%
	);
	transition: transform 0.1s linear;
`;
const LeftArrow = styled(Chevron_left)`
	width: 1.7rem;
	height: 2.7rem;
`;
const Right = styled.div`
	position: absolute;
	height: 60%;
	width: 20rem;
	z-index: 30;
	right: 0rem;
	display: flex;
	align-items: center;
	justify-content: right;
	padding-right: 2.4rem;

	&:hover > div {
		transform: scale(1.3);
	}
`;
const RightArrow = styled(Chevron_right)`
	width: 1.7rem;
	height: 2.7rem;
`;
const TopRight = styled.div`
	position: absolute;
	height: 20%;
	width: 20rem;
	z-index: 30;
	right: 0rem;
	top: 0rem;
	display: flex;
	align-items: top;
	justify-content: right;
	padding-top: 2rem;
	padding-right: 2.4rem;
	&:hover > div {
		transform: scale(1.3);
	}
`;
const X = styled(Close)``;
export default ImageGallery;
