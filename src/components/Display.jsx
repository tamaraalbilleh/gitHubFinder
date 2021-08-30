// imports 
import React from 'react';
import { useSelector ,connect} from 'react-redux';
import { resetUsers } from '../store/actions'
import { Link } from "react-router-dom";
import {returnState } from '../store/useSelector'
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
    first: { width: '100%', textAlign: 'center' },
    second: { padding: '15px', width: 'calc(100% - 100px)', color: 'white', backgroundColor: '#f4f4f4', margin: 'auto', textAlign: 'center', marginLeft: '-12px' },
    third: { 'display': 'grid', gridTemplateColumns: '1fr 1fr 1fr', 'gap': '30px', padding: '40px', 'textAlign': 'center', margin: 'auto' },
    fourth: { textAlign: 'center' },
    fifth: { width: '100%', display: 'flex', justifyContent: 'center' },
    sixth: { 'textDecoration': 'none', 'width': '35%' },
    seventh: { padding: '15px', width: '100%', color: 'white', 'backgroundColor': '#333' },
});


// component 
const Display = (props) => {
    // variables 
    const classes = useStyles();
    const state = useSelector(()=> returnState (props))

    // handles 
    const handleClick = () => {
        props.resetUsers()
    }

    // returns
    return (
        <>
            <div className={classes.first}>

                {(state.users.users.length !== 0) && <Button onClick={handleClick} size="small" color="white" className={classes.second}>
                    Clear
                </Button>
                }
                {state.users.users &&
                    <div className={classes.third}>




                        {
                            state.users.users.map((item) => {
                                return (
                                    <Card className={classes.root} key={item.id}>
                                        <CardActionArea>

                                            <CardMedia

                                                className={classes.media}
                                                image={item.avatar_url}
                                            />
                                            <CardContent>
                                                <div className={classes.fourth}>

                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {item.login}
                                                    </Typography>
                                                </div>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions >
                                            <div className={classes.fifth} >

                                                <Link to={`/user/${item.login}`} className={classes.sixth}>
                                                    <Button size="small" color="white" className={classes.seventh}>
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
        </>
    );
}

const mapDispatchToProps = { resetUsers };
const mapStateToProps = state => state;
export default connect(mapStateToProps, mapDispatchToProps)(Display);
