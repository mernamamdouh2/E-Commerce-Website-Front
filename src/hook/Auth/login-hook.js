import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import { loginUser } from '../../redux/actions/authAction';
import notify from './../useNotification';

const LoginHook = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const res = useSelector(state => state.authReducer.loginUser)
    
    //save data
    const OnSubmit = async (e) => {
        setIsPress(true)
        setLoading(true)
        await dispatch(loginUser({
            email,
            password
        }))
        setLoading(false)
        setIsPress(false)
    }

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res.data.data);
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    notify("تم تسجيل الدخول بنجاح", "success")
                    setTimeout(() => {
                        window.location.href ="/"
                    }, 1500);
                }else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }
                
                if (res.data.message === "Incorrect email or password") {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    notify("كلمة السر او الايميل خطا", "error")
                }
                setLoading(true)
            }
        }
    }, [loading])

    return [email, password, loading, onChangeEmail, onChangePassword, OnSubmit,isPress]
    



    
}

export default LoginHook
