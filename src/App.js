import React, {useState} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import ControlScreen from "./components/ControlScreen";
import Login from "./components/Login";
import Register from './components/Register'
import { AuthContext } from './context/auth';
import './App.css';

function App(props){
    const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') || '');

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }
        return(
            <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route path="/register" component={Register} />
                            <PrivateRoute exact path="/activity" component={ControlScreen}/>
                        </Switch>
                    </div>
                </Router>
            </AuthContext.Provider>
        )
}

export default App;
