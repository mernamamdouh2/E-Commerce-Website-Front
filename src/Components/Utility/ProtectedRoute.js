import { Navigate, Outlet } from 'react-router-dom'

import React from 'react'

const ProtectedRoute = ({ auth, children }) => {
    if (auth === false) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute