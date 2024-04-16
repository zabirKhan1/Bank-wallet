import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actioncreator } from '../State/Indexa';
import { Formik, Form, Field } from 'formik';
export default function Deposit(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="cont">
      <br />
      <h4> Deposit Form </h4>
      <br />
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(value) => {
          navigate('/');
          props.setOpen(true);
          props.setMessage(`₹ ${value.name} deposited successfully`)
          dispatch(actioncreator.deposite(parseFloat(value.name)));
        }}
      >
        <Form>
          <div>
            <label style={{ fontSize: '12px' }}>Enter Amount</label>
          </div>
          <Field
            style={{ border: '', padding: '10px' }}
            type="number"
            name="name"
          ></Field>
          <br></br>
          <br />
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              padding: '9px',
              borderRadius: '3px',
            }}
          >
            Deposit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
