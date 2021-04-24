import React from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spaceOnPanel: {
    paddingRight: theme.typography.pxToRem(48),
    paddingLeft: theme.typography.pxToRem(48),
    paddingTop: theme.typography.pxToRem(24),
    paddingBottom: theme.typography.pxToRem(24),
    margin: 'auto'
  },
  heading: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '58px',
    color: '#E5B122',
    textShadow: '2px 2px 0px #FFFFFF',
  },
  body: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '28px',
    color: '#FFFFFF'
  }    
}))

function ProductionStepShow({content}) {
  const classes = useStyles();

  return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.spaceOnPanel}
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="h4"
              className={classes.heading}
            >
              {content ? content.productionStepTitle: "none"}
            </Typography>
            <Typography
              variant="body2"
              className={classes.body}
            >
              {content ? content.productionDescription: "none"}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            xs={12}
            md={6}
          >
            <img
              className={classes.imageShow}
              src={content ? content.urlImage: "none"}
              alt="process-1"
            />            
          </Grid>
        </Grid>
  )
}

export default ProductionStepShow;