import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default withStyles((theme) => ({
  root: {
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(12),
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
    border: "1px solid #005BAB",
    boxShadow: 'none',
    '&:active, &:focus': {
      backgroundColor: '#005BAB',
      color: '#fff',
      boxShadow: 'none'
    },
    '&:hover': {
      backgroundColor: '#005BAB',
      color: '#fff',    
    },
    height: 27,
    width: 132,
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
}))(Button);