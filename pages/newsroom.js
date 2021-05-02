import React from 'react';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import Layout from '../src/layouts';
import {
  Container,
  Box,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import Hero from '../src/components/HeroSection2';
import NewsCard from '../src/views/NewsCard';

const useStyles = makeStyles((theme) => ({
    heading2: {
        color: '#005BAB',
        textShadow: '2px 2px 0px #E5B122',
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: '44px',
        marginBottom: 48,
        /* identical to box height */
  
        textAlign: 'center',
        letterSpacing: '0.1em'
    },
    boxMargin: {
      margin: '2rem 8rem',
      [theme.breakpoints.down('md')]: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 24,
        marginBottom: 24
      }
    }
}));

function Newsroom() {
  const classes = useStyles();
  const {pathname} = useRouter();

  return (
    <Layout>
      <Hero pathname={pathname}/>
      <Box
        className={classes.boxMargin}
      >
        <Typography 
          className={classes.heading2}
          variant="h6"
        >
          NEWS
        </Typography>
        <Container>
          <Grid
            container
          >
            {[0,2,3,4,5,6].map((product) => {
                return (
                  <Grid
                    item
                    container
                    justify="center"
                    xs={12}
                    md={4}
                  >
                    <NewsCard />
                  </Grid>
                )
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default Newsroom;
