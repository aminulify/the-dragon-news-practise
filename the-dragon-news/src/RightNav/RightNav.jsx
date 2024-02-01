import React, { useContext } from 'react';
import './RightNav.css';
import { Button } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import QZone from '../QZone/QZone';
import { AuthContext } from '../Provider/AuthProvider';


const RightNav = () => {
    const {googleSignInPop} = useContext(AuthContext);

    const handleGooglePop = () =>{
        googleSignInPop()
        .then(result=>{
            const loggedIn = result.user;
            console.log(loggedIn);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className='mb-4'>
            <h4 className='right-side-heading'>Login With</h4>
            <Button onClick={handleGooglePop} className='w-100 my-2' variant="outline-primary"><FaGoogle/> Login With Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub/> Login With Github</Button>

           <div className='mt-4'>
            <h4>Find Us On</h4>
            <div className='d-flex flex-column gap-2'>
                <Link to='https://www.facebook.com/adaminuldesigner/' target='_blank'>
                    <Button className='w-100' variant="outline-secondary"><FaFacebook/> Facebook</Button>
                </Link>
                <Link to='/'>
                    <Button className='w-100' variant="outline-secondary"><FaTwitter/> Twitter</Button>
                </Link>
                <Link to='/'>
                    <Button className='w-100' variant="outline-secondary"><FaInstagram/> Instagram</Button>
                </Link>
            </div>
           </div>
           <QZone></QZone>
           <div className='rightside-img rounded'>
                <h3 className='fw-bold fs-2 text-center text-white'>Create an Amazing Newspaper</h3>
                <div className='px-4 text-center'>
                <p className='text-white'><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
                <Button variant="danger" className='p-3 fw-semibold'>Learn More</Button>
                </div>
           </div>
        </div>
    );
};

export default RightNav;