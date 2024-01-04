import Template from '../Template/Template.js';

//thumbnails ---------------------------------------------------------------------------------------------------

//1FlatsinBedminster
import thumbnailDesktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/Thumbnails/Thumbnail_desktop.jpg';
//2FlatsinCotham
import thumbnailDesktop2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/Thumbnails/Thumbnail_desktop.jpg';
//3PhoenixWorksFlats
import thumbnailDesktop3 from '../../../../assets/images/ProjectCategories/Flats_4/3PhoenixWorksFlats/Thumbnails/Thumbnail_desktop.jpg';
//4FlatsinWeston_Super_Mare
import thumbnailDesktop4 from '../../../../assets/images/ProjectCategories/Flats_4/4FlatsinWeston_Super_Mare/Thumbnails/Thumbnail_desktop.jpg';

//hero ---------------------------------------------------------------------------------------------------
//1FlatsinBedminster
import heroImageDesktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/HeroImages/Hero_desktop.jpg';
import heroImageTablet1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/HeroImages/Hero_tablet.jpg';
import heroImageMobile1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/HeroImages/Hero_mobile.jpg';
//2FlatsinCotham
import heroImageDesktop2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/HeroImages/Hero_desktop.jpg';
import heroImageTablet2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/HeroImages/Hero_tablet.jpg';
import heroImageMobile2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/HeroImages/Hero_mobile.jpg';
//3PhoenixWorksFlats
import heroImageDesktop3 from '../../../../assets/images/ProjectCategories/Flats_4/3PhoenixWorksFlats/HeroImages/Hero_desktop.jpg';
import heroImageTablet3 from '../../../../assets/images/ProjectCategories/Flats_4/3PhoenixWorksFlats/HeroImages/Hero_tablet.jpg';
import heroImageMobile3 from '../../../../assets/images/ProjectCategories/Flats_4/3PhoenixWorksFlats/HeroImages/Hero_mobile.jpg';
//4FlatsinWeston_Super_Mare
import heroImageDesktop4 from '../../../../assets/images/ProjectCategories/Flats_4/4FlatsinWeston_Super_Mare/HeroImages/Hero_desktop.jpg';
import heroImageTablet4 from '../../../../assets/images/ProjectCategories/Flats_4/4FlatsinWeston_Super_Mare/HeroImages/Hero_tablet.jpg';
import heroImageMobile4 from '../../../../assets/images/ProjectCategories/Flats_4/4FlatsinWeston_Super_Mare/HeroImages/Hero_mobile.jpg';

//SecondaryImages ---------------------------------------------------------------------------------------------------
//desktop
//1FlatsinBedminster
import Secondary1_desktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/SecondaryImages/Desktop/Secondary2_desktop.jpg';
import Secondary3_desktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/SecondaryImages/Desktop/Secondary3_desktop.jpg';
import Secondary4_desktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/SecondaryImages/Desktop/Secondary4_desktop.jpg';
import Secondary5_desktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/SecondaryImages/Desktop/Secondary5_desktop.jpg';
import Secondary6_desktop1 from '../../../../assets/images/ProjectCategories/Flats_4/1FlatsinBedminster/SecondaryImages/Desktop/Secondary6_desktop.jpg';

//2FlatsinCotham
import Secondary1_desktop2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/SecondaryImages/Desktop/Secondary2_desktop.jpg';
import Secondary3_desktop2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/SecondaryImages/Desktop/Secondary3_desktop.jpg';
import Secondary4_desktop2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/SecondaryImages/Desktop/Secondary4_desktop.jpg';
import Secondary5_desktop2 from '../../../../assets/images/ProjectCategories/Flats_4/2FlatsinCotham/SecondaryImages/Desktop/Secondary5_desktop.jpg';
//3PhoenixWorksFlats
import Secondary1_desktop3 from '../../../../assets/images/ProjectCategories/Flats_4/3PhoenixWorksFlats/SecondaryImages/Desktop/Secondary1_desktop.jpg';
import Secondary2_desktop3 from '../../../../assets/images/ProjectCategories/Flats_4/3PhoenixWorksFlats/SecondaryImages/Desktop/Secondary2_desktop.jpg';

