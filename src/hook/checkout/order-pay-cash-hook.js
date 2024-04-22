import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import GetAllUserCartHook from './../cart/get-all-user-cart-hook';
import { createOrderCash } from '../../redux/actions/checkoutAction';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';

const OrderPayCashHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetails, setAddressDetails] = useState([]);
    const [, , , , , cartID] = GetAllUserCartHook()
    
    //when change address by user
    const handelChooseAddress = (e) => {
        setAddressDetails([])
        if (e.target.value != '0')
            get(e.target.value);
    }

    const get = async (id) => {
        setLoading(true)
        await dispatch(getOneUserAddress(id))
        setLoading(false)
    }

    //get address details for user
    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
    
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetails(resAddress.data)
            } else
                setAddressDetails([])
        }
    }, [loading])

    //when user click
    const handelCreateOrderCash = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn")
            return
        }
        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoadingCreate(true)
        await dispatch(createOrderCash(cartID, {
            shippingAddress: {
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoadingCreate(false)
    }

    //get response for create order cash
    const resOrderCash = useSelector(state => state.checkoutReducer.createOrderCash)
    
    useEffect(() => {
        if (loadingCreate === false) {
            if (resOrderCash && resOrderCash.status === 201) {
                notify("تم انشاء طلبك بنجاح", "success")
                setTimeout(() => {
                    navigate('/user/allorders')
                }, 1500);
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn")
            }
        }
    }, [loadingCreate])

    return [handelChooseAddress, addressDetails, handelCreateOrderCash]
}

export default OrderPayCashHook