import { editUserAddress, getOneUserAddress } from './../../redux/actions/userAddressesAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';

const EditAddressHook = (id) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [alias, setAlias] = useState('')
    const [details, setDetails] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true);
    const [loadingEdit, setLoadingEdit] = useState(true);

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

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getOneUserAddress(id))
            setLoading(false)
        }
        get();
    }, [])

    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
    
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAlias(resAddress.data.alias)
                setDetails(resAddress.data.details)
                setPhone(resAddress.data.phone)
            }
        }
    }, [loading])

    const handleEdit = async () => {
        if (alias === "" || details === "" || phone === "") {
            notify("من فضلك اكمل البيانات", "warn")
            return
        }
        setLoadingEdit(true)
        await dispatch(editUserAddress(id, {
            alias,
            details,
            phone,
        }))
        setLoadingEdit(false)
    }
    
    const resEdit = useSelector(state => state.userAddressesReducer.editAddress)

    useEffect(() => {
        if (loadingEdit === false) {
            if (resEdit && resEdit.status === 200) {
                notify("تمت عملية التعديل بنجاح", "success")
                setTimeout(() => {
                    navigate('/user/addresses')
                }, 1000);
            } else {
                notify("فشل فى عملية التعديل", "error")
            }
        }
    }, [loadingEdit])

    return [handleEdit, alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone]
}

export default EditAddressHook