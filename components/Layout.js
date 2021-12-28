import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

const Layout = ({ title, children, description }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: '#f0c000 !important',
        },
        secondary: {
          main: '#208080',
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      {/* <Head>
        <tittle>{title ? `${title} - Amarzone` : 'Amarzone'}</tittle>
        {description && <meta name="description" content={description}></meta>}
      </Head> */}
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.navbar}>
          <CssBaseline />
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Amarzone</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All Rights Reserved Amarzone.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
