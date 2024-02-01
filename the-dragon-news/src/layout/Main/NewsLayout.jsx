import React from 'react';
import RightNav from '../../RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

          
            <Container>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>
                </Col>

                <Col lg={3}><RightNav></RightNav></Col>
            </Row>
            </Container>


            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;