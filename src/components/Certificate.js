import React from 'react';
import {
  Box,
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boxCertificateStyle: {
    width: "900px",
    height: "426px",
    margin: "auto",
    display: "flex",
    backgroundColor: '#FBF7F7',
    filter: "drop-shadow(20px 20px 0px #005BAB);"
  },
  paddingInnerBox: {
    paddingTop: '125px',
    paddingBottom: '126px',
    paddingRight: '127px',
    paddingLeft: '124px'
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
         className={classes.boxCertificateStyle}>
          <div style={{marginTop: 'auto', marginBottom: 'auto', marginLeft: '3em'}}>
            <Typography
              className={classes.proximaNovaText}
              variant="h4"
            >
              WE’RE CERTIFIED TO<br/> DELIVER BEST QUALITY<br/> CANNED FOODS
            </Typography>
            <div className={classes.spaceBetween}>
            <Typography
              className={classes.karlaText}
              variant="body2"
            >
              Our products has successfully met the requirements of a national or<br/> internationally recognized best practice approach.
            </Typography>
            </div>
            {listCertificate.map(function(item){
              return (
                <img className={classes.marginAroundImage} src={item} alt="sampleCertificate" />
              )
            })}
          </div>
        </Paper>
      </Box>
  )
}

export default CertificateShow;