import { useDispatch, useSelector } from 'react-redux'

import { getAllCategory } from '../../redux/actions/categoryAction'
import { useEffect } from 'react';

const HomeCategoryHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])
    //get last category state from redux
    const category = useSelector(state => state.allCategory.category)
    //get last loading state from redux
    const loading = useSelector(state => state.allCategory.loading)
   
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

    return [category, loading, colors]
};

export default HomeCategoryHook;
