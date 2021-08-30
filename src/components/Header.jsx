// react imports 
import React from 'react';
import { Link } from "react-router-dom";

// material ui imports 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

// use Styles from material ui 
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    AppBar: { 'background': '#dc3545', 'color': 'white' },
    div: { 'float': 'right', 'textDecoration': 'none' },
    Link: { 'color': 'white', 'textDecoration': 'none', margin: '10px' },
}));


// component 
const Header = function () {
    // hooks
    const classes = useStyles();

    // render
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <GitHubIcon />  Github Finder
                        <div className={classes.div}>
                            <Link className={classes.Link} to="/">Home</Link>
                            <Link className={classes.Link} to="/about">About</Link>

                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
