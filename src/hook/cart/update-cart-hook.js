import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import notify from '../useNotification';
import { updateCartItem } from './../../redux/actions/cartAction';

const UpdateCartHook = (item) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)
    const [itemCount, setItemCount] = useState(0)

    const onChangeCount = (e) => {
        setItemCount(e.target.value)
    }
    
    useEffect(() => {
        if (item)
            setItemCount(item.count)
    }, [])

    const handleUpdateCart = async () => {
        setLoading(true)
        await dispatch(updateCartItem(item._id, {
            count: itemCount
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.updateItem)
    
    useEffect(() => {
        if (loading === false) {
            if (res && res.data.status === "success") {
                notify("تم تعديل الكمية بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("هناك مشكلة فى عملية التعديل", "warn")
            }
        }
    }, [loading])
    
    return [itemCount, onChangeCount, handleUpdateCart]
}

export default UpdateCartHook