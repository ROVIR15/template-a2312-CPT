import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../../modules/Typography';
import Hidden from '@material-ui/core/Hidden';

function Copyright() {
  return (
    <React.Fragment>
      <p style={{margin: 'unset', textAlign: 'center'}}>
        Jalan Raya Dukuh Tulis, RT 03 RW 08,
        Desa Besito, Kec. Gebog, Kab. Kudus,
        Central Java, Indonesia
      </p>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      marginLeft: 256,
      marginRight: 256
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 81,
      marginRight: 81
    }
  },
  iconsWrapper: {
    height: 120,
    margin: 'auto'
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
    [theme.breakpoints.down('md')]: {
      width: 36,
      height: 36
    }
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  textOnLink: {
    color: 'white'
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  yellowHeading: {
    color: theme.palette.secondary.main
  }
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.root}>
      <Hidden lgUp>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <img className={classes.iconsWrapper} src="/mbi-logo-fullwhite.png"/>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
      </Hidden>
      <Hidden mdDown>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <div style={{flexGrow: '0.3'}}></div>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item xs={12}>
                <img src="/mbi-logo-fullwhite.png"/>
              </Grid>
              <Grid item xs={12}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <div style={{flexGrow: 1}}></div>
          <Grid item xs={6} sm={4} md={2}>
            <Typography className={classes.yellowHeading} variant="h6" marked="left" gutterBottom>
              COMPANY
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/about-us">About</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/products">Products</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/factory">Factory</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography className={classes.yellowHeading} variant="h6" marked="left" gutterBottom>
              RESOURCES
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/certificates">Certificate</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/newsroom">Newsroom</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/contact-us#enquiry-form">Contact Us</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography className={classes.yellowHeading} variant="h6" marked="left" gutterBottom>
              FOLLOW US
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/premium-themes/onepirate/terms/">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link className={classes.textOnLink} href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      </Hidden>
    </Box>
  );
}