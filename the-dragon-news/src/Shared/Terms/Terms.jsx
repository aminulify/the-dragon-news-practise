import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <Container className='my-5'>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit mollitia alias numquam magnam, dignissimos quo eaque, laboriosam suscipit, aliquid perferendis illum optio debitis? Similique neque in qui nesciunt sed molestias officia quidem cupiditate dignissimos assumenda quae vel eum quas, consequuntur praesentium totam consequatur minima delectus laboriosam itaque autem beatae suscipit! <Link className='fw-medium text-danger' to='/user/register'>Register</Link></p>
            </Container>
        </div>
    );
};

export default Terms;