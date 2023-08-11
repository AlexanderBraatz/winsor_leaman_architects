import React, { Fragment } from 'react';
import Hero from './Hero';
import TextContent from './TextContent';
import ImageGallery from './ImageGallery';

const Template = ({ data }) => {
	return (
		<Fragment>
			<Hero heroProps={data.heroProps} />
			<TextContent textContentProps={data.textContentProps} />
			<ImageGallery imageGalleryProps={data.imageGalleryProps} />
		</Fragment>
	);
};
export default Template;
