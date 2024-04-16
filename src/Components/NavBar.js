import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Outlet, Link } from 'react-router-dom';
export default function Navbar() {
  return (
<div className="cont">
<AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          <div className="nav">
            <Link to="/">
              <AccountBalanceIcon
                style={{ color: 'white' ,marginRight:"8px"}}
              ></AccountBalanceIcon>
            </Link>
            My Bank
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
}
