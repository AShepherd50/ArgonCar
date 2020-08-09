import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Add from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ControlScreen from "./ControlScreen";
import { useAuth } from '../context/auth';

const screenHeight = window.innerHeight;

function DeviceItem({name,isConnected}){
    return(
        <ListItem button style={isConnected === true ? deviceConnected : deviceDisconnected}>
            {name}
        </ListItem>
    )
}

function MainScreen(){
    const Particle = require('particle-api-js');
    const particle = new Particle();
    const { authTokens } = useAuth();
    const [devices, setDevices] = useState([]);

        particle.listDevices({auth: authTokens}).then(
            function(data){
               setDevices(data.body);
            },function(err){
                    alert(err);
                }
            );

        return(
            <div className="App">
                <Drawer
                    variant="permanent"
                    anchor="left"
                >
                    <div style={drawerStyle}>
                        <IconButton aria-label="Logout Button" style={topDrawer}>
                            <AccountCircle  />
                        </IconButton>
                        <Divider style={{backgroundColor: 'black'}}/>
                        <List component="nav" aria-label="User Device List">
                            {devices.map(device =>(
                                <DeviceItem
                                    name={device.name}
                                    key={device.id}
                                    isConnected={device.connected}
                                />
                            ))}
                        </List>
                        <Divider style={{backgroundColor: 'black'}}/>
                        <IconButton aria-label="Claim Device" style={claimButton}>
                            <Add />
                        </IconButton>
                    </div>
                </Drawer>
                <ControlScreen />
            </div>
        )

}

export default MainScreen;

const drawerStyle={
    width: 150,
    backgroundColor: '#64b5f6',
    height: screenHeight,
    borderRight: 'solid'
}

const deviceConnected={
    backgroundColor: 'green',
    fontWeight:'bold'
}

const deviceDisconnected={
    backgroundColor: 'red',
    fontWeight: 'bold'
}

const claimButton={
    backgroundColor: '#006064',
    color: 'black',
    marginTop: 15
}

const topDrawer={
    margin: 50,
    color: 'black'
}
