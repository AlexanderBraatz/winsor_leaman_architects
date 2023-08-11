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

const Renovation = () => {
	const renovationsData = {
		heroProps: {
			sideBarProps: {
				thumbnails: [
					{
						id: '1',
						to: '/projects/renovation/1',
						image: thumbnailImage1,
						hover: true,
						isActive: true
					},
					{
						id: '2',
						to: '/projects/renovation/2',
						image: thumbnailImage2
					},
					{
						id: '3',
						to: '/projects/renovation/3',
						image: thumbnailImage3
					},
					{
						id: '4',
						to: '/projects/renovation/4',
						image: thumbnailImage4
					},
					{
						id: '5',
						to: '/projects/renovation/5',
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
			]
		}
	};
	return <Template data={renovationsData} />;
};

export default Renovation;
