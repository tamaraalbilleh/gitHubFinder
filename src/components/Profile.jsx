// react imports 
import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { getProfileUser } from '../store/actions'
import { useHistory } from "react-router-dom";
import { getRepos } from '../store/actions'
import { returnState } from '../store/useSelector'
// imports for material ui 
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    one: { margin: '40px' },
    two: { gap: '20px', width: 'calc(100% - 80px)', padding: '20px', display: 'grid', gridTemplateColumns: '10% 10% 80%', marginBottom: '20px' },
    three: { padding: '15px', width: '150px', color: 'white', backgroundColor: '#f4f4f4', color: 'black', textAlign: 'center', marginLeft: '-12px' },
    four: { display: 'grid', gridTemplateColumns: '50% 50%', border: 'gray 1px dotted', width: 'calc(100% - 80px)', padding: '20px', marginBottom: '20px' },
    five: { textAlign: 'center' },
    six: { height: '150px', width: '150px', borderRadius: '50%' },
    seven: { width: '40%', padding: '10px', color: 'white', backgroundColor: '#333' },
    eight: { textDecoration: 'none', color: 'white' },
    nine: { border: 'gray 1px dotted', width: 'calc(100% - 80px)', padding: '20px', marginBottom: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px' },
    ten: { backgroundColor: '#dc3545', color: 'white' },
    eleven: { backgroundColor: '#28a745', color: 'white' },
    twilve: { backgroundColor: '#f4f4f4', color: 'black' },
    therteen: { backgroundColor: '#333', color: 'white' },
    a: { color: 'red', border: 'gray 1px dotted', width: 'calc(100% - 80px)', padding: '20px', marginBottom: '20px' },
    b: { textDecoration: 'none', color: 'red', fontSize: '30px' },
}));





function Profile(props) {

    // preparing the url 
    const name = window.document.URL.split('/')
    const username = name[name.length - 1]
    const url = `https://api.github.com/users/${username}`

    // hooks
    let history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        props.getProfileUser(url)
        props.getRepos(username)
    }, [])

    const state = useSelector(() => returnState(props))

    // handlers 
    const handleClick = () => {
        history.push('/')

    }

    // preparing variables 
    const user = state.user
    const lables = {
        Followers: `Followers : ${user.user.followers}`,
        Following: `Following : ${user.user.following}`,
        Public: `Public Repos : ${user.user.public_repos}`,
        Gists: `Public Gists : ${user.user.public_gists}`,
    }

    // render 
    return (
        < >
            <div className={classes.one}>

                <div className={classes.two}>
                    <Button onClick={handleClick} size="small" color="white" className={classes.three}>
                        Back To Search
                    </Button>
                    <p>
                        Hireable: {!user.user.hireable ? '❌' : '✔️'}
                    </p>
                </div>

                <div className={classes.four}>
                    <div className={classes.five}>
                        <img src={user.user.avatar_url} alt='profile' className={classes.six} />
                        <h2>{user.name}</h2>
                        <p>Location: {user.user.location}</p>
                    </div>
                    <div>
                        <h3>Bio</h3>
                        <p>{user.user.bio}</p>
                        <Button type='submit' variant="contained" className={classes.seven}>

                            <a href={user.user.html_url} className={classes.eight}>visit Github Profile</a>
                        </Button>
                        <p>Username: {user.user.login}</p>
                    </div>
                </div>
                <div className={classes.nine}>
                    <Chip
                        label={lables.Followers}
                        clickable
                        className={classes.ten}

                    />
                    <Chip
                        label={lables.Following}
                        clickable
                        className={classes.eleven}

                    />
                    <Chip
                        label={lables.Public}
                        clickable
                        className={classes.twilve}

                    />
                    <Chip
                        label={lables.Gists}
                        clickable
                        className={classes.therteen}

                    />

                </div>
                {
                    state.repos.repos && <div>
                        {
                            state.repos.repos.map((repo) => {
                                return (
                                    <div className={classes.a}>
                                        <a href={repo.html_url} className={classes.b}>
                                            {repo.name}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                }



            </div>

        </>
    )
}
const mapDispatchToProps = { getProfileUser, getRepos };
const mapStateToProps = state => state;
export default connect(mapStateToProps, mapDispatchToProps)(Profile);