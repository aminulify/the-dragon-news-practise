import React, { useContext } from 'react';
import './Header.css';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigation } from 'react-router-dom';
import Snipper from '../../Snippers/Snipper';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogout =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error);
        })
    }

    const navigation = useNavigation();
    return (
        <Container>
            <div className='snipper'>
                {
                    navigation.state==='loading' ? <Snipper></Snipper>:''
                }
            </div>
            <div className='text-center'>
                <div className='pt-4'>
                    <img src="./../../../public/logo.png" alt="Logo Image" />
                    <p className='text-secondary mb-0'><small>Journalism Without Fear or Favour</small></p>
                </div>
                {
                    user && <p className='fw-semibold fs-6'>{moment().format('dddd')}, <span className='text-secondary'>{moment().format('MMMM DDD, YYYY')}</span></p>
                }
            </div>
            <div>
                {
                    user && <div className='d-flex p-3 bg-light border rounded'>
                    <Button variant="danger me-2">Latest</Button>
                    <Marquee speed={40} pauseOnHover={true} direction='right' className='text-danger fw-medium fs-5'>
                    I can be a React component, multiple React components, or just some text...    
                    I can be a React component, multiple React components, or just some text...    
                    I can be a React component, multiple React components, or just some text...    
                    </Marquee>
                </div>
                }
            </div>
            <nav>
            <Navbar collapseOnSelect expand="lg" className={`${user ? 'py-3':'pb-3'}`}>
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between'>
          <Nav className="text-center mx-auto">
                <Nav.Link className='nav-icon fw-medium' href="/">Home</Nav.Link>
                <Nav.Link className='nav-icon fw-medium' href="/about">About</Nav.Link>
                <Nav.Link className='nav-icon fw-medium' href="/career">Career</Nav.Link>
           </Nav>
           <Nav className='justify-content-end'>
                
                <div className='d-flex'>
                    <div>
                        {
                            user && <div className='profile'>
                            <img src={user.photoURL} alt="profile" />
                        </div>
                        }
                    </div>
                    <div>
                        { user ? <Button onClick={handleLogout} variant="danger" className='logout-btn'>Logout</Button> : <Link to= '/user/login'>
                             <Button variant="secondary" className='login-btn'>Login</Button>
                         </Link> 
                        }
                    </div>
                </div>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </nav>
        </Container>
    );
};

export default Header;