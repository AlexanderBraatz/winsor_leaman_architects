import Template from '../Template/Template.js';

//hero
import heroImage from '../../../../assets/images/ProjectHero/hero.png';
//sidebar
import thumbnailImage1 from '../../../../assets/images/ProjectHero/side1.png';
import thumbnailImage2 from '../../../../assets/images/ProjectHero/side2.png';
import thumbnailImage3 from '../../../../assets/images/ProjectHero/side3.png';
import thumbnailImage4 from '../../../../assets/images/ProjectHero/side4.png';
import thumbnailImage5 from '../../../../assets/images/ProjectHero/side5.png';
//imageGallery
import image1 from '../../../../assets/images/PlaceholderImage.png';

const Houses = () => {
	const housesData = {
		heroProps: {
			sideBarProps: {
				thumbnails: [
					{
						to: '/projects/houses/1',
						image: thumbnailImage1
					},
					{
						to: '/projects/houses/2',
						image: thumbnailImage2
					},
					{
						to: '/projects/houses/3',
						image: thumbnailImage3
					},
					{
						to: '/projects/houses/4',
						image: thumbnailImage4
					},
					{
						to: '/projects/houses/5',
						image: thumbnailImage5
					}
				]
			},
			heroImage: {
				heroImage,
				alt: 'Farm in Pucklechurch'
			},
			imageLabel: 'Farm in Pucklechurch'
		},
		textContentProps: {
			heading: 'Project Title',
			year: 'Year',
			descriptionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.`,
			feedbackHeading: 'Client Feedback',
			feedbackText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.`
		},
		imageGalleryProps: {
			images: [
				{
					image: image1,
					largeImage: image1,
					width: '13.5rem',
					largeWidth: '27rem',
					description: 'description'
				},
				{
					image: image1,
					largeImage: image1,
					width: '20rem',
					largeWidth: '40rem',
					description: 'description'
				},
				{
					image: image1,
					largeImage: image1,
					width: '24.2rem',
					largeWidth: '28.4rem',
					description: 'description'
				},
				{
					image: image1,
					largeImage: image1,
					width: '18.7rem',
					largeWidth: '37.4rem',
					description: 'description'
				},
				{
					image: image1,
					largeImage: image1,
					width: '19.3rem',
					largeWidth: '38.6rem',
					description: 'description'
				},
				{
					image: image1,
					largeImage: image1,
					width: '19.6rem',
					largeWidth: '39.2rem',
					description: 'description'
				}
			]
		}
	};
	return <Template data={housesData} />;
};

export default Houses;
