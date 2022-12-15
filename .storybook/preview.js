import theme from '../src/config/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

const withThemeProvider = (Story) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    );
};

export const decorators = [withThemeProvider];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
