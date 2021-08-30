
// react imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    div: {
        'padding': '39px'
    },
    h2: {
        'fontSize': '40px'
    },
    p: {
        'fontSize': '25px'
    }
}));


// compoonent 
function About() {
    const classes = useStyles();
    // render 
    return (
        <>
            <div className={classes.div}>

                <h2 className={classes.h2}>
                    About This App
                </h2>
                <p className={classes.p}>
                    App to search Github users
                </p>
                <p className={classes.p}>
                    Version: 1.0.0
                </p>
            </div>
        </>
    )
}

export default About