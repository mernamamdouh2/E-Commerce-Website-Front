import { Col, Container, Row } from 'react-bootstrap'

import AdminEditProducts from '../../Components/Admin/AdminEditProducts';
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import React from 'react'

const AdminEditProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminEditProducts />
                </Col>
            </Row>
        </Container>
    )
}
export default AdminEditProductsPage