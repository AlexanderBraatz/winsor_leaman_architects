import { styled } from 'styled-components';
import { useRef, useContext, useState, useEffect } from 'react';
import { ResponsiveContext } from '../../../ResponsiveContext';

//1BradleyStokeEvangelicalChurch
import Secondary1_desktop1 from '../../../assets//images/ProjectCategories/Churches_6/1BradleyStokeEvangelicalChurch/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop1 from '../../../assets/images/ProjectCategories/Churches_6/1BradleyStokeEvangelicalChurch/SecondaryImages/Desktop/Secondary2_desktop.jpg';
import Secondary3_desktop1 from '../../../assets/images/ProjectCategories/Churches_6/1BradleyStokeEvangelicalChurch/SecondaryImages/Desktop/Secondary3_desktop.jpg';
import Secondary4_desktop1 from '../../../assets/images/ProjectCategories/Churches_6/1BradleyStokeEvangelicalChurch/SecondaryImages/Desktop/Secondary4_desktop.jpg';
import Secondary5_desktop1 from '../../../assets/images/ProjectCategories/Churches_6/1BradleyStokeEvangelicalChurch/SecondaryImages/Desktop/Secondary5_desktop.jpg';

export default function StyleGuide() {
	const images = [
		{
			image: Secondary1_desktop1,
			largeImage: Secondary1_desktop1,
			width: '628px',
			largeWidth: '27rem',
			naturalWidthInPx: 2400,
			naturalHeightInPx: 1441,
			description: 'one'
		},
		{
			image: Secondary2_desktop1,
			largeImage: Secondary2_desktop1,
			width: '628px',
			largeWidth: '40rem',
			naturalWidthInPx: 2400,
			naturalHeightInPx: 1525,
			description: 'two'
		},
		{
			image: Secondary3_desktop1,
			largeImage: Secondary2_desktop1,
			width: '540px',
			largeWidth: '28.4rem',
			naturalWidthInPx: 2400,
			naturalHeightInPx: 1525,
			description: 'three'
		},
		{
			image: Secondary4_desktop1,
			largeImage: Secondary4_desktop1,
			width: '1540px',
			largeWidth: '37.4rem',
			naturalWidthInPx: 2400,
			naturalHeightInPx: 1600,
			description: 'four'
		},
		{
			image: Secondary5_desktop1,
			largeImage: Secondary5_desktop1,
			width: '140px',
			largeWidth: '38.6rem',
			naturalWidthInPx: 2400,
			naturalHeightInPx: 1580,
			description: 'five'
		}
	];

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
			window.innerWidth -
				ResponsiveConfig.current.ContainerPaddingInPx -
				ResponsiveConfig.current.ContainerPaddingInPx,
			1408
		)
	);

	const handleResize = () => {
		setImageGalleryRowWidthFromWindowWidthInPxState(
			Math.min(
				window.innerWidth -
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
		});
		//if there is anything left in an unfilled row add that to the gallery as well
		if (rowImagesArr) {
			rowsArr.push(rowImagesArr);
		}
		return rowsArr;
	};
	galleryAllRows.current = createGalleryRows();

	return (
		<BackgroundColor>
			<Container
				className={`margin_${ResponsiveConfig.current.ContainerPaddingInPx}px`}
			>
				{galleryAllRows.current.map((row, i) => {
					return (
						<ImageGalleryRow
							// width={`${ResponsiveConfig.current.ImageGalleryRowWidthInPxRef}px`}
							width={`${imageGalleryRowWidthFromWindowWidthInPxState}px`}
							key={i}
							className={`margin_bottom_${ResponsiveConfig.current.MarginBetweenRowsInPx}px column_gap_${ResponsiveConfig.current.ColumnGapInPx}px`}
						>
							{row.map((image, index) => {
								return (
									<PictureElement
										ResponsiveConfig={ResponsiveConfig}
										image={image}
										// handleClick={() => setEnlargedImage(index)}
										key={index}
										ImageContainerHeightConfigInPx={
											ResponsiveConfig.current.ImageContainerHeightInPxRef
										}
									/>
								);
							})}
						</ImageGalleryRow>
					);
				})}
			</Container>
		</BackgroundColor>
	);
}
const BackgroundColor = styled.div`
	// might remove in implementation , only here for not having margin of container mess up background look
	background-color: ${props => props.theme.desktop.dark_1};
	height: fit-content;
`;

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
	&.margin_64px {
		margin: 64px;
	}
	&.margin_24px {
		margin: 24px;
	}
	&.margin_8px {
		margin: 8px;
	}
`;

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
	max-width: 100%;
`;
// const TestContainer = styled.div`
// 	display: flex;
// 	align-items: flex-start;
// 	flex-direction: column;
// `;
// const H1 = styled.h1`
// 	font-family: 'Heading1', Arial, Serif;
// 	font-size: 64px;
// `;
// const H2 = styled.h1`
// 	font-family: 'Heading2', Arial, Serif;
// 	font-size: 48px;
// `;
// const H3 = styled.h2`
// 	font-family: 'Heading3', Arial, Serif;
// 	font-size: 36px;
// `;
// const Subheading = styled.h3`
// 	font-family: 'Subheading', Arial, Serif;
// 	font-size: 32px;
// `;
// const Logo = styled.p`
// 	font-family: 'Logo', Arial, Serif;
// 	font-size: 28px;
// `;
// const Button = styled.p`
// 	font-family: 'Button', Arial, Serif;
// 	font-size: 22px;
// `;
// const Body = styled.p`
// 	font-family: 'Body', Arial, Serif;
// 	font-size: 16px;
// `;
// const SmallText = styled.p`
// 	font-family: 'SmallText', Arial, Serif;
// 	font-size: 14px;
// `;
