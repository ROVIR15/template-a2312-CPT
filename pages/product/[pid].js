import React, { useState } from 'react';

//Next App Routing
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error'

// Material UI Components Library
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import Layout from '../../src/layouts';
import ProductCard from '../../src/views/SingleCard';
import ProductSmokingHero from '../../src/components/ProductSmokingHero';

//Graphql API & query
import client from '../../helpers/apollo-client';
import { GET_ONE_PRODUCT_BY_ID, GET_MANY_PRODUCT_FROM_SERVER } from '../../helpers/graphql/query';
import Head from 'next/head';
import Products from '../products';

//Component Styling
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxWidth: 787,
      maxHeight: 277,
      alignItems: 'center',
      margin: 'auto',
      borderRadius: 0,
      background: 'none',
      boxShadow: 'none',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        maxHeight: 500
      }
    },
    cover: {
      width: 277,
      height: 277,
      marginRight: 16,
      [theme.breakpoints.down('md')]: {
        width: "100%",
        marginLeft: 16,
        marginRight: 16
      }
    },
    card: {
      maxWidth: "30rem",
      position: "relative",
      display: "flex",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "-2rem 2rem 3.2rem rgba(0, 0, 0, 0.2)"
    },
    blueSection: {
      backgroundColor: theme.palette.primary.main,
      padding: '2rem 1em'
    },
    cardContent: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    yellowSection: {
      backgroundColor: theme.palette.secondary.main
    },
    heading: {
      width: 'fit-content',
      borderRadius: 20,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      padding: '0.8em 4rem',
      margin: '2rem auto',
      boxShadow: '0px 4px 28px -11px rgba(255,255,255,0.75)',
      WebkitBoxShadow: '0px 4px 28px -11px rgba(255,255,255,0.75)',
      MozBoxShadow: '0px 4px 28px -11px rgba(255,255,255,0.75)'
    },
    heading: {
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '29px',
      color: theme.palette.secondary.main
    },
    description: {
      fontSize: '16px',
      color: '#fff',
      maxWidth: 517
    },
    line: {
      border: '4px solid #A5C5D3'
    },
    tabs: {
      margin: 'auto',
      minWidth: 600,
      maxWidth: 787,
      marginTop: 36,
      [theme.breakpoints.down('md')]: {
        marginTop: 16,
        width: 200
      }
    },
    tab: {
      color: 'white',
      borderBottom: '3px solid #FBBC1C',
    },
    descriptionPanelStyle: {
      border: '1px solid #E5B122',
      boxSizing: 'border-box',
      padding: 24,
      width: 'fit-content'      
    },
    labels: {
      display: 'flex',
      margin: '16px 0'
    },
    labelBox: {
      maxHeight: 40,
      width: 145,
      padding: '8px 32px',
      border: '1px solid #E5B122',
      marginRight: '20px',
      [theme.breakpoints.down('md')]: {
        maxHeight: 32,
        width: 100,
        padding: '4px 8px'
      }
    },
    labelText: {
      fontSize: '16px', 
      margin: 0, 
      color: 'white',
      [theme.breakpoints.down('md')]: {
        fontSize: 14
      }
    },
    labelContent: {
      maxHeight: 40,
      padding: '8px 32px',
      border: '1px solid #E5B122',
      [theme.breakpoints.down('md')]: {
        maxHeight: 32,
        minWidth: 200,
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 24,
        paddingLeft: 8
      },
      [theme.breakpoints.up('lg')]: {
        minWidth: 454 
      }
    },
    heading2: {
      color: '#005BAB',
      textShadow: '2px 2px 0px #E5B122',
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: '44px',
      marginBottom: 48,
      /* identical to box height */

      textAlign: 'center',
      letterSpacing: '0.1em',
      [theme.breakpoints.down('md')]: {
        fontSize: '28px',
        lineHeight: '36px'
      }
    },
    boxInsideAnotherProducts: {
      marginLeft: "8em",
      marginRight: '8em',
      marginTop: '2em',
      marginBottom: '2em',
      [theme.breakpoints.down('md')]: {
        marginLeft: 32,
        marginRight: 32
      }
    }
}));

{/* */}

//Static Paths 
export async function getStaticPaths() {
  try {
    const { data: {productMany} } = await client.query({
      query: GET_MANY_PRODUCT_FROM_SERVER
    });

    const paths = productMany.map((product) => ({
      params: { pid: product._id},
    }))

    return {
      paths,
      fallback: true
    }
  } catch (error){
    return {
      paths: [],
      fallback: false
    }
  }


  const anotherProducts = await client.query({
    query: GET_MANY_PRODUCT_FROM_SERVER
  })

  const paths = anotherProducts.data.productMany.map((product) => ({
    params: { pid: product._id},
  }))

  return {
    paths,
    fallback: true,
  }
}

