import { Col, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import React from 'react'

const AdminAllOrdersItem = ({ orderItem }) => {
    return (
        <Col sm="12">
            <Link to={`/admin/orders/${orderItem._id}`}
                className="cart-item-body-admin my-2 d-flex px-2"
                style={{ textDecoration: "none" }}>
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">طلب رقم #{orderItem.id}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                طلب من &gt;&gt; {orderItem.user.name || ''}
                            </div>
                            <div className="d-inline pt-2 cat-rate me-2 text-primary">{orderItem.user.email || ''}</div>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-between">
                        <Col xs="6" className="d-flex">
                            <div>
                                <div className="d-inline text-dark"> التوصيل :</div>
                                <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? <span className='bg-success text-white p-1 rounded-3'>تم التوصيل </span>: <span className='bg-warning text-dark p-1 rounded-3'>لم يتم </span>}</div>
                            </div>
                            <div>
                                <div className="d-inline text-dark"> الدفع :</div>
                                <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? <span className='bg-success text-white p-1 rounded-3'>تم الدفع </span> : <span className='bg-warning text-dark p-1 rounded-3'>لم يتم </span>}</div>
                            </div>

                            <div>
                                <div className="d-inline text-dark">طريقة الدفع :</div>
                                <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === 'cash' ? <span className='bg-secondary text-white p-1 rounded-3'>كاش</span> : <span className='bg-primary text-white p-1 rounded-3'>بطاقة ائتمانية</span>}</div>
                            </div>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-end">
                            <div>
                                <div className="barnd-text">{orderItem.totalOrderPrice || 0} جنية</div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Link>
        </Col >
    )
}

export default AdminAllOrdersItem