import React from 'react';
import clsx from 'clsx';
import Layout from '../src/layouts';
import {
  Container,
  Box,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import NewsCard from '../src/views/NewsCard';
import client from '../../helpers/apollo-client';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.typography.pxToRem(96),
        paddingBottom: theme.typography.pxToRem(96),
        paddingRight: theme.typography.pxToRem(128),
        paddingLeft: theme.typography.pxToRem(128),
        [theme.breakpoints.down('md')]: {
          paddingTop: theme.typography.pxToRem(24),
          paddingBottom: theme.typography.pxToRem(24),
          paddingRight: theme.typography.pxToRem(28),
          paddingLeft: theme.typography.pxToRem(28)
        }
    },
    boxRoot: {
      backgroundColor: theme.palette.secondary.main,
      paddingTop: theme.typography.pxToRem(24),
      paddingBottom: theme.typography.pxToRem(48),
      paddingRight: theme.typography.pxToRem(24),
      paddingLeft: theme.typography.pxToRem(24)
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
        textShadow: '2px 2px 0px #FFFFFF',
        [theme.breakpoints.down('md')]: {
          marginBottom: 12
        }
    },
    heading: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      paddingTop: theme.typography.pxToRem(12),
      paddingBottom: theme.typography.pxToRem(12)
    },
    headline: {
      color: theme.palette.primary.main,
      fontSize: theme.typography.pxToRem(24)
    },
    newsDate: {
      color: '#828282',
      fontSize: theme.typography.pxToRem(18)
    },
    content: {
      color: '#828282',
      fontSize: theme.typography.pxToRem(18)
    }
}));

// Static Paths
export async function getStaticPaths() {
  try {
    const { data: { newsMany }} = await client.query({
      query: GET_MANY_NEWS_ID
    })
    return {
      paths,
      fallback: true
    }
  } catch (error) {
    return {
      error,
      fallback: false
    }
  }
}

// Static Props get from the server source
export async function getStaticProps({ params }){
  try {
    const news = await client.query({
      query: GET_ONE_NEWS_BY_ID,
      variables: { _id: params.pid }
    })
    const anotherNews = await client.query({
      query: GET_MANY_NEWS
    })
    return {
      props: {
        news: news.data.newsOne,
        anotherNews: anotherNews.data.newsMany
      }
    }
  } catch (error) {
    return {
      error: true
    }
  }
}

function Newsroom({ news, anotherNews }) {
  const classes = useStyles();

  return (
    <Layout>
      <Container
        className={classes.root}
      >
        <img src="/newsheadlineimage.png" alt="image" />
        <Typography
          className={clsx([classes.heading, classes.headline])}
        >
          { news.title ? news.title
            :
            "MBI HELPS INDONESIAN TRADITIONAL FISHERY TO LEVERAGE UP HIS LIFE THROUGH OCEAN RICHNESS"
          }
        </Typography>
        <Typography
          className={clsx([classes.heading, classes.newsDate])}
        >
          28 AUGUST 2019 | 09:32 WIB
        </Typography>
        <div className={classes.content}>
          {news.content ? news.content
           :
           (
            <>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc leo, porttitor in purus ac, dapibus ultricies est. Nullam rhoncus, nulla et vestibulum lacinia, est tellus consectetur sem, nec tempus lacus sapien vitae est. Ut ullamcorper accumsan felis, at sagittis ex semper eu.</p>
              <p>Pellentesque finibus dictum turpis quis ornare. Nunc porttitor velit ut efficitur tempor. Morbi aliquet ultrices dui, eu convallis turpis blandit vitae. Fusce accumsan mattis consectetur. Donec ut finibus erat. Duis eget mauris at neque vulputate pellentesque in eu lectus. Donec pharetra gravida nibh at ullamcorper. </p>
              <p>Morbi sagittis dignissim tortor, eu gravida nisi dignissim nec. Nullam ac fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar rutrum diam vel mollis. Nam cursus laoreet rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices facilisis mi, vitae hendrerit erat posuere eu. Sed dictum aliquet dui ut molestie. Nunc ac purus tempus, laoreet ligula et, viverra odio.</p>
              <p>Sed vehicula mattis mi, ac fermentum nisl viverra ac. Quisque sagittis, felis in finibus viverra, enim arcu luctus erat, porta malesuada diam lectus sit amet lectus. Aenean eros nulla, convallis vel sem eu, scelerisque ullamcorper nulla. Donec urna nisi, tincidunt vel tincidunt id, condimentum sit amet mauris. </p>  
            </>
           )
          }
        </div>
      </Container>
      <Box
        className={classes.boxRoot}
      >
        <Typography 
          className={classes.heading2}
          variant="h6"
        >
          OTHER NEWS
        </Typography>
        <Container>
          <Grid
            container
          >
            {[0,2,3].map((product) => {
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