//4FlatsinWeston_Super_Mare
//no secondary images provided by client

const Flats = () => {
	const churchesData = {
		heroProps: {
			sideBarProps: {
				thumbnails: [
					{
						to: '/projects/flats/1',
						thumbnailDesktop: thumbnailDesktop1
					},
					{
						to: '/projects/flats/2',
						thumbnailDesktop: thumbnailDesktop2
					},
					{
						to: '/projects/flats/3',
						thumbnailDesktop: thumbnailDesktop3
					},
					{
						to: '/projects/flats/4',
						thumbnailDesktop: thumbnailDesktop4
					}
				]
			},
			showcaseProps: {
				1: {
					hero: {
						heroImageDesktop: heroImageDesktop1,
						heroImageTablet: heroImageTablet1,
						heroImageMobile: heroImageMobile1,
						alt: 'Flats in Bedminster'
					},
					imageLabel: 'Flats in Bedminster'
				},
				2: {
					hero: {
						heroImageDesktop: heroImageDesktop2,
						heroImageTablet: heroImageTablet2,
						heroImageMobile: heroImageMobile2,
						alt: 'Flats in Cotham'
					},
					imageLabel: 'Flats in Cotham'
				},
				3: {
					hero: {
						heroImageDesktop: heroImageDesktop3,
						heroImageTablet: heroImageTablet3,
						heroImageMobile: heroImageMobile3,
						alt: 'Phoenix Works Flats'
					},
					imageLabel: 'Phoenix Works Flats'
				},
				4: {
					hero: {
						heroImageDesktop: heroImageDesktop4,
						heroImageTablet: heroImageTablet4,
						heroImageMobile: heroImageMobile4,
						alt: 'Flats in Weston-Super-Mare'
					},
					imageLabel: 'Flats in Weston-Super-Mare'
				}
			}
		},
		1: {
			textContentProps: {
				heading: 'Flats in Bedminster',
				year: '2013',
				descriptionText: `We replaced an outdated building with eight flats and a maisonette to improve thermal and sound insulation. The second storey is set back from the façade, reducing the visibility of living areas from the road. The windows on the first floor are Juliet balconies, using clear glass instead of railings. We carefully designed the flats’ layout so that access is via a central staircase with balcony, reducing the need for internal corridors and giving extra living space. The ground floor is wheelchair accessible, and there is an internal courtyard available to residents for their own use or for communal entertaining.`,
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
						width: '240px',
						largeWidth: '40rem',
						description: 'description'
					},
					{
						image: Secondary3_desktop1,
						largeImage: Secondary3_desktop1,
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
					},
					{
						image: Secondary5_desktop1,
						largeImage: Secondary5_desktop1,
						width: '240px',
						largeWidth: '38.6rem',
						description: 'description'
					},
					{
						image: Secondary6_desktop1,
						largeImage: Secondary6_desktop1,
						width: '240px',
						largeWidth: '38.6rem',
						description: 'description'
					}
				]
			}
		},
		2: {
			textContentProps: {
				heading: 'Flats in Cotham',
				year: '2000s',
				descriptionText: `We constructed around 10 timber-framed flats near the BRI.`,
				feedbackHeading: '',
				feedbackText: ``
			},
			imageGalleryProps: {
				images: [
					{
						image: Secondary1_desktop2,
						largeImage: Secondary1_desktop2,
						width: '180px',
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
					}
				]
			}
		},
		3: {
			textContentProps: {
				heading: 'Phoenix Works Flats',
				year: '',
				descriptionText: ``,
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
					},
					{
						image: Secondary2_desktop3,
						largeImage: Secondary2_desktop3,
						width: '240px',
						largeWidth: '27rem',
						description: 'description'
					}
				]
			}
		},
		4: {
			textContentProps: {
				heading: 'Flats in Weston-Super-Mare',
				year: '2017',
				descriptionText: `Concept for flats`,
				feedbackHeading: '',
				feedbackText: ``
			},
			imageGalleryProps: {
				images: []
			}
		}
	};
	return <Template data={churchesData} />;
};

export default Flats;
