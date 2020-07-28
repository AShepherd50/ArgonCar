import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import{
    Redirect,
    Link,
}from "react-router-dom";
import { useAuth } from '../context/auth';

export default function Login() {
    const Particle = require('particle-api-js');
    const particle = new Particle();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useAuth();

    function verifyLogin() {

        particle.login({username: username, password: password}).then(

             function(data) {
                 const x = data.body.access_token;
                 setAuthTokens(x);
                 setLoggedIn(true);
                 },
                function(err) {
                    alert('Invalid Login Credential');
                    setIsError(true);
                }
             )
    }

    if( isLoggedIn ) {
        return <Redirect to="/activity"/>;
    }

    return (
            <div style={mainStyle}>
                <Container style={inner}>
                    <h1>Sign In</h1>
                    <InputLabel style={labelStyle} htmlFor="component-simple">Username:</InputLabel>
                    <TextField
                        style={{width: 300}}
                        variant="outlined"
                        id="component-simple"
                        value={username}
                        onChange={e =>{
                            setUsername(e.target.value);
                        }}
                    />
                    <InputLabel style={labelStyle} htmlFor="password-component">Password:</InputLabel>
                    <TextField
                        style={{width: 300}}
                        variant="outlined"
                        id="password-component"
                        value={password}
                        type='password'
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                    <div style={{marginBottom: 40}}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={loginButton}
                            onClick={verifyLogin}
                        >
                            Login
                        </Button>
                    </div>
                    <Link to="/register">Don't have an Account Yet? Click Here to Register</Link>
                </Container>
            </div>
    )
}

const mainStyle={
    marginTop: 100,
    flexDirection: "column",
}

const inner={
    borderStyle: 'solid',
    borderColor: '#344ceb',
    borderRadius: 15,
    height: 500,
    width: 375,
}

const labelStyle={
    fontWeight: 'bold',
    marginTop: 50,
    marginRight: 175,
    color: 'black',
}

const loginButton={
    marginTop: 25,
    marginLeft: 100

}



