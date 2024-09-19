// InteractiveTimeline is was removed in the revisions requested by the client
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import React, { useState, useEffect } from 'react';
import InteractiveTimeline from './InteractiveTimeline';
import MobileInteractiveTimeline from './MobileInteractiveTimeline';

export default function ResponsiveInteractiveTimeline() {
	// const [is740, setIs740] = useState(window.innerWidth <= 740);
	const [is740, setIs740] = useState(
		window.matchMedia('(max-width: 740px)').matches
	);

	const handleResize = () => {
		// setIs740(window.innerWidth <= 740);
		setIs740(window.matchMedia('(max-width: 740px)').matches);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		// <div>{is740 ? <MobileInteractiveTimeline /> : <InteractiveTimeline />}</div>
		<div>
			{true ? (
				<MobileInteractiveTimeline is740={is740} />
			) : (
				<InteractiveTimeline />
			)}
		</div>
	);
}
