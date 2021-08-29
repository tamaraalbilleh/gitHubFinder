// imports 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetUsers } from '../store/actions'
import { Link } from "react-router-dom";

// material ui imports 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



// material ui styles 
const useStyles = makeStyles({
    root: {
        maxWidth: 'calc(100% - 40px)',
    },
    media: {
        height: 100,
        width: 100,
        borderRadius: '50%',
        margin: 'auto'
    },
});


// component 
const Display = (props) => {
    // variables 
    const classes = useStyles();
    const dispach = useDispatch();
    const state = useSelector((state) => {
        return state.users

    })

    // handles 
    const handleClick = () => {
        console.log('before users')
        dispach(resetUsers())
    }

    // returns
    console.log('this is the state', state)
    return (
        <React.Fragment>
            <div style={{ width: '100%', textAlign: 'center' }}>

                {(state.users.length !== 0) && <Button onClick={handleClick} size="small" color="white" style={{ padding: '15px', width: 'calc(100% - 100px)', color: 'white', backgroundColor: '#f4f4f4', color: 'black', margin: 'auto', textAlign: 'center', marginLeft: '-12px' }}>
                    Clear
                </Button>
                }
                {state.users &&
                    <div style={{ 'display': 'grid', gridTemplateColumns: '1fr 1fr 1fr', 'gap': '30px', padding: '40px', 'textAlign': 'center', margin: 'auto' }}>




                        {
                            state.users.map((item) => {
                                return (
                                    <Card className={classes.root} key={item.id}>
                                        <CardActionArea>

                                            <CardMedia
                                                // style={{'bord'}}
                                                className={classes.media}
                                                image={item.avatar_url}
                                            />
                                            <CardContent>
                                                <div style={{ textAlign: 'center' }}>

                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {item.login}
                                                    </Typography>
                                                </div>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions >
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >

                                                <Link to={`/user/${item.login}`} style={{ 'textDecoration': 'none', 'width': '35%' }}>
                                                    <Button size="small" color="white" style={{ padding: '15px', width: '100%', color: 'white', 'backgroundColor': '#333' }}>
                                                        More

                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardActions>
                                    </Card>
                                )
                            })

                        }

                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default Display;