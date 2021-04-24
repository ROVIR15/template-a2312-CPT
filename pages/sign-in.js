import React, { Fragment } from 'react';
import clsx from 'clsx';
import {useFormik} from 'formik';
import * as yup from 'yup';

import {
  Button,
  Grid,
  Paper,
  TextField, 
  Typography,
  makeStyles
} from '@material-ui/core';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.typography.pxToRem(20),
    paddingBottom: theme.typography.pxToRem(20),
    paddingLeft: theme.typography.pxToRem(45),
    paddingRight: theme.typography.pxToRem(45),    
    textAlign: 'center',
    margin: 'auto',
    width: '35%'
  },
  outer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main
  },
  playButton: {
    borderRadius: 0,
    color: '#fff',
    marginTop: 30,
    marginBottom: 10
  },
  playButtonStyle: {
    background: '#E5B122',
    boxShadow: '6px 6px 0px #005BAB'    
  },
  textfield: {
    marginTop: 20
  },
  proximaNovaText: {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: theme.palette.secondary.main
  },
  karlaText: {
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    color: theme.palette.primary.main
  }
}));

function SignIn(){
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
    <div className={classes.outer}>
    <Paper
      className={classes.root}
      elevation="3"
    >
      <Typography 
        className={clsx([classes.proximaNovaText])}
        variant="h4"
      >
        SIGN IN
      </Typography>
      <Typography
        className={classes.karlaText}
        variant="caption"
      >
        Get in to manage your web dashboard
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.textfield}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className={classes.textfield}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          className={clsx([classes.playButton, classes.playButtonStyle])}
          color="primary"
          variant="contained"
          fullWidth type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
    </div>
    </Fragment>
  )
}

export default SignIn;