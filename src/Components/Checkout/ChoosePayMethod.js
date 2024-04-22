import { Col, Row } from 'react-bootstrap'
import React, { useState } from 'react'

import GetAllUserCartHook from './../../hook/cart/get-all-user-cart-hook';
import OrderPayCardHook from '../../hook/checkout/order-pay-card-hook';
import OrderPayCashHook from './../../hook/checkout/order-pay-cash-hook';
import { ToastContainer } from 'react-toastify';
import ViewAddressesHook from './../../hook/user/view-addresses-hook';
import notify from './../../hook/useNotification';

const ChoosePayMethod = () => {
    const [res] = ViewAddressesHook()
    const [handelChooseAddress, addressDetails, handelCreateOrderCash] = OrderPayCashHook()
    
    const [handelCreateOrderCARD] = OrderPayCardHook(addressDetails)
    const [, , totalCartPrice, , totalCartPriceAfterDiscount,] = GetAllUserCartHook()

    const [type, setType] = useState('')
    const changeMethod = (e) => {
        setType(e.target.value)
    }
    
    const handelPay = () => {
        if (type === "CARD") {
            handelCreateOrderCARD()
        } else if (type === "CASH") {
            handelCreateOrderCash();
        } else {
            notify("من فضلك اختر طريقة دفع", "warn")
        }
    }
    
    let productPriceElements = document.getElementsByClassName('product-price');
    if (totalCartPriceAfterDiscount >= 1) {
        for (let i = 0; i < productPriceElements.length; i++) {
            productPriceElements[i].style.width = '250px';
            productPriceElements[i].style.height = '55px';
        }
    } else {
        for (let i = 0; i < productPriceElements.length; i++) {
            productPriceElements[i].style.width = '150px';
            productPriceElements[i].style.height = '55px';
        }
    }
    
    return (
        <div>
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                        <input
                            onChange={changeMethod}
                            style={{ cursor: 'pointer' }}
                            name="group"
                            id="group1"
                            type="radio"
                            value="CARD"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2" for="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs="12" className="d-flex">
                        <input style={{ cursor: 'pointer' }}
                            onChange={changeMethod}
                            name="group"
                            id="group2"
                            type="radio"
                            value="CASH"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2" for="group2">
                            الدفع عند الاستلام
                        </label>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs="4" className="d-flex">
                        <select name="address" id="address" className="select mt-1 px-2" onChange={handelChooseAddress} >
                            <option value="0">اختر عنوان للشحن</option>
                            {
                                res.data ? (res.data.map((item, index) => {
                                    return <option key={item._id} value={item._id}>{item.alias}</option>
                                })) : <option key={0} value={0}>لا يوجد عنوانين مسجلة</option>
                            }
                        </select>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline border py-3">
                        {totalCartPriceAfterDiscount >= 1 ? (
                        <>
                            <span className='bg-warning text-dark w-50 mx-auto p-2 rounded-2'>{`${totalCartPrice} جنيه`}</span>
                            <span className='border border-1 p-2 mx-3'>بعد الخصم </span>
                            <span className='bg-success text-white w-50 mx-auto p-2 rounded-2'>{`${totalCartPriceAfterDiscount} جنيه`}</span>
                        </>
                    ) : (
                        <span className='bg-success text-white w-50 mx-auto p-2 rounded-2'>{`${totalCartPrice} جنيه`}</span>
                    )}
                    </div>
                    <div onClick={handelPay} className="product-cart-add px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default ChoosePayMethod


/*
    هستخدم المواقع دى front من ال payment لو هعمل شغل ال 
    1- https://dashboard.stripe.com/test/apikeys
    2- https://docs.stripe.com/stripe-js/react
    بس back من ال payment لكن فى الموقع دة هنعمل شغل ال 
*/