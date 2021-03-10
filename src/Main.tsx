import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

/**
 * Local imports
 */
import { AppThemeProvider } from './components/widget/AppThemeProvider';
import PageNotFound from './components/journey/error/PageNotFound';
import MainErrorBoundary from './MainErrorBoundary';
// import Redirect from './components/widget/Redirect';
import Landing from './components/journey/landing/Landing';

export default function Main(_props: any) {
	const theme: Theme = createMuiTheme({});

	return (
		<Router>
			<AppThemeProvider theme={theme}>
				<MainErrorBoundary>
					<Routes>
						{/* <Redirect to='/app' /> */}
						<Route path='/' element={<Landing />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</MainErrorBoundary>
			</AppThemeProvider>
		</Router>
	);
}
