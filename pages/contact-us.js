import React from 'react';
import clsx from 'clsx';

//Form Handling Libraries
import { useFormik } from 'formik';
import * as yup from 'yup';

//Imported supporting components
import Layout from '../src/layouts';

//Material UI components
import {
  Button,
  Typography,
  TextField,
  makeStyles,
  Grid,
} from '@material-ui/core';
import Hero from '../src/components/HeroSection2';
import ProductSmoking2 from '../src/components/ProductSmoking2';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.typography.pxToRem(48),
    paddingTop: theme.typography.pxToRem(48),
    paddingRight: theme.typography.pxToRem(128),
    paddingLeft: theme.typography.pxToRem(128)
  },
  heading: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '58px',
    color: '#E5B122',
    textShadow: '2px 2px 0px #FFFFFF',
    paddingBottom: theme.typography.pxToRem(48)
  },
  body: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '28px',
  },
  captionStyle: {
    color: '#fff'
  },
  heading3: {
    color: theme.palette.primary.main,
    textAlign: 'center'
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
  sectionSpace: {
    paddingBottom: theme.typography.pxToRem(64),
    paddingTop: theme.typography.pxToRem(64)
  },
  spaceOnPanel: {
    paddingRight: theme.typography.pxToRem(64),
    paddingLeft: theme.typography.pxToRem(64),
    paddingTop: theme.typography.pxToRem(24),
    paddingBottom: theme.typography.pxToRem(24),
    margin: 'auto'
  },
  heading2: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '48px',
    lineHeight: '58px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    color: '#005BAB',
    textShadow: '6px 6px 0px rgba(255, 255, 255, 0.89)'
  },
  formStyle: {
    background: '#FFFFFF',
    border: '2px solid #005BAB',
    boxSizing: 'border-box',
    marginBottom: theme.typography.pxToRem(8),
    marginTop: theme.typography.pxToRem(8)
  },
  gridSpacing: {
    paddingTop: theme.typography.pxToRem(64)
  },
  buttonStyle: {
    background: '#005BAB',
    boxShadow: '6px 6px 0px #FFFFFF',
    color: '#fff',
    paddingTop: theme.typography.pxToRem(12),
    paddingBottom: theme.typography.pxToRem(12),
    borderRadius: 0
  }
}));

//phone RegEx
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

//validation scheme
const validationSchema = yup.object({
  first_name: yup.string('Enter your first_name').required('first_name is required'),
  last_name: yup.string('Enter your last_name').required('last_name is required'),
  company_name: yup.string('Enter your company_name').required('company_name is required'),
  company_address: yup.string('Enter your company_address').required('company_address is required'),
  phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string('Enter your email').email('Enter valid Email').required('email is required'),
  description: yup.string('Enter your description').required('description is required')
})

function AboutUs() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      company_name: '',
      company_address: '',
      phone_number: '',
      email: '',
      description: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 7));
    }
  });

  return (
    <Layout>
      <Hero pathname="/contact-us"/>
      <div className={clsx([classes.sectionBlue, classes.sectionSpace])}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.spaceOnPanel}
        >
          <Grid
            item
            container
            justify="center"
            xs={12}
            md={6}
          >
            <img
              className={classes.imageShow}
              src="/MBI-Plant.png" 
              alt="mbi-plant"
            />            
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="h4"
              className={classes.heading}
            >
                FACTORY <br/>LOCATION
            </Typography>
            <Typography
              variant="body2"
              className={clsx([classes.body, classes.captionStyle])}
            >
              MBI Seafood<br/>
              PT Muria Bahari Indonesia<br/>
              Jalan Raya Dukuh Tulis, RT 03 RW 08,<br/>
              Desa Besito Kecamatan Gebog, Kabupaten Kudus,<br/>
              Central Java, Indonesia<br/>
              <br/><br/><br/>
              Telp : (0291) 4259 111<br/>
              Fax : (0291) 4259 112<br/>
              Email : admin@mbi-seafood.co.id
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div id="enquiry-form" className={clsx([classes.sectionYellow, classes.root])}>
        <Typography
          variant="h3"
          className={classes.heading2}
        >
          CUSTOMER EXPERIENCE
        </Typography>
        <Typography
          variant="body2"
          className={clsx([classes.body, classes.heading3])}
        >
          Don't hestitate to contact us
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={2}
            className={classes.gridSpacing}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="first_name"
                id="first_name"
                variant="outlined"
                label="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="last_name"
                id="last_name"
                variant="outlined"
                label="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="company_name"
                id="company_name"
                variant="outlined"
                label="Company Name"
                value={formik.values.company_name}
                onChange={formik.handleChange}
                error={formik.touched.company_name && Boolean(formik.errors.company_name)}
                helperText={formik.touched.company_name && formik.errors.company_name}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="company_address"
                id="company_address"
                variant="outlined"
                label="Company Address"
                value={formik.values.company_address}
                onChange={formik.handleChange}
                error={formik.touched.company_address && Boolean(formik.errors.company_address)}
                helperText={formik.touched.company_address && formik.errors.company_address}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="phone_number"
                id="phone_number"
                variant="outlined"
                label="Phone Number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                helperText={formik.touched.phone_number && formik.errors.phone_number}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="email"
                id="email"
                variant="outlined"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="description"
                id="description"
                variant="outlined"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
            >
              <TextField
                fullWidth
                className={classes.formStyle}
                name="form1"
                id=""
                variant="outlined"
                label="change this label"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
            >
              <Button
                className={clsx([classes.buttonStyle, classes.body])}
                fullWidth
                type="submit"
              >
                SEND
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Layout>
  )
}

export default AboutUs;