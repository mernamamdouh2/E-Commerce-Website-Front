import { Col, Container, Row } from 'react-bootstrap'

import ForgetPasswordHook from '../../hook/Auth/forget-password-hook';
import React from 'react'
import { ToastContainer } from 'react-toastify';

const ForgetPasswordPage = () => {
    const [OnChangeEmail, email, onSubmit] = ForgetPasswordHook()
    
    return (
        <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center">
                <Col sm="12" className="d-flex flex-column">
                    <label className="mx-auto title-login">نسيت كلمة السر</label>
                    <input
                        value={email}
                        onChange={OnChangeEmail}
                        placeholder="ادخل الايميل..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <button onClick={onSubmit} className="btn-login mx-auto mt-2">ارسال الكود</button>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
}

export default ForgetPasswordPage