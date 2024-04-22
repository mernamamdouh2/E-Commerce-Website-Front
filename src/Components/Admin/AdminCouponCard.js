import { Button, Col, Modal, Row } from 'react-bootstrap'

import CouponCardHook from '../../hook/coupon/coupon-card-hook'
import { Link } from 'react-router-dom';
import React from 'react'
import deleteIcon from '../../images/delete.png'
import editIcon from '../../images/edit.png'

const AdminCouponCard = ({ coupon }) => {

    const [formatDate, dateString, show, handleClose, handleShow, handleDelete] = CouponCardHook(coupon)

    return (
        <div className="user-address-card my-3 px-2">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>هل انت متاكد من عملية الحذف للكوبون</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" onClick={handleDelete}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="d-flex justify-content-between">
                <Col xs="6">
                    <div className="p-2">اسم الكوبون: {coupon.name}</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <Link to={`/admin/editcoupon/${coupon._id}`} style={{ textDecoration: 'none' }}>
                            <div className="d-flex mx-2">
                                <img
                                    alt="editIcon"
                                    className="ms-1 mt-2"
                                    src={editIcon}
                                    height="17px"
                                    width="15px"
                                />
                                <p className="item-delete-edit"> تعديل</p>
                            </div>
                        </Link>
                        <div onClick={handleShow} className="d-flex ">
                            <img
                                alt="deleteIcon"
                                className="ms-1 mt-2"
                                src={deleteIcon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> ازاله</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        تاريخ الانتهاء:  {formatDate(dateString)}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        نسبه الخصم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {coupon.discount} %
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default AdminCouponCard