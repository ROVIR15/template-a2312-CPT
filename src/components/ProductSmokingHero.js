import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../../modules/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(9),
  },
  button: {
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: '#005BAB'
  },
  buoy: {
    width: 60,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '58px',
    textAlign: 'center',
    color: '#FFFFFF',
    textShadow: '4px 4px 0px #005BAB'
  }
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <div className={classes.root} component="section">
      <Typography
        className={classes.textStyle}
        variant="h4"
        component="span"
      >
        JUST GET HERE <br/> AND HAVE A QUESTION?
      </Typography>
      <Typography variant="subtitle1" className={classes.link}>
        we’re ready to help you
      </Typography>
    </div>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);