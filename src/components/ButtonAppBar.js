import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import HomeButton from './buttons/HomeButton.js';
import LoginButton from './buttons/LoginButton.js';
import SignupButton from './buttons/SignupButton.js';
import LogoutButton from './buttons/LogoutButton.js';
import ProfileButton from './buttons/ProfileButton.js';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0
  },
  bar: {
    height: 85
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
        {props.token === undefined
        ?<Toolbar position="static" className={classes.bar}>
          <HomeButton/>
          <LoginButton/>
          <SignupButton/>
        </Toolbar>
        :<Toolbar position="static" className={classes.bar}>
          <HomeButton/>
          <LogoutButton/>
          <ProfileButton/>
        </Toolbar>}
    </div>
  );
}
