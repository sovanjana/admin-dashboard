import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles';

// DEVNOTE: initialize default theme...
const defaultTheme = createMuiTheme();

export function AppThemeProvider(props: IAppThemeProvider) {
	const { theme, children } = props;
	const themeWithDefault = Object.assign({}, defaultTheme, theme);

	return (
		<StyledThemeProvider theme={themeWithDefault}>
			<MuiThemeProvider theme={themeWithDefault}>{children}</MuiThemeProvider>
		</StyledThemeProvider>
	);
}

/**
 * Interfaces ...
 */
export interface IAppThemeProvider {
	children: React.ReactNode;
	theme?: Theme;
}
