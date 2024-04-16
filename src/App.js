import React from 'react';
import './style.css';
import { Snackbar } from '@material-ui/core';
import NavBar from './Components/NavBar';
import Actionbank from './Components/Actionbank';
import Statement from './Components/Statement';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App(props) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Actionbank />} />
        <Route
          path="/deposit"
          element={<Deposit setOpen={setOpen}  setMessage={setMessage}></Deposit>}
        />
        <Route
          path="/withdraw"
          element={<Withdraw setOpen={setOpen} setMessage={setMessage}></Withdraw>}
        />
        <Route path="/statement" element={<Statement />} />
      </Routes>
      <Snackbar

anchorOrigin={{  vertical: 'Bottom',
horizontal: 'left' }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message={message}
      />

      
    </BrowserRouter>
  );
}
