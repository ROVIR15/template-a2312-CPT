import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../../modules/AppBar';
import Toolbar, { styles as toolbarStyles } from '../../modules/Toolbar';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
  title: {
    margin: '0 2rem'
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
            <img src="/mbi-small.png" />
          </Link>
          <div className={classes.right}>
            {menuLinks.map(function({ href, label }) {
              return <NavMenuLinks href={href} label={label} />
            })}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);