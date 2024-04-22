import { useDispatch, useSelector } from "react-redux";

import { getAllProductsByCategory } from './../../redux/actions/productsAction';
import { useEffect } from 'react'

const ViewAllProductsCategoryHook = (catID) => {
    let limit = 8;
    const dispatch = useDispatch();

    const getProduct = async () => {
        await dispatch(getAllProductsByCategory('', limit, catID))
    }
    useEffect(() => {
        getProduct()
    }, [])

    //when click pagination
    const onPress = async (page) => {
        await dispatch(getAllProductsByCategory(page, limit, catID))
    }

    const allProducts = useSelector((state) => state.allProducts.allProductCat)

    let items = []; let pagination = [];
    try {
        if (allProducts.data)
            items = allProducts.data;
        else
            items = []
    } catch (e) { }
    try {
        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }

    return [items, pagination, onPress]
}

export default ViewAllProductsCategoryHook