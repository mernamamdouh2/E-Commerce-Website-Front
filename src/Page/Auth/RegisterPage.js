import { Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import React from 'react'
import RegisterHook from '../../hook/Auth/register-hook';
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {
  const [name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, OnSubmit] = RegisterHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            value={name}
            onChange={onChangeName}
            placeholder="اسم المستخدم..."
            type="text"
            required
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="الايميل..."
            type="email"
            required
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            placeholder="الهاتف..."
            type="phone"
            required
            className="user-input  text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="كلمه السر..."
            type="password"
            required
            className="user-input text-center mt-3 mx-auto"
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="تاكيد كلمه السر..."
            type="password"
            required
            className="user-input text-center mt-3 mx-auto"
          />
          
          <button onClick={OnSubmit} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
          
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default RegisterPage