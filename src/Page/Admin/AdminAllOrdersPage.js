import { Col, Container, Row } from 'react-bootstrap'

import AdminAllOrders from '../../Components/Admin/AdminAllOrders'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import React from 'react'

const AdminAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllOrders />
                </Col>
            </Row>
        </Container>
    )
}
export default AdminAllOrdersPage
