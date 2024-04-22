import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import GetAllUserCartHook from './../cart/get-all-user-cart-hook';
import { createOrderCARD } from '../../redux/actions/checkoutAction';
import notify from '../useNotification';

const OrderPayCardHook = (addressDetails) => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true);
    const [, , , , , cartID] = GetAllUserCartHook()

    //when user click
    const handelCreateOrderCARD = async () => {
        if (cartID === '0') {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn")
            return
        }
        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }
        setLoading(true)
        await dispatch(createOrderCARD(cartID, {
            shippingAddress: {
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoading(false)
    }

    //get response for create order card
    const resOrderCard = useSelector(state => state.checkoutReducer.createOrderCard)
    
    useEffect(() => {
        if (loading === false) {
            if (resOrderCard && resOrderCard.status === "success") {
                //notify("تم انشاء طلبك بنجاح", "success")
                console.log(resOrderCard.session.url)
                if (resOrderCard.session.url) {
                    window.open(resOrderCard.session.url)
                }
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn")
            }
        }
    }, [loading])

    return [handelCreateOrderCARD]
}

export default OrderPayCardHook