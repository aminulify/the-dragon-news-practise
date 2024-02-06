import React, { useContext, useState } from 'react';
import Header from '../Shared/Header/Header';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Register.css'
import { Button, Container } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, userMoreInfo} = useContext(AuthContext);
    const [success, setSuccess] = useState();
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const username = form.username.value;
        const imageUrl = form.imageUrl.value;
        const phoneNumber = form.phoneNumber.value;
        console.log(email, password, username, imageUrl, phoneNumber);

        createUser(email, password)
        .then(result =>{
            const createUser = result.user;
            // console.log(createUser)

            userMoreInfo(username, imageUrl)
            .then(result=>{    
                setSuccess('Congratulations! Your registration done.')  
                alert('Congratulations! Your registration done.')
                navigate('/')       
                // const createUser = result.user;
                // console.log(createUser)
            })
            .catch(error=>{
                // console.log(error);
            })
        })
        .catch(error=>{
            // console.log(error);
        })
    }

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked);
        }
    
    

    return (
        <div>
            <Header></Header>
            <Container>
                <form onSubmit={handleRegister} className='register-form'>
                    <div>
                        <h3>Register your account</h3>
                        <label>User Name</label><br/>
                        <input type="text" className='input-box' placeholder='Your user name' name='username' required/><br/>

                        <label>Email</label><br/>
                        <input type="text" className='input-box' placeholder='Your email address' name='email' required/><br/>

                        <label>Password</label><br/>
                        <input type="password" className='input-box' placeholder='Password' name='password' required/><br/>

                        <label>Profile Image</label><br/>
                        <input type="text" className='input-box' placeholder='Your Image URL' name='imageUrl' required/><br/>

                        <label>Phone Number</label><br/>
                        <input type="text" className='input-box' placeholder='Your Mobile Number' name='phoneNumber'/><br/>

                        <div><input onClick={handleAccepted} type="checkbox" name='checkbox'/> <small> Accept <b><Link className='text-danger' to='/user/terms'>Term & Conditions</Link></b></small></div>

                        <p className='text-success'><small>{success}</small></p>

                        <Button variant='dark' disabled={!accepted} type='submit'>Register</Button>
                        <p><small>Have your account? Go to <Link to='/user/login'>Login</Link></small></p>
                    </div>
                </form>
            </Container>

        </div>
    );
};

export default Register;