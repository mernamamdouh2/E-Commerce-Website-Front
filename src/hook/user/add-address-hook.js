import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { addUserAddress } from '../../redux/actions/userAddressesAction';
import notify from './../useNotification';
import { useNavigate } from 'react-router-dom';

const AddAddressHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [alias, setAlias] = useState('')
    const [details, setDetails] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeAlias = (event) => {
        event.persist();
        setAlias(event.target.value)
    }

    const onChangeDetails = (event) => {
        event.persist();
        setDetails(event.target.value)
    }

    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value)

    }
    const onSubmit = async () => {
        if (alias === "" || details === "" || phone === "") {
            notify("من فضلك اكمل البيانات", "warn")
            return
        }
        setLoading(true)
        await dispatch(addUserAddress({
            alias,
            details,
            phone,
            city: '',
            postalCode: ""
        }))
        setLoading(false)
    }
    
    const res = useSelector(state => state.userAddressesReducer.addUserAddress)

    useEffect(() => {
        if (loading === false) {
            if (res && res.status === 200) {
                notify("تمت اضافة العنوان بنجاح", "success")
                setTimeout(() => {
                    navigate('/user/addresses')
                }, 1000);
            } else {
                notify("هناك مشكله فى عملية الاضافة", "error")
            }
        }
    }, [loading])

    return [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, onSubmit]
}

export default AddAddressHook