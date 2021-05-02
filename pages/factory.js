import React from 'react';
import clsx from 'clsx';
import Layout from '../src/layouts';
import {
  ButtonBase,
  Typography,
  Paper,
  makeStyles,
  Grid,
} from '@material-ui/core';
import Card from '../src/views/ProductionCard';
import Hero from '../src/components/HeroSection2';
import ProductSmoking2 from '../src/components/ProductSmoking2';
import ProductionStepShow from '../src/views/ProductionStepShow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingBottom: theme.typography.pxToRem(48),
    paddingTop: theme.typography.pxToRem(48)
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
  },
  imageShow: {
    width: '441px',
    height: '441px',
    background: 'url(7.jpg)',
    margin: 'auto'
  },
  sectionYellow: {
    backgroundColor: theme.palette.secondary.main
  },
  sectionBlue: {
    backgroundColor: theme.palette.primary.main
  },
  spaceOnPanel: {
    paddingRight: theme.typography.pxToRem(48),
    paddingLeft: theme.typography.pxToRem(48),
    paddingTop: theme.typography.pxToRem(24),
    paddingBottom: theme.typography.pxToRem(24),
    margin: 'auto'
  },
  productionStepSection: {
    paddingLeft: theme.typography.pxToRem(80),
    paddingRight: theme.typography.pxToRem(80),
    paddingTop: theme.typography.pxToRem(35),
    paddingBottom: theme.typography.pxToRem(35),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.typography.pxToRem(10),
      paddingRight: theme.typography.pxToRem(10),
      paddingTop: theme.typography.pxToRem(4),
      paddingBottom: theme.typography.pxToRem(4),      
    }
  },
  productionBox: {
    backgroundColor: "white",
    display: 'flex',
    width: theme.typography.pxToRem(250),
    height: theme.typography.pxToRem(250),
    margin: "auto",
    marginTop: theme.typography.pxToRem(12),
    marginBottom: theme.typography.pxToRem(12),
    borderRadius: 0,
    padding: theme.typography.pxToRem(20),
    boxShadow: "0px 1px 12px 1px rgba(255,255,255,0.35)",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white"
    },
    [theme.breakpoints.down('md')]: {
      width: theme.typography.pxToRem(125),
      height: theme.typography.pxToRem(125)
    }
  },
  innerProductionBox: {
    textAlign: "center",
    margin: "auto"
  },
  number: {
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  },
  heading: {
    [theme.breakpoints.down('md')]: {
      fontSize: 12
    }
  },
  subtitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 8,
      lineHeight: '0.2'
    }
  },
}))

const processItems = [{
  number: 1,
  heading: "Step Name Process",
  subtitle: "short description about the step"
}, {
  number: 2,
  heading: "Step Name Process",
  subtitle: "short description about the step"
}, {
  number: 3,
  heading: "Step Name Process",
  subtitle: "short description about the step"
}, {
  number: 4,
  heading: "Step Name Process",
  subtitle: "short description about the step"
}, {
  number: 5,
  heading: "Step Name Process",
  subtitle: "short description about the step"
}, {
  number: 6,
  heading: "Step Name Process",
  subtitle: "short description about the step"
}]

function getStepContent(step) {
  switch (step) {
    case 1:
      return {
        productionStepTitle: "ACCEPTANCE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
    case 2: 
      return {
        productionStepTitle: "2ACCEPTANCE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
    case 3:
      return {
        productionStepTitle: "3ACCEPTANCE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
    case 4:
      return {
        productionStepTitle: "4ACCEPTANCE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
    case 5:
      return {
        productionStepTitle: "5ACCEPTANCE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
    case 6:
      return {
        productionStepTitle: "6ACCEPTANCE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
    case 7:
      return {
        productionStepTitle: "7ACCEPTANCE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
    default:
      return {
        productionStepTitle: "NONE ROOM",
        productionDescription: "In this room, the raw material from the supplier will be the weighing, checking temperature, sampling (for laboratory requirements) as well as recording.",
        urlImage: "/FactoryProcessPhotos1.png"
      };
  }
}

function Factory() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);

  const handleClick = (stepNum) => {
    setActiveStep(stepNum);
  };

  return (
    <Layout>
      <Hero pathname={'/factory'}/>
      <div className={classes.sectionBlue}>
        <ProductionStepShow 
          content={getStepContent(activeStep)}
        />
      </div>
      <div className={clsx([classes.sectionYellow, classes.root])}>
          {/* {[0,1,2,3].map((content) => {
            return (
              <Card />
            )
          })} */}
      <Grid 
        container
        className={classes.productionStepSection}
        justify="center"
        alignContent="space-between"
      >
        {
          processItems.map((process, index) => (
            <Grid
              item
              xs={6}
              md={4}
            >
              <ButtonBase 
                className={classes.productionBox}
                onClick={() => handleClick(process.number)}
              >
                <div className={classes.innerProductionBox}>
                  <Typography className={classes.number} variant="h4">{process.number}</Typography>
                  <Typography className={classes.heading} variant="h4">{process.heading}</Typography>
                  <Typography className={classes.subtitle} variant="caption">{process.subtitle}</Typography>
                </div>
              </ButtonBase>
            </Grid>
          ))
        }
      </Grid>
      </div>
      <ProductSmoking2 style={{marginBottom: '4rem'}}/>
    </Layout>
  )
}

export default Factory;