import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles,
  Link
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
      color: '#FFFFFF',
      textShadow: '4px 4px 0px #005BAB'
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '58px',
    textAlign: 'center',
    color: '#FFFFFF',
    textShadow: '3px 3px 0px #E5B122',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
      lineHeight: '48px'
    }
  },
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Link
        underline="none"
        href={href}
      >
        <Button
          activeClassName={classes.active}
          className={classes.button}
        >
          <span className={clsx([classes.title, classes.textStyle])}>
            {title}
          </span>
        </Button>
      </Link>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
