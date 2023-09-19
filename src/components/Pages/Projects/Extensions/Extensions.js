import Template from '../Template/Template.js';
//thumbnails ---------------------------------------------------------------------------------------------------

//1HouseinAbbotsLeigh
import thumbnailDesktop1 from '../../../../assets/images/ProjectCategories/Extensions_8/1HouseinAbbotsLeigh/Thumbnails/Thumbnail_desktop.jpg';
//2HouseinWestbury_on_Trym
import thumbnailDesktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/Thumbnails/Thumbnail_desktop.jpg';
//3GardenOffice
import thumbnailDesktop3 from '../../../../assets/images/ProjectCategories/Extensions_8/3GardenOffice/Thumbnails/Thumbnail_desktop.jpg';
//4DaisychainNursery
import thumbnailDesktop4 from '../../../../assets/images/ProjectCategories/Extensions_8/4DaisychainNursery/Thumbnails/Thumbnail_desktop.jpg';
//6HouseinRedland
import thumbnailDesktop5 from '../../../../assets/images/ProjectCategories/Extensions_8/6HouseinRedland/Thumbnails/Thumbnail_desktop.jpg';

//hero ---------------------------------------------------------------------------------------------------
//1HouseinAbbotsLeigh
import heroImageDesktop1 from '../../../../assets/images/ProjectCategories/Extensions_8/1HouseinAbbotsLeigh/HeroImages/Hero_desktop.jpg';
//2HouseinWestbury_on_Trym
import heroImageDesktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/HeroImages/Hero_desktop.jpg';
//3GardenOffice
import heroImageDesktop3 from '../../../../assets/images/ProjectCategories/Extensions_8/3GardenOffice/HeroImages/Hero_desktop.jpg';
//4DaisychainNursery
import heroImageDesktop4 from '../../../../assets/images/ProjectCategories/Extensions_8/4DaisychainNursery/HeroImages/Hero_desktop.jpg';
//6HouseinRedland
import heroImageDesktop5 from '../../../../assets/images/ProjectCategories/Extensions_8/6HouseinRedland/HeroImages/Hero_desktop.jpg';

//SecondaryImages ---------------------------------------------------------------------------------------------------
//desktop
//1HouseinAbbotsLeigh
import Secondary1_desktop1 from '../../../../assets/images/ProjectCategories/Extensions_8/1HouseinAbbotsLeigh/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop1 from '../../../../assets/images/ProjectCategories/Extensions_8/1HouseinAbbotsLeigh/SecondaryImages/Desktop/Secondary2_desktop.jpg';
import Secondary3_desktop1 from '../../../../assets/images/ProjectCategories/Extensions_8/1HouseinAbbotsLeigh/SecondaryImages/Desktop/Secondary3_desktop.jpg';
import Secondary4_desktop1 from '../../../../assets/images/ProjectCategories/Extensions_8/1HouseinAbbotsLeigh/SecondaryImages/Desktop/Secondary4_desktop.jpg';

//2HouseinWestbury_on_Trym
import Secondary1_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary2_desktop.jpg';
import Secondary3_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary3_desktop.jpg';
import Secondary4_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary4_desktop.jpg';
import Secondary5_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary5_desktop.jpg';
import Secondary6_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary6_desktop.jpg';
import Secondary7_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary7_desktop.jpg';
import Secondary8_desktop2 from '../../../../assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/SecondaryImages/Desktop/Secondary8_desktop.jpg';
//src/assets/images/ProjectCategories/Extensions_8/2HouseinWestbury_on_Trym/Secondary Images/Desktop/Secondary8_desktop.jpg
//3GardenOffice
import Secondary1_desktop3 from '../../../../assets/images/ProjectCategories/Extensions_8/3GardenOffice/SecondaryImages/Desktop/Secondary1_desktop.jpg';

//4DaisychainNursery

import Secondary1_desktop4 from '../../../../assets/images/ProjectCategories/Extensions_8/4DaisychainNursery/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop4 from '../../../../assets/images/ProjectCategories/Extensions_8/4DaisychainNursery/SecondaryImages/Desktop/Secondary2_desktop.jpg';
import Secondary3_desktop4 from '../../../../assets/images/ProjectCategories/Extensions_8/4DaisychainNursery/SecondaryImages/Desktop/Secondary3_desktop.jpg';
import Secondary4_desktop4 from '../../../../assets/images/ProjectCategories/Extensions_8/4DaisychainNursery/SecondaryImages/Desktop/Secondary4_desktop.jpg';
import Secondary5_desktop4 from '../../../../assets/images/ProjectCategories/Extensions_8/4DaisychainNursery/SecondaryImages/Desktop/Secondary5_desktop.jpg';

//6HouseinRedland
import Secondary1_desktop5 from '../../../../assets/images/ProjectCategories/Extensions_8/6HouseinRedland/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop5 from '../../../../assets/images/ProjectCategories/Extensions_8/6HouseinRedland/SecondaryImages/Desktop/Secondary2_desktop.jpg';
import Secondary3_desktop5 from '../../../../assets/images/ProjectCategories/Extensions_8/6HouseinRedland/SecondaryImages/Desktop/Secondary3_desktop.jpg';

