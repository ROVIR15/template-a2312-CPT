import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../src/layouts';
import Hero from '../src/components/HeroSection2';
import ProductCTA from '../src/components/ProductCTA';
import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1em 0rem',
      margin: '3rem 0',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      }
    },
    image: {
      marginRight: '2em',
      maxWidth: 300,
      filter: "drop-shadow(20px 20px 0px #005BAB);"
    },
    description: {
      marginLeft: '2em',
      padding: '0 2em', 
      width: '452px',
      [theme.breakpoints.down('md')]: {
        marginTop: 42,
        marginBottom: 42,
        marginLeft: 24,
        marginRight: 24,
        paddingLeft: 32,
        paddingRight: 32,
        fontSize: 18
      }
    }
}))

function OurStory() {
  const classes = useStyles();
  const route = useRouter();

  return (
    <Layout>
    <Hero pathname={route.pathname}/>
    <div
      className={classes.root}
    >
      <img
        className={classes.image}
        src=
          "https://images.unsplash.com/photo-1553659971-f01207815844?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      />
      <div
        className={classes.description}
      >
        <p>
          World fisheries for us are the blood that is flowing in every human being born in this country. We are one of the largest providers of fishery products in the world. Blue swimmers crabs are the main raw materials in our product list. And why should we use blue swimming crab from Indonesia? Blue swimmer crabs from Indonesia is one of the best in the world, so the quality is what we will sell to the world. Therefore we can always provide good quality raw material with very strict selection process.            
        </p>
        <p>
          In addition to the best quality from us, we also provide a guaranteed pasteurized process very well. The pasteurized process is similar to the process used by the dairy. Every employee who works in the factory are always monitored of cleanliness. Ranging from nails, hands, clothing, etc. must meet the standards of cleanliness. That's why we always provide the healthy canned crabs as fresh and clean for your beloved family.
        </p>
      </div>
    </div>
    </Layout>
  );
}

export default OurStory;