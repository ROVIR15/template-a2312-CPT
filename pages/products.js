import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../src/layouts';
import Hero from '../src/components/HeroSection2';
import Card from '../src/views/SingleCard';
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import CertificateShow from '../src/components/Certificate';
import ProductSmoking2 from '../src/components/ProductSmoking2';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#005BAB',
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem 2rem',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    margin: '2em 0',
    [theme.breakpoints.down('md')]: {
      width: 200
    }
  },
  productList: {
    padding: '1em 5rem'
  },
  section2: {
    marginTop: '4rem',
    marginBottom: '10rem'
  }
}))

import client from '../helpers/apollo-client';
import { GET_MANY_PRODUCT_FROM_SERVER } from '../helpers/graphql/query';

export async function getStaticProps(){
  try {
    const { data } = await client.query({ query: GET_MANY_PRODUCT_FROM_SERVER });
    return {
      props: {
        products: data.productMany
      }
    }
  } catch (error) {
    return {
      props: {
        error: true
      }
    }
  }
}

export default function Products({ products, error }) {
  const classes = useStyles();
  const route = useRouter();

  React.useEffect(() => {
    if (error) alert("Connection Refused");
  }, [error])

  return (
    <Layout>
      <Hero pathname={route.pathname}/>
      <Box
        className={classes.root}
      >
        <img
          className={classes.image}
          src="/mbi-logo.png"
        />
        <Typography
          variant="body1"
          align="center"
        >
          <b>Muria Bahari Indonesia</b> <br/>
          brings customers satisfaction through <br/>delivers the best quality of crab-meat.
        </Typography>
      </Box>
      
      <Box
        className={classes.section2}
      >
        <Container
          className={classes.productList}
        >
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            {error ? null : 
              products.map((product) => {
                  return (
                    <Grid
                      item
                      container
                      justify="center"
                      xs={12}
                      md={4}
                    >
                      <Card id={product._id} title={product.name} shortdes={product.short_description}/>
                    </Grid>
                  )
              })
            }
          </Grid>
        </Container>
      </Box>
      <ProductSmoking2 />
      <CertificateShow />
    </Layout>
  )
}
