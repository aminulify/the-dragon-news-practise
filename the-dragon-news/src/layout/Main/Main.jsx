import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import {Col, Container, Row} from 'react-bootstrap';
import RightNav from '../../RightNav/RightNav';
import LeftNav from '../../leftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import Snipper from '../../Snippers/Snipper';

const Main = () => {
    return (
        <div>
            <Header></Header>

           <Container>
            <Row>
                <Col lg={3}><LeftNav></LeftNav></Col>

                <Col lg={6}>
                    <Outlet></Outlet>
                </Col>

                <Col lg={3}><RightNav></RightNav></Col>
            </Row>
           
           </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;