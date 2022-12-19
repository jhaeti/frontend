import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { SWRDevTools } from 'swr-devtools';
import { Provider } from 'react-redux';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';

import { wrapper } from '../redux/store';
import GlobalStyle from '../config/style';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp({ Component, ...rest }: MyAppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <SWRDevTools>
            <Provider store={store}>
                <CacheProvider value={emotionCache}>
                    <Head>
                        <meta name='viewport' content='initial-scale=1, width=device-width' />
                        <link rel='shortcut icon' href='/favicon.ico' />
                    </Head>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </CacheProvider>
            </Provider>
        </SWRDevTools>
    );
}

export default MyApp;
