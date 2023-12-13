import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ResponsiveProvider } from './ResponsiveContext';
//assets
import theme from './assets/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ResponsiveProvider>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</ResponsiveProvider>
		</BrowserRouter>
	</React.StrictMode>
);
