import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GlobalContext from '../context/global-context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: '44px'
  },
  title: {
    flexGrow: 1
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  const { title } = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            {/* Lajmet e përmbledhura teknologjike */}
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
