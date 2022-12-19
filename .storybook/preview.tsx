import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import GlobalStyle from '../src/config/style';

import theme from '../src/config/theme';

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
