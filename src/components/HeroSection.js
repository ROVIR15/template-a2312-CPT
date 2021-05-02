import React from 'react'
import { Parallax } from 'react-parallax'
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boxInsideParallax: {
    height: 500,
    [theme.breakpoints.down('md')]: {
      height: 200
    }
  },
  insideStyles: {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "20%",
    transform: "translate(-50%,-50%)",
    color: 'white',
    [theme.breakpoints.down('md')]:{
      top: "50%",
      left: "50%",
      padding: 10   
    }
  },
  heading: {
    [theme.breakpoints.down('md')]:{
      fontSize: 32
    }
  },
  subtitle: {
    [theme.breakpoints.down('md')]:{
      fontSize: 18
    }
  }
}))

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

function HeroSection() {
  const classes = useStyles();

  return (
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(0, 0, 0, ${percentage * 0.6})`,
              left: "20%",
              top: "50%",
              maxHeight: '250px',
              borderRadius: '10px',
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div className={classes.boxInsideParallax}>
        <div className={classes.insideStyles}>
          <Typography className={classes.heading} variant="h4">
            ITS HEADING <br/>THAT EXPLAIN
          </Typography>
          <Typography className={classes.subtitle} variant="caption">
            very small text that you can describe more detail
          </Typography>
        </div>
      </div>
    </Parallax>
  )
}

export default HeroSection;
