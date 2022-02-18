import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

import { validateEmail } from '../utils/helpers';



 


export default function Contact() {
  const [email, setEmail] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } 
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    alert(`Thank you for reaching out`);

    setEmail('');
  };


  return (
    <div className="justify-items-center m-5">
     <Form className='justify-items-center' class="centerForm" style={{ width: '45rem' }} >
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="email"/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email}
          name="email"
          onChange={handleInputChange}
          type="email" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3}  style={{ height: '25rem' }}/>
  </Form.Group>
  <button className='btn btn-dark' type="button" onClick={handleFormSubmit}>Submit</button>
</Form>
{errorMessage && (
        <div class="errorColor">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
