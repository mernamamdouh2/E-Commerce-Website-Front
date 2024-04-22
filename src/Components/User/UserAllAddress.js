import { Col, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import React from 'react'
import UserAddressCard from './UserAddressCard'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'

const UserAllAddress = () => {
    const [res] = ViewAddressesHook()
    
    return (
        <div>
            <div className="admin-content-text pb-4">دفتر العنوانين</div>
            {
                res.data ? (res.data.map((item, index) => {
                    return <UserAddressCard key={index} item={item} />
                })) : <h6>لا يوجد عنوانين حتى الان</h6>
            }

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div >
    )
}

export default UserAllAddress