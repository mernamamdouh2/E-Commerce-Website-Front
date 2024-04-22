import { deleteCoupon } from '../../redux/actions/couponAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react'

const CouponCardHook = (coupon) => {
    const dispatch = useDispatch()
    
    const dateString = coupon.expire;
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await dispatch(deleteCoupon(coupon._id))
        setShow(false);
        window.location.reload(false);
    }

    return [formatDate, dateString, show, handleClose, handleShow, handleDelete]
}

export default CouponCardHook