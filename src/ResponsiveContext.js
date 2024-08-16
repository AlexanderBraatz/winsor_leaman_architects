import React, { createContext, useState, useEffect } from 'react';

const ResponsiveContext = createContext();

const ResponsiveProvider = ({ children }) => {
	// const [isDesktop, setIsDesktop] = useState(window.innerWidth > 843);
	// const [isTablet, setIsTablet] = useState(
	// 	window.innerWidth > 480 && window.innerWidth <= 843
	// );
	// const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
	const [isDesktop, setIsDesktop] = useState(
		window.matchMedia('(min-width: 844px)').matches
	);
	const [isTablet, setIsTablet] = useState(
		window.matchMedia('(min-width: 481px) and (max-width: 843px)').matches
	);
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 480px)').matches
	);

	const handleResize = () => {
		// setIsDesktop(window.innerWidth > 843);
		// setIsTablet(window.innerWidth > 480 && window.innerWidth <= 843);
		// setIsMobile(window.innerWidth <= 480);
		setIsDesktop(window.matchMedia('(min-width: 844px)').matches);
		setIsTablet(
			window.matchMedia('(min-width: 481px) and (max-width: 843px)').matches
		);
		setIsMobile(window.matchMedia('(max-width: 480px)').matches);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<ResponsiveContext.Provider value={{ isDesktop, isTablet, isMobile }}>
			{children}
		</ResponsiveContext.Provider>
	);
};

export { ResponsiveProvider, ResponsiveContext };
