import React, { Fragment } from 'react';
import HeroDesktop from './HeroDesktop';
import TextContent from './TextContent';
import ImageGallery from './ImageGallery';
import { useParams } from 'react-router-dom';

const Template = ({ data }) => {
	let { id } = useParams();
	return (
		<Fragment>
			<HeroDesktop
				sideBarProps={data.heroProps.sideBarProps}
				showcaseProps={data.heroProps.showcaseProps[id]}
				id={id}
			/>
			<TextContent textContentProps={data[id].textContentProps} />
			<ImageGallery imageGalleryProps={data[id].imageGalleryProps} />
		</Fragment>
	);
};
export default Template;
