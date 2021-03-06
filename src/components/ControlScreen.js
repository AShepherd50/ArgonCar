import React from 'react';
import { Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { AuthContext } from '../context/auth';
import '../App.css';

export default class ControlScreen extends React.Component{
    constructor() {
        super();
        let Particle = require('particle-api-js');
        this.state={
            particle: new Particle(),
        };
    }

    render(){
        let token = this.context.authTokens;
        return(
            <div className="App">
                <div className="top">
                    <Button
                        className="controlButtons"
                        color="secondary"
                        variant="contained"
                        startIcon={<ArrowUpwardIcon />}
                        onClick={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'forward', argument:'', auth:token});


                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchStart={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'forward', argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchEnd={()=>{
                            let dev = this.state.particle.callFunction({deviceId:'shepherd1', name:'forward', argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                    >
                        <h2>Forward</h2>
                    </Button>
                </div>
                <div className="middle">
                    <Button
                        className="controlButtons"
                        color="primary"
                        variant="contained"
                        startIcon={<ArrowBackIcon />}
                        onClick={()=> {
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'left', argument:'', auth:token})

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchStart={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'left', argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchEnd={()=>{
                           let dev = this.state.particle.callFunction({deviceId:'shepherd1', name:'left', argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                    >
                        <h2>Left</h2>
                    </Button>
                    <Button
                        className="controlButtons"
                        color="primary"
                        variant="contained"
                        style={{marginLeft: 30}}
                        endIcon={<ArrowForwardIcon />}
                        onClick={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'right', argument:'', auth:token})

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchStart={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name: "right", argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchEnd={()=>{
                           let dev = this.state.particle.callFunction({deviceId:'shepherd1', name:'right', argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                    >
                        <h2>Right</h2>
                    </Button>
                </div>
                <div className="bottom">
                    <Button
                        className="controlButtons"
                        color="secondary"
                        variant="contained"
                        startIcon={<ArrowDownwardIcon />}
                        onClick={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'reverse', argument:'', auth:token})

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchStart={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'reverse', argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                        onTouchEnd={()=>{
                            let dev = this.state.particle.callFunction({deviceId:'shepherd1', name:'reverse', argument:'', auth: token })

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                    >
                        <h2>Reverse</h2>
                    </Button>
                </div>
                <div className="middle">
                    <Button
                        className="controlButtons"
                        color="secondary"
                        variant="outlined"
                        onClick={()=>{
                           let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'stop', argument:'', auth:token})

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                    >
                        <h2>Stop</h2>
                    </Button>

                    <Button
                        className="midButton"
                        color="primary"
                        variant="outlined"
                        style={{marginLeft: 30}}
                        startIcon={<DriveEtaIcon />}
                        onClick={()=>{
                            let dev = this.state.particle.callFunction({deviceId: 'shepherd1', name:'auto', argument:'', auth:token})

                            dev.then(
                                function(data){
                                },function(err){
                                    alert(err);
                                }
                            );
                        }}
                    >
                        <h2>Auto Drive</h2>
                    </Button>
            </div>
        </div>
        )
    }

}

ControlScreen.contextType = AuthContext;
