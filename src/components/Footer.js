import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../../modules/Typography';
import TextField from '../../modules/TextField';

function Copyright() {
  return (
    <React.Fragment>
      <p style={{margin: 'unset'}}>
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
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    color: 'white'
  },
  iconsWrapper: {
    height: 120,
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
    <Typography component="footer" className={classes.root}>
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
        <Typography variant="caption">
          {'This developed by Eko'}
        </Typography>
    </Typography>
  );
}