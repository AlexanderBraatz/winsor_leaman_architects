import React, { useRef, useState, useEffect, useContext } from 'react';
import Sidebar from './components/Sidebar.js';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ProjectHero/arrow_Hero_Label.svg';
import styled from 'styled-components';
import { ResponsiveContext } from './../../../../ResponsiveContext.js';

export default function Hero({
	sideBarProps,
	showcaseProps: { hero, imageLabel },
	id
}) {
	const { isDesktop } = useContext(ResponsiveContext);
	const div = useRef();
	const handleClick = () => {
		div.current.scrollIntoView({
			behavior: 'smooth'
		});
	};
	return (
		<>
			<StyledHero>
				<Sidebar
					sideBarProps={sideBarProps}
					id={id}
				/>
				<HeroImageAndPlaceholderContainer>
					{!isDesktop ? <></> : <LeftSpacer></LeftSpacer>}
					<PlaceholderAndImage hero={hero} />
					{!isDesktop ? <></> : <RightSpacer></RightSpacer>}
				</HeroImageAndPlaceholderContainer>
			</StyledHero>
			<SimpleAnchor ref={div}></SimpleAnchor>
		</>
	);

	function PlaceholderAndImage({ hero }) {
		const [isImageLoaded, setIsImageLoaded] = useState(false);
		const [isImageComplete, setIsImageComplete] = useState(true);
		const blurredImageRef = useRef(null); // tagged the image below

		useEffect(() => {
			const img = blurredImageRef.current;

			const loaded = () => {
				setIsImageLoaded(true);
			};

			const notComplete = () => {
				setIsImageComplete(false);
			};
			if (img.complete) {
				loaded();
			} else {
				notComplete();
				img.addEventListener('load', loaded);

				return () => {
					img.removeEventListener('load', loaded);
				};
			}
		}, []);

		return (
			<StyledPlaceholderAndImage>
				<ImageAndLabelContainer>
					<Placeholder
						src={hero.placeholder}
						className={`blurred-img ${!isImageComplete ? 'NotComplete' : ''} ${
							isImageLoaded ? 'loaded' : ''
						}`}
					></Placeholder>
					<HeroImage
						src={hero.heroImageMobile}
						srcSet={`${hero.heroImageMobile} 1200w,${hero.heroImageTablet} 1366w,${hero.heroImageDesktop} 2400w`}
						sizes="(max-width: 843px) 100vw, calc(100vw - 230px)"
						alt={hero.alt}
						ref={blurredImageRef}
						className={`image blurred-img ${isImageLoaded ? 'loaded' : ''}`}
					/>
					<ImageLabel onClick={handleClick}>
						<LabelText>{imageLabel}</LabelText>
						<LabelIcon />
					</ImageLabel>
				</ImageAndLabelContainer>
			</StyledPlaceholderAndImage>
		);
	}
}

const StyledPlaceholderAndImage = styled.div`
	max-width: fit-content;
	height: 100%;
	display: flex;
	justify-content: center;
`;

const ImageAndLabelContainer = styled.div`
	position: relative;
	max-width: fit-content;
	height: 100%;
`;
const Placeholder = styled.img`
	filter: blur(0px);
	height: 100%;
	object-fit: cover;
	position: relative;
	width: fit-content;
	/* height: 200px;
	width: 200px; */
	max-width: 100%;
	height: 100%;
	height: calc(
		100vh - 4.7rem - 9.2rem
	); // <--this fixes the bug on firefox where Firefox does scale down the image but not the wrapper which keeps the original width of the image as its own width.
	// the bug probably accures because Firefox is unable to find the correct reference height value for all the cascaded height: x%; of the nested elements
	// source: Firefox - container does not adapt width to content when image is scaled down on stack overflow
	max-height: auto;
	object-fit: cover;
	object-position: center;
	&.NotComplete {
		/* transition: filter 250ms ease-in-out; */
		filter: blur(5px);
	}
	&.NotComplete img {
		// this is so the image fades in after it is loaded
		/* transition: transform 0.3s linear, opacity 250ms ease-in-out; */
		opacity: 0;
	}

	&.loaded {
		display: none; // hides placeholder if the placeholder is wider then the image after the image has loaded
	}
	&::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0;
		animation: pulse 2.5s infinite;
		background-color: ${props => props.theme.desktop.grey_5};
	}
	&.loaded::before {
		animation: none;
		content: none;
	}

	@keyframes pulse {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0.2;
		}
		100% {
			opacity: 0;
		}
	}
	@media (max-width: 843px) {
		height: 61.3rem;
	}
	@media (max-width: 480px) {
		height: 24rem;
	}
`;

const SimpleAnchor = styled.div`
	height: 0px;
	pointer-events: none;
`;

const StyledHero = styled.div`
	/* wid th: 100vw; */
	width: 100%;
	background-color: ${props => props.theme.desktop.dark_extra};
	height: calc(
		100vh - 4.7rem - 9.2rem
	); // accounting for the ProjectsNavBar and PageNavbar
	display: flex;
	margin: auto;
	justify-content: left;
	@media (max-width: 843px) {
		flex-direction: column;
		height: fit-content;
	}
`;

const HeroImageAndPlaceholderContainer = styled.div`
	/* min-width: calc(100vw); */
	/* not sure if this is the way  */
	min-width: 100%;
	position: relative;
	left: -22.7rem;
	z-index: 0;
	display: flex;
	justify-content: space-between;
	background-color: ${props => props.theme.desktop.dark_extra};
	overflow: hidden;
	@media (max-width: 843px) {
		left: 0rem;
		justify-content: center;
	}
`;

const HeroImage = styled.img`
	/* display: none; */
	flex-grow: 0;
	max-width: 100%;
	height: 100%;
	height: calc(
		100vh - 4.7rem - 9.2rem
	); // <--this fixes the bug on firefox where Firefox does scale down the image but not the wrapper which keeps the original width of the image as its own width.
	// the bug probably accures because Firefox is unable to find the correct reference height value for all the cascaded height: x%; of the nested elements
	// source: Firefox - container does not adapt width to content when image is scaled down on stack overflow
	max-height: auto;
	object-fit: cover;
	object-position: center;
	background-color: ${props => props.theme.desktop.dark_extra};
	opacity: 0;
	transition: transform 0.3s linear;
	position: relative;
	&.loaded {
		opacity: 1;
	}
	@media (max-width: 843px) {
		height: 61.3rem;
	}
	@media (max-width: 480px) {
		height: 24rem;
	}
`;

const LeftSpacer = styled.div`
	flex-shrink: 0;
	width: 22.7rem;
	background-color: green;
	background-color: ${props => props.theme.desktop.dark_extra};
`;
const RightSpacer = styled.div`
	width: 22.7rem;
	flex-shrink: 1000;
	background-color: ${props => props.theme.desktop.dark_extra};
`;
const ImageLabel = styled.div`
	background-color: ${props => props.theme.desktop.dark_3};
	width: fit-content;
	height: 5.6rem;
	position: absolute;
	left: 0rem;
	bottom: 0rem;
	display: flex;
	align-items: center;
	padding: 0.8rem 1.6rem;
	cursor: pointer;
	@media (max-width: 843px) {
		display: none;
	}
`;
const LabelText = styled.p`
	color: ${props => props.theme.desktop.grey_5};
	text-align: right;
	font-family: 'Jost', Arial, Serif;
	font-weight: 400;
	font-size: 2.4rem;
	line-height: 4rem;
	margin-right: 2rem;
`;
const LabelIcon = styled(ArrowIcon)`
	width: 2.4rem;
	height: 2.4rem;
`;
