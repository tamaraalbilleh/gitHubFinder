// react imports 
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getSearchUsers } from '../store/actions'

// material ui imports
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';

// useStyles from material ui 
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    list: {

    },
    form: {
        'margin': '40px', width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    text: { width: 'calc(100% - 90px)', marginBottom: '30px' },
    flag: { width: '100%', backgroundColor: '#f4f4f4', },
    search: { width: 'calc(100% - 90px)', padding: '10px', color: 'white', backgroundColor: '#333' }
}));

// the component 
const Search = (props) => {

    // hooks
    const [flag, setFlag] = useState(false);
    const [query, setQuery] = useState('')

    const classes = useStyles();

    // handlers
    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.query.value === '') {
            setFlag(true)
        } else {
            props.getSearchUsers(query)
            setFlag(false)
            setQuery('')
        }
    }

    const handleChange = e => {
        setQuery(e.target.value)
    }

    // render
    return (
        <>
            <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                {flag && <div className={classes.flag}>

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
                <TextField value={query} onChange={handleChange} name='query' className={classes.text} id="outlined-basic" label="Search Users ..." variant="outlined" />
                <Button type='submit' variant="contained" className={classes.search}>Search</Button>
            </form>

        </>
    );
}


const mapDispatchToProps = { getSearchUsers };
const mapStateToProps = state => state;
export default connect(mapStateToProps, mapDispatchToProps)(Search);
