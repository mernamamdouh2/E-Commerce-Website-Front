import { changeOrderDeliver, changeOrderPay } from '../../redux/actions/ordersAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import notify from '../useNotification';

const ChangeOrderStatusHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [loadingDeliver, setLoadingDeliver] = useState(true);
    const [pay, setPay] = useState(0);
    const [deliver, setDeliver] = useState(0);
    const dispatch = useDispatch()

    const onChangePaid = (e) => {
        setPay(e.target.value)
    }

    const onChangeDeliver = (e) => {
        setDeliver(e.target.value)
    }
    
    const changePayOrder = async () => {
        if (pay === 'true') {
            console.log(pay)
            setLoading(true)
            await dispatch(changeOrderPay(id))
            setLoading(false)
        } else if (pay === 0) {
            notify("من فضلك اختر قيمة", "warn")
        }
    }

    const changeDeliverOrder = async () => {
        if (deliver === 'true') {
            setLoadingDeliver(true)
            await dispatch(changeOrderDeliver(id))
            setLoadingDeliver(false)
        } else if (deliver === 0) {
            notify("من فضلك اختر قيمة", "warn")
        }
    }

    //get order pay change
    const resOneOrder = useSelector(state => state.orderReducer.changePay)
    
    useEffect(() => {
        if (loading === false) {
            if (resOneOrder && resOneOrder.status === 200) {
                notify("تم تغير حالة الدفع بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("هناك مشكله فى عملية التغير", "error")
            }
        }
    }, [loading])

    //get order deliver change
    const resDeliverOrder = useSelector(state => state.orderReducer.changeDeliver)
    
    useEffect(() => {
        if (loadingDeliver === false) {
            if (resDeliverOrder && resDeliverOrder.status === 200) {
                notify("تم تغير حالة التوصيل بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("هناك مشكله فى عملية التغير", "error")
            }
        }
    }, [loadingDeliver])

    return [onChangePaid, changePayOrder, onChangeDeliver, changeDeliverOrder]
}

export default ChangeOrderStatusHook