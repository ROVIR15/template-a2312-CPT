import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '../../modules/AppBar';
import Toolbar, { styles as toolbarStyles } from '../../modules/Toolbar';
import { Hidden, IconButton, Link, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  title: {
    margin: '0 2rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '1em',
      marginRight: '1em'
    }
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 0.4,
    display: 'flex',
    justifyContent: 'center',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(4),
    '&:hover': {
      color: '#E5B122'
    }
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      width: 48
    }
  }
});

const useStyles = makeStyles((theme) => ({
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
}))

const menuLinks = [
  {
    label: 'Our Story',
    href: '/our-story'
  },
  {
    label: 'Products',
    href: '/products'
  },
  {
    label: 'Factory',
    href: '/factory'
  },
  {
    label: 'Contact Us',
    href: '/contact-us'
  }
]

function NavMenuLinks({ href, label }) {
  const classes = useStyles();

  return (
    <Link
      href={href}
    >
      <Typography
        className={classes.rightLink}
      >
        {label}
      </Typography>
    </Link>
  )
}

function AppAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link
            underline="none"
            className={classes.title}
            href="/"
          >
            <img className={classes.logo} src="/mbi-small.png" />
          </Link>
          <Hidden mdDown>
            <div className={classes.right}>
              {menuLinks.map(function({ href, label }) {
                return <NavMenuLinks href={href} label={label} />
              })}
            </div>
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              onClick={props.onMobileNavOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onMobileNavOpen: PropTypes.func
};

export default withStyles(styles)(AppAppBar);