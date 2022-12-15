import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../src/config/theme';

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