const Extensions = () => {
	const extensionsData = {
		heroProps: {
			sideBarProps: {
				thumbnails: [
					{
						to: '/projects/extensions/1',
						thumbnailDesktop: thumbnailDesktop1
					},
					{
						to: '/projects/extensions/2',
						thumbnailDesktop: thumbnailDesktop2
					},
					{
						to: '/projects/extensions/3',
						thumbnailDesktop: thumbnailDesktop3
					},
					{
						to: '/projects/extensions/4',
						thumbnailDesktop: thumbnailDesktop4
					},
					{
						to: '/projects/extensions/5',
						thumbnailDesktop: thumbnailDesktop5
					}
				]
			},
			showcaseProps: {
				1: {
					hero: {
						heroImageDesktop: heroImageDesktop1,
						alt: 'Rownham Hill'
					},
					imageLabel: 'Rownham Hill'
				},
				2: {
					hero: {
						heroImageDesktop: heroImageDesktop2,
						alt: 'House in Westbury-on-Trym'
					},
					imageLabel: 'House in Westbury-on-Trym'
				},
				3: {
					hero: {
						heroImageDesktop: heroImageDesktop3,
						alt: 'Garden Office'
					},
					imageLabel: 'Garden Office'
				},
				4: {
					hero: {
						heroImageDesktop: heroImageDesktop4,
						alt: 'Daisychain Nursery'
					},
					imageLabel: 'Daisychain Nursery'
				},
				5: {
					hero: {
						heroImageDesktop: heroImageDesktop5,
						alt: 'House in Redland'
					},
					imageLabel: 'House in Redland'
				}
			}
		},
		1: {
			textContentProps: {
				heading: 'Rownham Hill',
				year: '2009',
				descriptionText: `This build project involved replacing a conservatory that was too hot in summer and too cold in winter. Additionally, we extended the ground floor kitchen area and entrance, added a new first-floor balcony from the master bedroom, and converted the second-floor sun terrace into a balcony and playroom. We also fitted solar panelling to the roof.`,
				feedbackHeading: '',
				feedbackText: ``
			},
			imageGalleryProps: {
				images: [
					{
						image: Secondary1_desktop1,
						largeImage: Secondary1_desktop1,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary2_desktop1,
						largeImage: Secondary2_desktop1,
						width: '189px',
						largeWidth: '40rem',
						description: 'description'
					},
					{
						image: Secondary3_desktop1,
						largeImage: Secondary2_desktop1,
						width: '240px',
						largeWidth: '28.4rem',
						description: 'description'
					},
					{
						image: Secondary4_desktop1,
						largeImage: Secondary4_desktop1,
						width: '240px',
						largeWidth: '37.4rem',
						description: 'description'
					}
				]
			}
		},
		2: {
			textContentProps: {
				heading: 'House in Westbury-on-Trym',
				year: '2016 - 2018',
				descriptionText: `This 1930s property has been expanded with a kitchen-dining extension and a lead-clad dormer at the rear to create a new guest bedroom and study with an ensuite bathroom in the attic. We also insulated the brickwork cavity to improve the EPC of the building. To make the space more comfortable, we reconfigured the ground floor for underfloor heating and added radiators on the first and attic floors.`,
				feedbackHeading: '',
				feedbackText: ``
			},
			imageGalleryProps: {
				images: [
					{
						image: Secondary1_desktop2,
						largeImage: Secondary1_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary2_desktop2,
						largeImage: Secondary2_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary3_desktop2,
						largeImage: Secondary3_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary4_desktop2,
						largeImage: Secondary4_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary5_desktop2,
						largeImage: Secondary5_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary6_desktop2,
						largeImage: Secondary6_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary7_desktop2,
						largeImage: Secondary7_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary8_desktop2,
						largeImage: Secondary8_desktop2,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					}
				]
			}
		},
		3: {
			textContentProps: {
				heading: 'Garden Office',
				year: '2008',
				descriptionText: `This office was built for the client as a modern foil for their 1950s house.`,
				feedbackHeading: '',
				feedbackText: ``
			},
			imageGalleryProps: {
				images: [
					{
						image: Secondary1_desktop3,
						largeImage: Secondary1_desktop3,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					}
				]
			}
		},
		4: {
			textContentProps: {
				heading: 'Daisychain Nursery',
				year: '2014',
				descriptionText:
					'We were tasked with creating a modern extension to this Grade II listed building. The difference between the playground and basement floor level at the rear made access difficult within this area. Additionally, the limited size of the basement meant that the nursery was unable to bring all the children together in one room.\n\nWe improved circulation by lowering the playground and providing a new hall, together with an office with a window overlooking the playground. The new hall enables the playground to be used during wet or showery weather and also allows more of the children to come together for assemblies.',
				feedbackHeading: '',
				feedbackText: ``
			},
			imageGalleryProps: {
				images: [
					{
						image: Secondary1_desktop4,
						largeImage: Secondary1_desktop4,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary2_desktop4,
						largeImage: Secondary2_desktop4,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary3_desktop4,
						largeImage: Secondary3_desktop4,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary4_desktop4,
						largeImage: Secondary4_desktop4,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary5_desktop4,
						largeImage: Secondary5_desktop4,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					}
				]
			}
		},
		5: {
			textContentProps: {
				heading: 'House in Redland',
				year: '2014',
				descriptionText: `Our design for this project enlarged the open plan living/kitchen/dining area and used an all-timber construction. We took great care to ensure that the extension blended seamlessly with the existing property and had minimal visual impact on the neighbourhood.`,
				feedbackHeading: '',
				feedbackText: ``
			},
			imageGalleryProps: {
				images: [
					{
						image: Secondary1_desktop5,
						largeImage: Secondary1_desktop5,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary2_desktop5,
						largeImage: Secondary2_desktop5,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					},
					{
						image: Secondary3_desktop5,
						largeImage: Secondary3_desktop5,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					}
				]
			}
		}
	};
	return <Template data={extensionsData} />;
};

export default Extensions;
