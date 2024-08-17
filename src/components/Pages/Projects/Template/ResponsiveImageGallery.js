import { styled } from 'styled-components';
import { useRef, useContext, useState, useEffect } from 'react';
import { ResponsiveContext } from '../../../../ResponsiveContext';

import { ReactComponent as Chevron_left } from '../../../../assets/images/Projects/ImageGallery/chevron_left.svg';
import { ReactComponent as Chevron_right } from '../../../../assets/images/Projects/ImageGallery/chevron_right.svg';
import { ReactComponent as Close } from '../../../../assets/images/Projects/ImageGallery/close.svg';

export default function ResponsiveImageGallery({
	imageGalleryProps: { images }
}) {
	// large image logic
	const [enlargedImage, setEnlargedImage] = useState(-1);

	const handleLeftCLick = () => {
		setEnlargedImage(enlargedImage - 1);
		if (enlargedImage - 1 < 0) {
			setEnlargedImage(images.length - 1);
		} else {
			setEnlargedImage(enlargedImage - 1);
		}
	};

	const handleRightCLick = () => {
		if (enlargedImage + 1 === images.length) {
			setEnlargedImage(0);
		} else {
			setEnlargedImage(enlargedImage + 1);
		}
	};
	// other logic
	const { isMobile, isTablet, isDesktop } = useContext(ResponsiveContext);

	const ResponsiveConfig = useRef({
		ImageContainerHeightInPxRef: 7,
		ImageGalleryRowWidthInPxRef: 1408,
		ContainerPaddingInPx: 64,
		MarginBetweenRowsInPx: 16,
		ColumnGapInPx: 16
	});

	if (isMobile) {
		ResponsiveConfig.current = {
			ImageContainerHeightInPxRef: 140,
			ImageGalleryRowWidthInPxRef: 344,
			ContainerPaddingInPx: 8,
			MarginBetweenRowsInPx: 8,
			ColumnGapInPx: 8
		};
	} else if (isTablet) {
		ResponsiveConfig.current = {
			ImageContainerHeightInPxRef: 173,
			ImageGalleryRowWidthInPxRef: 786,
			ContainerPaddingInPx: 24,
			MarginBetweenRowsInPx: 8,
			ColumnGapInPx: 8
		};
	} else if (isDesktop) {
		ResponsiveConfig.current = {
			ImageContainerHeightInPxRef: 367,
			ImageGalleryRowWidthInPxRef: 1408,
			ContainerPaddingInPx: 64,
			MarginBetweenRowsInPx: 16,
			ColumnGapInPx: 16
		};
	} else {
		ResponsiveConfig.current = {
			ImageContainerHeightInPxRef: 367,
			ImageGalleryRowWidthInPxRef: 1408,
			ContainerPaddingInPx: 64,
			MarginBetweenRowsInPx: 16,
			ColumnGapInPx: 16
		};
	}

	const [
		imageGalleryRowWidthFromWindowWidthInPxState,
		setImageGalleryRowWidthFromWindowWidthInPxState
	] = useState(
		Math.min(
			document.body.clientWidth -
				ResponsiveConfig.current.ContainerPaddingInPx -
				ResponsiveConfig.current.ContainerPaddingInPx,
			1408
		)
	);

	const handleResize = () => {
		setImageGalleryRowWidthFromWindowWidthInPxState(
			Math.min(
				document.body.clientWidth -
					ResponsiveConfig.current.ContainerPaddingInPx -
					ResponsiveConfig.current.ContainerPaddingInPx,
				1408
			)
		);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const galleryAllRows = useRef([]);
	const createGalleryRows = () => {
		const rowWidth = imageGalleryRowWidthFromWindowWidthInPxState;
		let rowsArr = [];
		let rowImagesArr = [];
		let currentRowImagesTotalWidth = 0;
		images.forEach((image, i) => {
			let aspectRatio = image.naturalWidthInPx / image.naturalHeightInPx;
			let currentImageWidth =
				ResponsiveConfig.current.ImageContainerHeightInPxRef * aspectRatio;

			//add image src to row and its width to total
			rowImagesArr.push(image);
			currentRowImagesTotalWidth += currentImageWidth;
			if (currentRowImagesTotalWidth > rowWidth) {
				//if row is now full
				rowsArr.push(rowImagesArr);
				rowImagesArr = [];
				currentRowImagesTotalWidth = 0;
			}
			// 	// tis should acount for the gaps but it seams not to be needed fo now
			// else {
			// 	currentRowImagesTotalWidth +=
			// 		ResponsiveConfig.current.MarginBetweenRowsInPx;
			// }
		});
		//if there is anything left in an unfilled row add that to the gallery as well
		if (rowImagesArr) {
			rowsArr.push(rowImagesArr);
		}
		return rowsArr;
	};
	galleryAllRows.current = createGalleryRows();

	return (
		<Container
			className={`padding_${ResponsiveConfig.current.ContainerPaddingInPx}px`}
		>
			<GalleryRowsContainer>
				{galleryAllRows.current.map((row, i) => {
					return (
						<ImageGalleryRow
							width={`${imageGalleryRowWidthFromWindowWidthInPxState}px`}
							key={i}
							className={`margin_bottom_${ResponsiveConfig.current.MarginBetweenRowsInPx}px column_gap_${ResponsiveConfig.current.ColumnGapInPx}px`}
						>
							{row.map((image, index) => {
								return (
									<PictureElement
										ResponsiveConfig={ResponsiveConfig}
										image={image}
										handleClick={() => setEnlargedImage(image.explicitIndex)}
										key={image.explicitIndex}
										ImageContainerHeightConfigInPx={
											ResponsiveConfig.current.ImageContainerHeightInPxRef
										}
									/>
								);
							})}
						</ImageGalleryRow>
					);
				})}
			</GalleryRowsContainer>
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
}

const PictureElement = ({
	image,
	handleClick,
	ImageContainerHeightConfigInPx
}) => {
	let aspectRatio = image.naturalWidthInPx / image.naturalHeightInPx;
	let calculatedWidth = ImageContainerHeightConfigInPx * aspectRatio;
	return (
		<ImageContainer
			width={`${calculatedWidth}px`}
			height={`${ImageContainerHeightConfigInPx}px`}
		>
			<StyledImg
				loading="lazy"
				src={image.image}
				alt={image.description}
				onClick={handleClick}
			/>
		</ImageContainer>
	);
};
const Container = styled.div`
	&.padding_64px {
		padding: 64px;
	}
	&.padding_24px {
		padding: 24px;
	}
	&.padding_8px {
		padding: 8px;
	}
`;
const GalleryRowsContainer = styled.div``;

const ImageGalleryRow = styled.div`
	width: calc(${props => props.width});
	display: flex;
	margin: auto;
	column-gap: 1.6rem;
	margin-bottom: 1.6rem;
	&.margin_bottom_64px {
		margin-bottom: 64px;
	}
	&.margin_bottom_24px {
		margin-bottom: 24px;
	}
	&.margin_bottom_8px {
		margin-bottom: 8px;
	}
	&.column_gap_16px {
		column-gap: 16px;
	}
	&.column_gap_8px {
		column-gap: 8px;
	}
	&:last-child {
		margin-bottom: 0px;
	}
`;

const ImageContainer = styled.div`
	width: calc(${props => props.width});
	height: calc(${props => props.height});
`;

const StyledImg = styled.img`
	height: 100%;
	background-color: ${props => props.theme.desktop.dark_1};
	object-fit: cover;
	cursor: pointer;
	width: 100%; // this was max-width 100% but i changed it to prevent the last image in a row to not be wide enought for its container , which might happen because of the maths being of but it is an acceptable fix for now
`;

// enlarged Image styles ----------------------------------------
const LargeImage = ({ image }) => {
	return (
		<LargeStyledImage
			loading="lazy"
			src={image.largeImage}
			alt={image.description}
		/>
	);
};
const ScreenOverlay = styled.div`
	position: fixed;
	z-index: 30;
	width: 100vw; // may have to be % to account for scrollbar
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
	max-width: 90vw;
	max-height: 80vh;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	z-index: 30;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LargeStyledImage = styled.img`
	width: auto;
	max-width: 90vw;
	max-height: 80vh;
	background-color: ${props => props.theme.desktop.dark_1};
	width: auto;
	text-align: center;
`;

const Left = styled.div`
	position: absolute;
	height: 60%;
	width: 30%;
	z-index: 30;
	left: 0rem;
	display: flex;
	align-items: center;
	padding-left: 2.4rem;
	cursor: pointer;
	&:hover > div {
		transform: scale(1.3);
	}

	@media (max-width: 480px) {
		& div {
			transform: scale(0.5);
		}
		&:hover > div {
			transform: scale(calc(0.5 * 1.3));
		}
		padding-left: 0rem;
	}

	//adjust size thats it i think
`;
const Gradient = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4.8rem;
	height: 4.8rem;
	z-index: 29;
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
	width: 30%;
	z-index: 30;
	right: 0rem;
	display: flex;
	align-items: center;
	justify-content: right;
	padding-right: 2.4rem;
	cursor: pointer;
	&:hover > div {
		transform: scale(1.3);
	}
	@media (max-width: 480px) {
		& div {
			transform: scale(0.5);
		}
		&:hover > div {
			transform: scale(calc(0.5 * 1.3));
		}
		padding-right: 0rem;
	}
`;
const RightArrow = styled(Chevron_right)`
	width: 1.7rem;
	height: 2.7rem;
`;
const TopRight = styled.div`
	position: absolute;
	height: 20%;
	width: 30%;
	z-index: 30;
	right: 0rem;
	top: 0rem;
	display: flex;
	align-items: top;
	justify-content: right;
	padding-top: 2rem;
	padding-right: 2.4rem;
	cursor: pointer;
	&:hover > div {
		transform: scale(1.3);
	}
	@media (max-width: 480px) {
		& div {
			transform: scale(0.5);
		}
		&:hover > div {
			transform: scale(calc(0.5 * 1.3));
		}
		padding-top: 0rem;
		padding-right: 0rem;
	}
`;
const X = styled(Close)``;
