import React from 'react';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));

export default function Profile(props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
            <Typography variant="body2" color="textSecondary" align="center"> Send Noods Profile Page </Typography>
            <Typography variant="body2" color="textSecondary" align="center"> {props.user.firstName} {props.user.lastName} </Typography>
            <Typography variant="body2" color="textSecondary" align="center"> {props.user.email} </Typography>
            <Typography variant="body2" color="textSecondary" align="center"> Don't forget Addresses and Orders </Typography>
        </Grid> 
    );
}