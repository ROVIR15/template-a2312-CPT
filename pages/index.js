import React from 'react';
import Layout from '../src/layouts';
import Hero from '../src/components/HeroSection2';
import ProductCTA from '../src/components/ProductCTA';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  blueSection: {
    backgroundColor: theme.palette.primary.main
  },
  gridOption: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4em 6em',
    [theme.breakpoints.down('md')]: {
      padding: '2em 4em'
    }
  },
  yellowSection: {
    backgroundColor: theme.palette.secondary.main
  },
  proximaNovaText: {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  karlaText: {
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#4F4F4F"
  },
  textHeader: {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '60px',
    color: theme.palette.secondary.main,
    border: '2px solid #005BAB',
    textShadow: '2px 2px 0px #FFFFFF',
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '36px'
    }
  },
  textSecondary: {
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#FFFFFF",
    margin: '1.25em 0',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    }
  },
  imageCertificateStyle: {
    margin: '0 1em',
    [theme.breakpoints.down('md')]: {
      width: 24
    }
  },
  certificateTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  },
  certificateSubtitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 8
    }
  },
  certificateWrap: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '3em',
    [theme.breakpoints.down('md')]: {
      marginTop: 24,
      marginBottom: 24,
      marginLeft: 18
    }
  },
  boxCertificateStyle: {
    width: "900px",
    height: "426px",
    margin: "auto",
    display: "flex",
    filter: "drop-shadow(20px 20px 0px #005BAB);",
    [theme.breakpoints.down('md')]: {
      width: 320,
      height: 200
    }
  },
  paddingInnerBox: {
    paddingTop: '125px',
    paddingBottom: '126px',
    paddingRight: '127px',
    paddingLeft: '124px',
    [theme.breakpoints.down('md')]: {
      paddingTop: 33,
      paddingBottom: 34,
      paddingRight: 12,
      paddingLeft: 12      
    }
  },
  spaceBetween: {
    marginTop: '1.25em',
    marginBottom: '1.25em'
  },
  quoteTextStyle: {
    color: '#005BAB',
    fontWeight: "300",
    fontSize: "36px",
    lineHeight: "36px",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: "16px"
    }
  },
  quoteIcon: {
    [theme.breakpoints.down('md')]: {
      width: 20
    }
  },
  quotesGrid: {
    [theme.breakpoints.down('md')]: {
      padding: 4
    }
  },
  featuredProductImage: {
    [theme.breakpoints.down('md')]: {
      width: 128,
    }
  }
}));

const listProducts = ['/sample/1.png', '/sample/2.png', '/sample/3.png', '/sample/4.png', '/sample/5.png', '/sample/6.png']
const listCertificate = [
  '/certificate/1-lpcb.png',
  '/certificate/2-bureau-veritas.png',
  '/certificate/3-brc-food.png',
  '/certificate/4-halal-mui.png',
  '/certificate/5-kkp.png',
]

export default function Home() {
  const classes = useStyles();

  function handleClick(event){
    alert("Hello World!");
  }

  return (
    <Layout>
      <Hero pathname="/home"/>
      <Box className={clsx([classes.blueSection, classes.gridOption])}>
        <Typography
          variant="h2"
          className={classes.textHeader}
        >
          CANNED CRABS IS <br/> GOOD OPTION
        </Typography>
        <Typography
          variant="body2"
          className={classes.textSecondary}
        >
          Prioritize the unit's quality, applying high <br/> standards and professional personnel.
        </Typography>
        <Grid
          container
          spacing={2}
          className={classes.spaceBetween}
        >
          {listProducts.map(function(x){
            return (
              <Grid
                item
                xs={6}
                md={4}
              >
                <img className={classes.featuredProductImage} src={x} alt="sampleImage" />
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box className={clsx([classes.yellowSection, classes.paddingInnerBox])}>
        <Paper
         square
         className={clsx([classes.boxCertificateStyle])}>
          <div className={classes.certificateWrap}>
            <Typography
              className={clsx([classes.proximaNovaText, classes.certificateTitle])}
              variant="h4"
            >
              WE’RE CERTIFIED TO<br/> DELIVER BEST QUALITY<br/> CANNED FOODS
            </Typography>
            <div className={classes.spaceBetween}>
            <Typography
              className={clsx([classes.karlaText, classes.certificateSubtitle])}
              variant="body2"
            >
              Our products has successfully met the requirements of a national or<br/> internationally recognized best practice approach.
            </Typography>
            </div>
            {listCertificate.map(function(item){
              return (
                <img className={classes.imageCertificateStyle} src={item} alt="sampleCertificate" />
              )
            })}
          </div>
        </Paper>
      </Box>
      <Box className={classes.paddingInnerBox}>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={2}
          style={{marginTop: '4rem', marginBottom: '4rem'}}
        >
          <Grid
            item
            className={classes.quotesGrid}
          >
            <img className={classes.quoteIcon} src="/quoteIcon.png" alt="quoteIcon" />
          </Grid>
          <Grid
            item
            style={{maxWidth: '80%', padding: 'unset'}}
          >
            <Typography 
              className={clsx([classes.proximaNovaText, classes.quoteTextStyle])}
              variant="h4"
            >
              WE’RE ASPIRE TO BRING OUR PRODUCTS WORLDWIDE SO MANY PEOPLE CAN STARTS TO SAVOR GOOD QUALITY CANNED SEAFOOD.
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.quotesGrid}
          >
            <img className={classes.quoteIcon} src="/quoteIcon.png" alt="quoteIcon" style={{transform: "rotate(-180deg)"}}/>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
