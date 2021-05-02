import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  makeStyles,
  Typography
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  section3: {
    height: 304,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  inquiryText: {
    color: '#FFFFFF',
    textShadow: '2px 2px 0px #E5B122',
    margin: '36px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: 28
    }
  },
  playButton: {
    borderRadius: 0,
    color: '#fff',
    marginLeft: 27,
    marginRight: 27
  },
  playButtonStyle: {
    background: '#E5B122',
    boxShadow: '6px 6px 0px #FFFFFF'    
  }
}));

function ProductSmoking2({ ...rest }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.section3}
      {...rest}
    >
      <Typography
        variant="h3"
        className={classes.inquiryText}
      >
        HAVE AN INQUIRY? <br/>GET IN TOUCH WITH US
      </Typography>
      <div>
        <Link href="/about-us#enquiry-form" passHref>
          <Button
            className={clsx([classes.playButton, classes.playButtonStyle])}
          >
            YES
          </Button>
        </Link>
        <Button
          className={classes.playButton}
          disable
        >
          NO 
        </Button>
      </div>
    </Box>
  )
}

export default ProductSmoking2;