//Static Props get from the server source
export async function getStaticProps({ params }){

  const product = await client.query({
    query: GET_ONE_PRODUCT_BY_ID, 
    variables: { _id: params.pid}
  });
  const anotherProducts = await client.query({
    query: GET_MANY_PRODUCT_FROM_SERVER
  })

  return {
    props: {
      product: product.data.productOne,
      anotherProducts: anotherProducts.data.productMany
    }
  }
}

function Info({description, maxQty}) {
  const classes = useStyles();
  return (
    <>
      <div className="product-main">

        <p
          className={classes.description}
        >
          {description ? description : "Colossal is made up exclusively from the largest pieces of Jumbo from the biggest crabs. "}
        </p>
        
        <div class="product-total"
          style={{
            border: '1px solid #E5B122',
            boxSizing: 'border-box',
            padding: 8,
            width: 'fit-content'
          }}
        >
          <p
            style={{margin: 0, color: '#E5B122'}}
          > Maximum Quantity: <b>{maxQty? maxQty : 0} pcs</b> </p>
        </div>
      </div>
    </>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{maxWidth: '787px', margin: '16px auto'}}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

function Labels(props){
  const classes = useStyles();
  const { value, ...other } = props;

  return (
    <div>
      <div
        className={classes.labels}
      >
        <div
          className={classes.labelBox}
        >
          <p
            className={classes.labelText}
          > 
            Size
          </p>
        </div>
        <div
          className={classes.labelContent}
        >
          <p
            className={classes.labelText}
          > 
            {value ? value.size : '3/4 lb to 1 lb per leg, Colossal'}
          </p>
        </div>
      </div>
      <div
        className={classes.labels}
      >
        <div
          className={classes.labelBox}
        >
          <p
            className={classes.labelText}
          > 
            Location
          </p>
        </div>
        <div
          className={classes.labelContent}
        >
          <p
            className={classes.labelText}
          > 
            {value ? value.location : 'Kudus, Indonesia'}
          </p>
        </div>
      </div>
      <div
        className={classes.labels}
      >
        <div
          className={classes.labelBox}
        >
          <p
            className={classes.labelText}
          > 
            Cook Type
          </p>
        </div>
        <div
          className={classes.labelContent}
        >
          <p
            className={classes.labelText}
          > 
            {value ? value.cook_type : 'Boil, Grill, Saute, Steam'}
          </p>
        </div>
      </div>
    </div>
  )
}

function ProductDetails({ product, anotherProducts }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(router.fallback){
    return <h1> LOADING ... </h1>
  }

  if(!product){
    return (<DefaultErrorPage  statusCode={404}/>)
  }

  return (
    <Layout>
      <Box
        className={classes.blueSection}
      >
        <Container>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image=
                "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
            />
            <CardContent className={classes.cardContent}>
              <div
                style={{width: 'fit-content'}}
              >
                <Typography
                  variant="h4"
                  className={classes.heading}
                >
                  {product.name}
                </Typography>
                <Divider
                  className={classes.line}
                />
              </div>
              <Info description={product.short_description} maxQty={product.maxQty}/>
            </CardContent>
          </Card>
          <Tabs
            className={classes.tabs}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
          >
            <Tab
              className={classes.tab}
              label="Description" />
            <Tab
              className={classes.tab}
              label="Specification" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div 
              className={classes.descriptionPanelStyle}
            >
              <p
                style={{fontSize: '16px', margin: 0, color: 'white'}}
              > 
                {product.description}
              </p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Labels value={{size: product.size, location: product.location, cook_type: product.cook_type}} />
          </TabPanel>
        </Container>
      </Box>
      <Box
       className={classes.yellowSection}
      >
        <ProductSmokingHero />
      </Box>
      <Box
        className={classes.boxInsideAnotherProducts}
      >
        <Typography 
          className={classes.heading2}
          variant="h6"
        >
          ANOTHER PRODUCTS
        </Typography>
        <Container
          className={classes.productList}
        >
          <Grid
            container
          >
            {anotherProducts.map((product) => {
                return (
                  <Grid
                    item
                    container
                    justify="center"
                    xs={12}
                    md={4}
                  >
                    <ProductCard />
                  </Grid>
                )
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default ProductDetails;
