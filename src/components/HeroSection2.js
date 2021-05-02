import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Parallax } from 'react-parallax';
import { makeStyles, Typography } from '@material-ui/core';

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const useStyles = makeStyles((theme) => ({
  proximaNovaText: {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: theme.palette.secondary.main
  },
  karlaText: {
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#fff"
  },
  boxWidth: {
    maxWidth: '60%',
    marginTop: '0.5em', 
    marginBottom: '0.5em',
    [theme.breakpoints.down('md')]:{
      maxWidth: '80%',
      marginTop: '0.5em', 
      marginBottom: '0.5em',
    }
  },
  boxInsideParallax: {
    width: "494px",
    background: "#333333",
    opacity: "0.9",
    marginLeft: '3rem',
    [theme.breakpoints.down('md')]:{
      width: "300px",
      margin: 'auto'
    }
  },
  marginInsideBox: {
    marginTop: '2em',
    marginBottom: '1em',
    marginLeft: '0.45rem',
    marginRight: '0.45rem',
    [theme.breakpoints.down('md')]:{
      marginTop: '1.5em',
      marginBottom: '1em',
      marginLeft: '0.15rem',
      marginRight: '0.15rem',
    }
  },
  heading: {
    [theme.breakpoints.down('md')]:{
      fontSize: 24
    }
  },
  subtitle: {
    [theme.breakpoints.down('md')]:{
      fontSize: 12
    }
  }
}))

const headlineList = {
  '/home' : {
    headline: (<>FRESH FISH <br/> & CRABS <br/>EVERYDAY.</>),
    caption: 'We’re trained to found out where the fish live, catch it, process into good products and bring it to you.',
    image: '/assets/bg-1.jpg'
  },
  '/our-story': {
    headline: (<>HERE’S <br/> THE REASON</>),
    caption: 'See’s the potential of indonesia marine richness and gain profit.',
    image: '/assets/bg-2.jpg'
  },
  '/products': {
    headline: (<>EVERY PARTS <br/> OF THE CRABS</>),
    caption: 'Extracting all parts of the crab and fish, place it into diffferent level.',
    image: '/assets/bg-3.jpg'
  },
  '/newsroom': {
    headline: (<>WHAT’S <br/>GOING ON ?</>),
    caption: 'whats?',
    image: '/assets/bg-4.jpg'
  },
  '/contact-us': {
    headline: (<>STAY IN TOUCH <br/>WITH US</>),
    caption: 'Where do we exist and communicate',
    image: '/assets/bg-5.jpg'
  },
  '/factory': {
    headline: (<>QUALIFIED FACTORY</>),
    caption: 'Production is main core of business you can put trust with the qualified one.',
    image: '/assets/bg-6.jpg'
  }
}

function HeroSection2({pathname}) {
  const [state, setState] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const found = headlineList[pathname]
    setState(found)
  }, [pathname])

  return (
    <Parallax
      bgImage={state ? state.image : image4}
      strength={200}
      style={{
        height: '580px'
      }}
    >
      <div className={classes.boxInsideParallax}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className={classes.marginInsideBox}>
          <Typography
            variant="h3"
            className={clsx([classes.proximaNovaText, classes.heading])}
          >
            {state ? state.headline : null}
          </Typography>
          <Typography
            className={clsx([classes.karlaText, classes.boxWidth, classes.subtitle])}
            variant="body2"
          >
            {state ? state.caption : null}
          </Typography>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{
              width: "50%",
              height: "35px",
              background: "#005BAB",
              opacity: "0.8"
            }}>
            </div>
            <div style={{
              width: "50%",
              height: "35px",
              background: "#E5B122",
              opacity: "0.8"
            }}>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default HeroSection2;
