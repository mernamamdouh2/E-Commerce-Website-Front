import { Container, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

// import { useDispatch, useSelector } from 'react-redux';
import GetAllUserCartHook from './../../hook/cart/get-all-user-cart-hook';
import NavbarSearchHook from './../../hook/search/navbar-search-hook';
import cart from '../../images/cart.png'
// import { getLoggedUser } from '../../redux/actions/authAction';
import login from '../../images/login.png'
import logo from '../../images/logo.png'

const NavBarLogin = () => {
    // const dispatch = useDispatch()
    
    const [OnChangeSearch, searchWord] = NavbarSearchHook()
    
    let word = "";
    if (localStorage.getItem("searchWord") != null)
        word = localStorage.getItem("searchWord")
    

    const [user, setUser] = useState('');

    useEffect(() => {
        if (localStorage.getItem("user") != null)
            setUser(JSON.parse(localStorage.getItem("user")))

            // dispatch(getLoggedUser())    
    }, [])

    // const res = useSelector(state => state.authReducer.currentUser)
    // if (res){
    //     console.log(res);
    // }

    const logOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("user-email")
        setUser('')
    }

    const [itemsNum] = GetAllUserCartHook()
    
    const doNot = () => {
        localStorage.removeItem("searchWord")
        word = ""
    }
    
    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' alt='logo'/>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={word}
                        onChange={OnChangeSearch}
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                        autoComplete='off'
                        autoSave='off'
                    />
                    <Nav className="me-auto">
                        {
                            user != '' ? (
                                <NavDropdown title={user.name} id="basic-nav-dropdown">
                                    {
                                        user.role === "admin" ? (<NavDropdown.Item href="/admin/allproducts" onClick={doNot}>لوحة التحكم</NavDropdown.Item>) :
                                        (<NavDropdown.Item href="/user/profile" onClick={doNot}>الصفحه الشخصية</NavDropdown.Item>)
                                    }
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut} href="/">تسجيل خروج</NavDropdown.Item>

                                </NavDropdown>
                            ) :
                                (<Nav.Link href='/login'
                                    className="nav-text d-flex mt-3 justify-content-center">
                                    <img src={login} className="login-img" alt="sfvs" />
                                    <p style={{ color: "white" }}>دخول</p>
                                </Nav.Link>)
                        }

                        <Nav.Link href='/cart'
                            className="nav-text position-relative d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            {/* <img src={cart} className="login-img" alt="cart" />
                            <p style={{ color: "white" }}>العربه</p>
                            <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                                {itemsNum || 0}
                            </span> */}
                            <div className="position-relative d-flex align-items-center">
                                <img src={cart} className="login-img mb-3" alt="cart" />
                                {itemsNum > 0 && (
                                    <span className="badge rounded-pill bg-danger mb-3 ms-1">{itemsNum}</span>
                                )}
                                <p style={{ color: "white", marginLeft: "10px" }}>العربة</p>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin
