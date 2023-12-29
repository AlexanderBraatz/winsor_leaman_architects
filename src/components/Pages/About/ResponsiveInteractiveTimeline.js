import React, { useState, useEffect } from 'react';
import InteractiveTimeline from './InteractiveTimeline';
import MobileInteractiveTimeline from './MobileInteractiveTimeline';

export default function ResponsiveInteractiveTimeline() {
	const [is740, setIs740] = useState(window.innerWidth <= 740);

	const handleResize = () => {
		setIs740(window.innerWidth <= 740);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div>{is740 ? <MobileInteractiveTimeline /> : <InteractiveTimeline />}</div>
	);
}
