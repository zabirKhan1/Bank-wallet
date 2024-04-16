import React from 'react';
import { Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Actionbank() {
  const account = useSelector((state) => state.account);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="cont  ">
      <br />
      <div className="content">
      <div>Hello user</div>
      <br />
      <h2> Your balance is ₹{account.amount}</h2>
      </div>
      <br />
      <div className="btn">
        <Link to="/statement" style={{ textDecoration: 'none' }}>
          <Button  color="secondary">STATEMENTS</Button>
        </Link>
        <Link to="/deposit" style={{ textDecoration: 'none' }}>
          <Button color="secondary" >DEPOSIT</Button>
        </Link>
        <Link to="/withdraw" style={{ textDecoration: 'none' }}>
          <Button color="secondary">WITHDRAW</Button>
        </Link>

     
      </div>
    </div>
  );
}
