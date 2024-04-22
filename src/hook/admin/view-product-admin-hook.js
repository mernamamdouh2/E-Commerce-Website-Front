import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from '../../redux/actions/productsAction';
import { getAllProductsPage } from './../../redux/actions/productsAction';
import { useEffect } from 'react'

const ViewProductAdminHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(6))
    }, [])

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 6))
    }
    
    let items = []; 
    let pagination = [];
    const allProducts = useSelector((state) => state.allProducts.allProducts)
    try {
        if (allProducts.data)
            items = allProducts.data;
        else
            items = []

        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }
    
    return [items, pagination, onPress]
}

export default ViewProductAdminHook