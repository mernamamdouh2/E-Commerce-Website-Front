import { Col, Row } from 'react-bootstrap'

import React from 'react'
import UserAllOrderCard from './UserAllOrderCard'

const UserAllOrderItem = ({ orderItem }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="user-order mt-2 p-3">
            <Row>
                <div className="py-2 order-title">طلب رقم #{orderItem.id || 0}  &gt;&gt;&gt;  تم بتاريخ {formatDate(orderItem.createdAt)}</div>
            </Row>
            {
                orderItem.cartItems ? (orderItem.cartItems.map((item, index) => {
                    return <UserAllOrderCard key={index} item={item} />
                })) : null
            }

            <Row className="d-flex justify-content-between">
                <Col xs="6" className="d-flex">
                    <div>
                        <div className="d-inline"> التوصيل :</div>
                        <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? <span className='bg-success text-white p-1 rounded-3'>تم التوصيل </span>: <span className='bg-warning text-dark p-1 rounded-3'>لم يتم </span>}</div>
                    </div>
                    <div>
                        <div className="d-inline"> الدفع :</div>
                        <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? <span className='bg-success text-white p-1 rounded-3'>تم الدفع </span> : <span className='bg-warning text-dark p-1 rounded-3'>لم يتم </span>}</div>
                    </div>
                    <div>
                        <div className="d-inline">طريقة الدفع :</div>
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
    )
}

export default UserAllOrderItem