import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react';

const AllCategoryHook = () => {
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        dispatch(getAllCategory(6));
    }, [])

    //to get state from redux
    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)

    //to get page count
    let pageCount = 0;
    try {
        if (category.paginationResult)
            pageCount = category.paginationResult.numberOfPages
    } catch (e) {}

    //when press pagination
    const getPage = (page) => {
        dispatch(getAllCategoryPage(page));
    }

    return [category,loading,pageCount,getPage]
};

export default AllCategoryHook;
