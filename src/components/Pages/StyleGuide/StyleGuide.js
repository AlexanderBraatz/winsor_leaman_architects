import { styled } from 'styled-components';
import { useRef } from 'react';

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

	const galleryAllRows = useRef([]);
	const ImageContainerHeightInPxRef = useRef(367); //used in aspect ratio calculation and to set height

	const createGalleryRows = () => {
		const pixelStringToNumber = string => {
			let str = string;
			str = str.slice(0, -2);
			let number = Number(str);
			return number;
		};
		const rowWidth = pixelStringToNumber('1408px');
		let rowsArr = [];
		let rowImagesArr = [];
		let currentRowImagesTotalWidth = 0;

		images.forEach((image, i) => {
			let aspectRatio = image.naturalWidthInPx / image.naturalHeightInPx;
			let currentImageWidth = ImageContainerHeightInPxRef.current * aspectRatio;

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
		<>
			<Container>
				{galleryAllRows.current.map((row, i) => {
					return (
						<ImageGalleryRow key={i}>
							{row.map((image, index) => {
								return (
									<PictureElement
										image={image}
										// handleClick={() => setEnlargedImage(index)}
										key={index}
										ImageContainerHeightInPxRef={
											ImageContainerHeightInPxRef.current
										}
									/>
								);
							})}
						</ImageGalleryRow>
					);
				})}
			</Container>
		</>
	);
}

const PictureElement = ({
	image,
	handleClick,
	ImageContainerHeightInPxRef
}) => {
	let aspectRatio = image.naturalWidthInPx / image.naturalHeightInPx;
	let calculatedWidth = ImageContainerHeightInPxRef * aspectRatio;
	return (
		<ImageContainer
			width={`${calculatedWidth}px`}
			height={`${ImageContainerHeightInPxRef}px`}
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
	padding: 6.4rem;
	/* background-color: red; */
	@media (max-width: 843px) {
		padding: 2.4rem;
	}
`;

const ImageGalleryRow = styled.div`
	width: 140.8rem;
	display: flex;
	margin: auto;
	column-gap: 1.6rem;
	margin-bottom: 1.6rem;
	/* background-color: blue; */
`;

const ImageContainer = styled.div`
	width: calc(${props => props.width});
	height: calc(${props => props.height});
	background-color: calc(${props => props.backgroundColor});
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
