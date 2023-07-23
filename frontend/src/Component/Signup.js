import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send registration data to the backend
        axios.post('/register', { username, email, password })
          .then((response) => {
            console.log(response.data);
            // Clear the form fields after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
          })
          .catch((error) => {
            console.error('Error during registration:', error);
          });
      };
    return (
        <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
            <div className='bg-white p-3 rounded w-25'>
                <h1>Register User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name: </strong></label>
                        <input type='text' placeholder='enter name' value={username} className='form-control rounded-0' onChange={(e) => setUsername(e.target.value)}></input>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email: </strong></label>
                        <input type='email' placeholder='enter email' value={email} className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)}></input>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password: </strong></label>
                        <input type='password' placeholder='enter password' value={password} className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}></input>

                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0 text-decoration-none'>Submit</button>

                </form>
                
            </div>
            
        </div>
    )
}

export default Signup