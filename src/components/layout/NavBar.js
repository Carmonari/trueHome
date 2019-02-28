import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';

const NavBar = (props) => {

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Casas
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;