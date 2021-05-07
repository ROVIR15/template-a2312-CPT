import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import YellowButton from '../../modules/YellowButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    minHeight: 375,
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
  }
}));

function MediaCard({id, title, shortdes, image}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent
        className={classes.cardContent}
      >
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            minHeight: 65
          }}
        >
          {shortdes}
        </Typography>
      </CardContent>
      <CardActions
        className={classes.cardContent}      
      >
        <Link href={`/product/${id}`} passHref>
          <YellowButton size="small" color="primary">
            DETAILS
          </YellowButton>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
