import { Link } from 'react-router-dom'
import React from 'react'

const UserSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/user/profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        الملف الشخصي
                    </div>
                </Link>
                <Link to="/user/addresses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        العنوانين الشخصية
                    </div>
                </Link>
                <Link to="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        المنتجات المفضلة
                    </div>
                </Link>
                <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text border-bottom p-2 mx-auto text-center">
                        اداره الطلبات
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default UserSideBar
