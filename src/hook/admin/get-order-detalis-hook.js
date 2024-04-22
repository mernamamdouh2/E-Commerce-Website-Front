import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import { getOneOrders } from '../../redux/actions/ordersAction';

const GetOrderDetailsHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch()

    const get = async () => {
        setLoading(true)
        await dispatch(getOneOrders(id))
        setLoading(false)
    }

    useEffect(() => {
        get()
    }, [])

    //get address details for user
    const resOneOrder = useSelector(state => state.orderReducer.getOneOrder)
    
    useEffect(() => {
        if (loading === false) {
            if (resOneOrder.data)
                setOrderData(resOneOrder.data)
            if (resOneOrder.data.cartItems)
                setCartItems(resOneOrder.data.cartItems)
        }
    }, [loading])

    return [orderData, cartItems]
}

export default GetOrderDetailsHook