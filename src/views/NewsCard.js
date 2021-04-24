import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import YellowButton from '../../modules/YellowButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 307,
    maxHeight: 375,
    margin: '1em 0',
    borderRadius: 0,
    border: "1px solid #BDBDBD",
    boxSizing: "border-box",
    '&:hover': {
      border: "1px solid #005BAB",
      boxShadow: "0px 4px 30px rgba(0, 91, 171, 0.25)"
    }
  },
  media: {
    height: 177,
    width: 177,
    margin: 'auto'
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    margin: '1em 0'
  },
  heading: {
    fontSize: 18,
    color: theme.palette.primary.main
  },
  caption: {
    fontSize: 14,
    color: "#828282"
  },
  heading: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
  },
  headline: {
    color: theme.palette.primary.main
  },
  newsDate: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
}));

function MediaCard() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardMedia
        className={classes.media}
        image="https://kvat-webassets.aisleahead.com/getMainImageSquare.php?upc=0020633100000&size=900&order=1"
        title="Contemplative Reptile"
      />
      <CardContent
        className={classes.cardContent}
      >
        <Typography
          className={clsx([classes.heading, classes.newsDate])}
          gutterBottom 
          variant="h6" 
          component="h2"
        >
          AUGUST 30, 2019 | FISHERY
        </Typography>
        <Typography 
          className={clsx([classes.heading, classes.headline])}
          variant="body2" 
          color="textSecondary" 
          component="p"
        >
          MBI HELPS INDONESIAN TRADITIONAL FISHERY TO LEVERAGE UP HIS LIFE THROUGH OCEAN RICHNESS
        </Typography>
      </CardContent>
      <CardActions
        className={classes.cardContent}      
      >
        <YellowButton size="small" color="primary">
          READ MORE
        </YellowButton>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
