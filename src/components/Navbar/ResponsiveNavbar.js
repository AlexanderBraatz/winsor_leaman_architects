import React, { useContext } from 'react';
import { ResponsiveContext } from '../../ResponsiveContext';
import NavbarComponent from './NavbarComponent';
import MobileNavbarComponent from './MobileNavbarComponent';

export default function ResponsiveNavbar() {
	const { isMobile } = useContext(ResponsiveContext);

	return (
		<div>{isMobile ? <MobileNavbarComponent /> : <NavbarComponent />}</div>
	);
}
