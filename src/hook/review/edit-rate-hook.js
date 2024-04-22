import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import notify from '../useNotification';
import { updateReviewOnProduct } from './../../redux/actions/reviewAction';

const EditRateHook = (review) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)

    const [newRateText, setNewRateText] = useState(review.review);
    const [newRateValue, setNewRateValue] = useState(review.rating);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const onChangeRateText = (e) => {
        setNewRateText(e.target.value)
    }
    const OnChangeRateValue = (val) => {
        setNewRateValue(val)
    }

    const handleEdit = async () => {
        setLoading(true)
        await dispatch(updateReviewOnProduct(review._id, {
            review: newRateText,
            rating: newRateValue
        }))
        setLoading(false)
        handleCloseEdit();
    }
    const res = useSelector(state => state.reviewReducer.updateReview)

    useEffect(() => {
        if (loading === false) {
            if (res.status && res.status === 200) {
                notify("تم تعديل التقييم بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else
                notify("هناك مشكله فى عملية التعديل", "error")
        }
    }, [loading])

    return [showEdit, handleCloseEdit, handleShowEdit, handleEdit, onChangeRateText, 
        newRateText, OnChangeRateValue, newRateValue]

}

export default EditRateHook