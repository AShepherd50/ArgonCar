import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


export default function Login() {

    const [username, setUsername] = '';
    const [password, setPassword] = '';

    return (
        <div style={mainStyle}>
            <Container style={inner}>
                <h1>Sign In</h1>
                <InputLabel style={labelStyle} htmlFor="component-simple">Username:</InputLabel>
                <TextField
                    style={{width: 250}}
                    variant="outlined"
                    id="component-simple"
                    value={username}
                    onChange={setUsername}
                />
                <InputLabel style={labelStyle} htmlFor="password-component">Password:</InputLabel>
                <TextField
                    style={{width: 250}}
                    variant="outlined"
                    id="password-component"
                    value={password}
                    type='password'
                    onChange={setPassword}
                />
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        style={loginButton}
                    >
                        Login
                    </Button>
                </div>
                <p style={{marginTop: 50}}>Don't have an Account Yet? Click Here to Register</p>
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
    height: 400,
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
}



