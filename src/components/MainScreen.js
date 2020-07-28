import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';

function MainScreen(){
    return(
        <div className="App">
            <Drawer
                variant="permanent"
                anchor="left">
                <div>
                    <AccountCircle />
                    <Divider />
                </div>
            </Drawer>

        </div>
    )
}

export default MainScreen;
