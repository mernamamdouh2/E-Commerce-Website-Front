import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from '../../redux/actions/productsAction';
import { useEffect } from 'react'

const ViewHomeProductsHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const allProducts = useSelector((state) => state.allProducts.allProducts)

    let items = [];
    if (allProducts.data)
        items = allProducts.data.slice(0, 4);
    else
        items = []

    return [items]

}

export default ViewHomeProductsHook