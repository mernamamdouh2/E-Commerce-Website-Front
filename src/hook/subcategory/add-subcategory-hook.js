import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import { createSubCategory } from '../../redux/actions/subcategoryAction'
import { getAllCategory } from '../../redux/actions/categoryAction'
import notify from '../../hook/useNotification'

const AddSubcategoryHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        dispatch(getAllCategory());
    }, [])
    
    const [id, setID] = useState('0')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    
    //get last category state from redux
    const category = useSelector(state => state.allCategory.category)

    //get last sub category state from redux
    const subcategory = useSelector(state => state.subCategory.subcategory)

    //on change dropdown menu
    const handleChange = (e) => {
        setID(e.target.value)
    }

    //to save name
    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }
    //on save data 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        if (id === "0") {
            notify("من فضلك اختر تصنيف رئيسي", "warn")
            return;
        }
        if (name === "") {
            notify("من فضلك ادخل اسم التصنيف", "warn")
            return;
        }
        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category: id
        }))
        setLoading(false)
    }
    
    useEffect(() => {
        if (loading === false) {
            setName("")
            setID("0")
            if (subcategory && subcategory.status === 201) {
                notify("تمت الاضافة بنجاح", "success")
            }
            else if (subcategory === "Error Error: Request failed with status code 400") {
                notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn")
            }
            else {
                notify("هناك مشكله فى عملية الاضافة", "warn")
            }
            setLoading(true)
        }
    }, [loading])


    return [id, name, loading, category, subcategory, handleChange, handleSubmit, onChangeName]
};

export default AddSubcategoryHook;