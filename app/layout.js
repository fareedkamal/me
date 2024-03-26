'use client';
import ScrollToTop from '@/utils/ScrollToTop';
import './globals.css';
import '@/public/font-all/stylesheet.css';
import Layout from '@/components/shared/layout';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: `'Alliance No.1', sans-serif`,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link rel='icon' type='image/svg+xml' href='/favicon.png' />
      <body suppressHydrationWarning={true}>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
