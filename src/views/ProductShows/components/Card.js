import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import YellowButton from '../../../../modules/YellowButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    margin: '1.25em'
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://kvat-webassets.aisleahead.com/getMainImageSquare.php?upc=0020633100000&size=900&order=1"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <YellowButton size="small" color="primary">
          Learn More
        </YellowButton>
      </CardActions>
    </Card>
  );
}

export default function XCard() {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={3}
    >
      {[0,2,3].map(function(){
        return (
          <Grid
            item
            xs={12}
            md={3}
          >
            <MediaCard />
          </Grid>
        )
      })}
    </Grid>     
  )
}