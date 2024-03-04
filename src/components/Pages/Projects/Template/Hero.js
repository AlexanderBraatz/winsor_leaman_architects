import React, { useRef, useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.js';
import { ReactComponent as InfoIcon } from '../../../../assets/images/ProjectHero/Info-2.svg';
import styled from 'styled-components';

export default function Hero({
	sideBarProps,
	showcaseProps: { hero, imageLabel },
	id
}) {
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
				<HeroImageContainer>
					<PlaceholderAndImage hero={hero} />
				</HeroImageContainer>
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
	width: 100%;
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
	&.NotComplete {
		transition: filter 250ms ease-in-out;
		filter: blur(5px);
	}
	&.NotComplete img {
		// this is so the image fades in after it is loaded
		transition: transform 0.3s linear, opacity 250ms ease-in-out;
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
`;

const SimpleAnchor = styled.div`
	height: 0px;
	pointer-events: none;
`;

const StyledHero = styled.div`
	width: 100vw;
	background-color: ${props => props.theme.desktop.dark_extra};
	height: calc(
		100vh - 4.7rem - 10.4rem
	); // accounting for the ProjectsNavBar and PageNavbar
	display: flex;
	margin: auto;
	justify-content: left;
	@media (max-width: 843px) {
		flex-direction: column;
		// height: calc(100vh - 9.6rem - 4.7rem);
		height: fit-content;
		height: 500px;
	}
`;

const HeroImageContainer = styled.div`
	/* height: 100%; */
	width: 100%;
	position: relative;
	margin-left: 3.9rem;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 843px) {
		margin-left: 0rem;
		height: 100%;
	}
`;
const HeroImage = styled.img`
	max-width: 100%;
	height: 100%;
	max-height: auto;
	object-fit: cover;
	object-position: center;
	background-color: ${props => props.theme.desktop.dark_3};
	opacity: 0;
	transition: transform 0.3s linear;
	position: relative;
	&.loaded {
		opacity: 1;
	}
	/* @media (max-width: 843px) {
		min-width: 100%;
		max-width: auto;
		max-height: 56vh;
		min-height: 38vh;
	}
	@media (max-width: 480px) {
		max-height: 42vh;
		min-height: 20vh;
	} */
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
	font-family: 'SubHeading', Arial, Serif;
	font-size: 2.8rem;
	line-height: 4rem;
	margin-right: 2rem;
`;
const LabelIcon = styled(InfoIcon)`
	width: 3.6rem;
	height: 3.6rem;
`;
