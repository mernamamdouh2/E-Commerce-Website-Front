import { Col, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'

import ApplyCouponHook from './../../hook/cart/applay-coupon-hook';
import DeleteCartHook from './../../hook/cart/delete-cart-hook';
import { ToastContainer } from 'react-toastify';

const CartCheckout = ({ totalCartPrice, cartItems, totalCartPriceAfterDiscount, couponNameRes }) => {
    const [handelDeleteCart] = DeleteCartHook()
    const [couponName, onChangeCoupon, handelSubmitCoupon, handelCheckout] = ApplyCouponHook(cartItems);

    useEffect(() => {
        if (couponNameRes) {
            onChangeCoupon(couponNameRes)
        }
    }, [couponNameRes])

    let cartCheckoutElements = document.getElementsByClassName('cart-checkout');
    let productPriceElements = document.getElementsByClassName('product-price');
    if (totalCartPriceAfterDiscount >= 1) {
        for (let i = 0; i < cartCheckoutElements.length; i++) {
            cartCheckoutElements[i].style.height = '270px';
        }
        for (let i = 0; i < productPriceElements.length; i++) {
            productPriceElements[i].style.height = '125px';
        }
    } else {
        for (let i = 0; i < cartCheckoutElements.length; i++) {
            cartCheckoutElements[i].style.height = '200px';
        }
        for (let i = 0; i < productPriceElements.length; i++) {
            productPriceElements[i].style.height = '46px';
        }
    }
    
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        value={couponName}
                        onChange={(e) => onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <button onClick={handelSubmitCoupon} className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3 border text-center">
                    {totalCartPriceAfterDiscount >= 1 ? (
                        <>
                            <p className='bg-warning text-dark w-50 mx-auto py-1 rounded-2'>{`${totalCartPrice} جنيه`}</p>
                            <p className='border border-1'>بعد الخصم</p>
                            <p className='bg-success text-white w-50 mx-auto py-1 rounded-2'>{`${totalCartPriceAfterDiscount} جنيه`}</p>
                        </>
                    ) : (
                        <p className='bg-success text-white w-50 mx-auto py-1 rounded-2'>{`${totalCartPrice} جنيه`}</p>
                    )}
                </div>

                <button className="product-cart-add d-inline" onClick={handelCheckout}> اتمام الشراء</button>
                <button onClick={handelDeleteCart} className="product-cart-add w-100 px-2 my-1"> مسح العربة</button>
            </Col>
            <ToastContainer />
        </Row>
    )
}

export default CartCheckout