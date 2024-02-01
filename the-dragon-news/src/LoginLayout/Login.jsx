import React, { useContext, useState } from 'react';
import Header from '../Shared/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './Login.css'
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const [error,setError] = useState();
    const navigate = useNavigate();

    const handleSignIn = event =>{
        setError();
        event.preventDefault();
        const form = event.target;
        const email  = form.email.value;
        const password  = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result=>{
            const loggedIn = result.user;
            console.log(loggedIn);
            
            navigate('/');

        })
        .catch(error=>{
            setError('*Wrong email and password...')
            console.log(error);
        })
        
    }

  

    return (
        <div>
            <Header></Header>
            <Container>
                <form onSubmit={handleSignIn} className='login-form'>
                    <div>
                        <h3>Login your account</h3>
                        <label>Email</label><br/>
                        <input type="text" placeholder='Your email address' name='email'/><br/>
                        <label>Password</label><br/>
                        <input type="password" placeholder='Password' name='password'/><br/>
                        <p><small className='text-danger'>{error}</small></p>
                        <Button type='submit' variant='dark'>Login</Button>
                        <p><small>Don’t Have An Account? <Link to='/user/register'>Register</Link></small></p>
                    </div>
                </form>
            </Container>

        </div>
    );
};

export default Login;