import React, { Fragment } from 'react';
import Hero from './Hero';
import TextContent from './TextContent';
import ResponsiveImageGallery from './ResponsiveImageGallery';
import { useParams } from 'react-router-dom';

const Template = ({ data }) => {
	let { id } = useParams();
	return (
		<Fragment>
			<Hero
				sideBarProps={data.heroProps.sideBarProps}
				showcaseProps={data.heroProps.showcaseProps[id]}
				id={id}
			/>
			<TextContent textContentProps={data[id].textContentProps} />
			<ResponsiveImageGallery imageGalleryProps={data[id].imageGalleryProps} />
		</Fragment>
	);
};
export default Template;
