import 'react-toastify/dist/ReactToastify.css';

import { clearAllCartItem, deleteCartItem } from './../../redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import notify from '../../hook/useNotification'

const DeleteCartHook = (item) => {
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true)

    const handleDeleteCart = async () => {
        setLoading(true)
        await dispatch(clearAllCartItem())
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.clearCart)
    
    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                notify("تم الحذف بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("هناك مشكلة فى عملية الحذف", "warn")
            }
        }
    }, [loading])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteItem = async () => {
        await dispatch(deleteCartItem(item._id))
        setShow(false);
        window.location.reload(false);
    }

    return [handleDeleteCart, show, handleClose, handleShow, handleDeleteItem]
}

export default DeleteCartHook