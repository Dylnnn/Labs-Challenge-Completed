import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Search from "./search"

const NavBar = () => {

  return (
    <React.Fragment>
      <AppBar position="relative" color="primary">
        <Toolbar >

          <Search />
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}


export default NavBar;
