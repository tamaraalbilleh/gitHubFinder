import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchUsers } from '../store/actions'





import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Search = (props) => {
    const [flag, setFlag] = useState(false)
    const dispach = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log ('submitted ' , e.target.query.value)
        if (e.target.query.value === '') {
            setFlag(true)
        } else {
            dispach(getSearchUsers(e.target.query.value))
            setFlag(false)
            e.target.query.value = ''
        }
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} style={{ 'margin': '40px', width: '100%' }} className={classes.list} noValidate autoComplete="off">
                {flag && <div style={{ width: '100%', backgroundColor: '#f4f4f4', }}>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <InfoIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Please enter something" />
                    </ListItem>
                </div>
                }
                <br />
                <TextField name='query' style={{ width: 'calc(100% - 90px)', marginBottom: '30px' }} id="outlined-basic" label="Search Users ..." variant="outlined" />
                <Button type='submit' variant="contained" style={{ width: 'calc(100% - 90px)', padding: '10px', color: 'white', backgroundColor: '#333' }}>Search</Button>
            </form>

        </React.Fragment>
    );
}

export default Search;