import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CardsCarousel from './components/CardsCarousel';

function ProductShow() {
  return (
    <Grid
      container
    >
      <Typography variant="h1">
        PRODUCT
      </Typography>

      <CardsCarousel />
    </Grid>
  )
}

export default ProductShow;
