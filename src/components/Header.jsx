import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

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
}));



const Header = function (props) {

    const classes = useStyles();

   
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ 'background': '#dc3545', 'color': 'white' }}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <GitHubIcon />  Github Finder
                        <div style={{ 'float': 'right' , 'textDecoration' : 'none'}}>
                            <Link style={{'color' : 'white' , 'textDecoration' : 'none' ,margin : '10px'}} to="/">Home</Link>
                            <Link style={{'color' : 'white' , 'textDecoration' : 'none' ,margin : '10px'}} to="/about">About</Link>

                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}


// const mapStateToProps = (state) => {
//   return { cart: state.cart };
// };

// const mapDispatchToProps = {  }
export default Header;
