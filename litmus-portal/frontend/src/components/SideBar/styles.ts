import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: '100%',
    height: '100%',
  },
  drawerPaper: {
    width: '100%',
    position: 'relative',
    backgroundColor: theme.palette.sidebarBackground,
  },
  litmusDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(3.5),
    marginLeft: theme.spacing(4),
    '& img': {
      userDrag: 'none',
    },
  },
  homeLink: {
    textDecoration: 'none',
  },
  logo: {
    left: theme.spacing(4.375),
  },
  litmusHome: {
    width: '4.0625rem',
    height: '1.875rem',
    fontSize: '1.625rem',
    left: theme.spacing(2.25),
    top: theme.spacing(3),
    marginLeft: theme.spacing(1.75),
    color: theme.palette.primary.contrastText,
  },
  drawerListItem: {
    display: 'flex',
    height: '3.187rem',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.homePageCardBackgroundColor,
      '& path': {
        fill: theme.palette.secondary.contrastText,
      },
    },
  },
  active: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: theme.palette.getContrastText(theme.palette.primary.contrastText),
    '& path': {
      fill: theme.palette.common.white,
    },
  },
  listIcon: {
    paddingLeft: theme.spacing(3),
  },
  listText: {
    marginLeft: theme.spacing(0),
    fontSize: '1rem',
  },
  drawerList: {
    marginTop: theme.spacing(8),
    height: '16.68rem',
  },
}));

export default useStyles;
