import React from 'react';
import {
  Box,
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  boxCertificateStyle: {
    width: "900px",
    height: "426px",
    margin: "auto",
    display: "flex",
    backgroundColor: '#FBF7F7',
    filter: "drop-shadow(20px 20px 0px #005BAB);"
  },
  imageCertificateStyle: {
    margin: '0 1em',
    [theme.breakpoints.down('md')]: {
      width: 24
    }
  },
  certificateTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 14
    }
  },
  certificateSubtitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 8
    }
  },
  certificateWrap: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '3em',
    [theme.breakpoints.down('md')]: {
      marginTop: 24,
      marginBottom: 24,
      marginLeft: 18
    }
  },
  boxCertificateStyle: {
    width: "900px",
    height: "426px",
    margin: "auto",
    display: "flex",
    filter: "drop-shadow(20px 20px 0px #005BAB);",
    [theme.breakpoints.down('md')]: {
      width: 320,
      height: 200
    }
  },
  paddingInnerBox: {
    paddingTop: '125px',
    paddingBottom: '126px',
    paddingRight: '127px',
    paddingLeft: '124px',
    [theme.breakpoints.down('md')]: {
      paddingTop: 33,
      paddingBottom: 34,
      paddingRight: 12,
      paddingLeft: 12      
    }
  },
  marginAroundImage: {
    margin: '0 1em'
  },
  proximaNovaText: {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  karlaText: {
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#4F4F4F"
  },
  spaceBetween: {
    marginTop: '1.25em',
    marginBottom: '1.25em'
  }
}))

const listCertificate = [
  '/certificate/1-lpcb.png',
  '/certificate/2-bureau-veritas.png',
  '/certificate/3-brc-food.png',
  '/certificate/4-halal-mui.png',
  '/certificate/5-kkp.png',
]

function CertificateShow(){
  const classes = useStyles();

  return (
      <Box className={classes.paddingInnerBox}>
        <Paper
         square
         className={clsx([classes.boxCertificateStyle])}>
          <div className={classes.certificateWrap}>
            <Typography
              className={clsx([classes.proximaNovaText, classes.certificateTitle])}
              variant="h4"
            >
              WE’RE CERTIFIED TO<br/> DELIVER BEST QUALITY<br/> CANNED FOODS
            </Typography>
            <div className={classes.spaceBetween}>
            <Typography
              className={clsx([classes.karlaText, classes.certificateSubtitle])}
              variant="body2"
            >
              Our products has successfully met the requirements of a national or<br/> internationally recognized best practice approach.
            </Typography>
            </div>
            {listCertificate.map(function(item){
              return (
                <img className={classes.imageCertificateStyle} src={item} alt="sampleCertificate" />
              )
            })}
          </div>
        </Paper>
      </Box>
  )
}

export default CertificateShow;