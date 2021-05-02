import React, { useEffect } from 'react';
import { Box, Drawer, Hidden, List, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import { withRouter } from 'next/router'
const items = [
  {
    href: '/our-story',
    title: 'Our Story'
  },
  {
    href: '/products',
    title: 'Products'
  },
  {
    href: '/factory',
    title: 'Factory'
  },
  {
    href: '/newsroom',
    title: 'Newsroom'
  },
  {
    href: '/contact-us',
    title: 'Contact Us'
  }
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 350,
    backgroundColor: theme.palette.primary.main,
  },
  iconsWrapper: {
    height: 72,
    margin: 'auto',
    marginTop: 36,
    marginBottom: 36
  },
}));

function NavBar({router, openMobile, onMobileClose}) {
  const classes = useStyles();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
        <img className={classes.iconsWrapper} src="/mbi-logo-fullwhite.png"/>
        <Box p={2}>
        <List>
            {items.map((item) => (
            <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
            />
            ))}
        </List>
        <Box flexGrow={1} />
        </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default withRouter(NavBar);