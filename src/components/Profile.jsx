import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser } from '../store/actions'
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { getRepos } from '../store/actions'
import { useHistory } from "react-router-dom";

function Profile(props) {

    // preparing the url 
    const name = window.document.URL.split('/')
    const username = name[name.length - 1]
    const url = `https://api.github.com/users/${username}`


    const dispach = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispach(getProfileUser(url))
        dispach(getRepos(username))
    }, [])

    const state = useSelector((state) => {
        return {
            user: state.user, repos: state.repos
        }
    })
    const handleClick = () => {
        history.push('/')
        
    }

    console.log(state)
    const user = state.user
    const lables = {
        Followers: `Followers : ${user.user.followers}`,
        Following: `Following : ${user.user.following}`,
        Public: `Public Repos : ${user.user.public_repos}`,
        Gists: `Public Gists : ${user.user.public_gists}`,
    }
    return (
        <React.Fragment >
            <div style={{ margin: '40px' }}>

                <div style={{ gap: '20px', width: 'calc(100% - 80px)', padding: '20px', display: 'grid', gridTemplateColumns: '10% 10% 80%', marginBottom: '20px' }}>
                    <Button onClick={handleClick} size="small" color="white" style={{ padding: '15px', width: '150px', color: 'white', backgroundColor: '#f4f4f4', color: 'black', textAlign: 'center', marginLeft: '-12px' }}>
                        Back To Search
                    </Button>
                    <p>
                        Hireable: {!user.user.hireable ? '❌' : '✔️'}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', border: 'gray 1px dotted', width: 'calc(100% - 80px)', padding: '20px', marginBottom: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={user.user.avatar_url} alt='profile' style={{ height: '150px', width: '150px', borderRadius: '50%' }} />
                        <h2>{user.name}</h2>
                        <p>Location: {user.user.location}</p>
                    </div>
                    <div>
                        <h3>Bio</h3>
                        <p>{user.user.bio}</p>
                        <Button type='submit' variant="contained" style={{ width: '40%', padding: '10px', color: 'white', backgroundColor: '#333' }}>

                            <a href={user.user.html_url} style={{ textDecoration: 'none', color: 'white' }}>visit Github Profile</a>
                        </Button>
                        <p>Username: {user.user.login}</p>
                    </div>
                </div>
                <div style={{ border: 'gray 1px dotted', width: 'calc(100% - 80px)', padding: '20px', marginBottom: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Chip
                        label={lables.Followers}
                        clickable
                        style={{ backgroundColor: '#dc3545', color: 'white' }}

                    />
                    <Chip
                        label={lables.Following}
                        clickable
                        style={{ backgroundColor: '#28a745', color: 'white' }}

                    />
                    <Chip
                        label={lables.Public}
                        clickable
                        style={{ backgroundColor: '#f4f4f4', color: 'black' }}

                    />
                    <Chip
                        label={lables.Gists}
                        clickable
                        style={{ backgroundColor: '#333', color: 'white' }}

                    />

                </div>
                {
                    state.repos.repos && <div>
                        {
                            state.repos.repos.map((repo) => {
                                return (
                                    <div style={{ color: 'red', border: 'gray 1px dotted', width: 'calc(100% - 80px)', padding: '20px', marginBottom: '20px' }}>
                                        <a href={repo.html_url} style={{ textDecoration: 'none', color: 'red', fontSize: '30px' }}>
                                            {repo.name}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                }



            </div>

        </React.Fragment>
    )
}
export default Profile