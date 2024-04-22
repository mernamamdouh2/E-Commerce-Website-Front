import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { createProduct } from '../../redux/actions/productsAction';
import { getAllBrand } from './../../redux/actions/brandAction';
import { getAllCategory } from '../../redux/actions/categoryAction'
import { getOneCategory } from '../../redux/actions/subcategoryAction';
import notify from './../../hook/useNotification';

const AdminAddProductsHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllBrand());
    }, [])
    
    //get last category state from redux
    const category = useSelector(state => state.allCategory.category)
    //get last brand state from redux
    const brand = useSelector(state => state.allBrand.brand)

    //get last sub cat state from redux
    const subCat = useSelector(state => state.subCategory.subcategory)

    const onSelect = (selectedList) => {
        setSelectedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSelectedSubID(selectedList)
    }

    const [options, setOptions] = useState([]);

    //values Images products
    const [Images, setImages] = useState({});
    //values state
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState('');
    // const [subCatID, setSubCatID] = useState([]);
    const [selectedSubID, setSelectedSubID] = useState([]);
    const [loading, setLoading] = useState(true);


    //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefore = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAfter(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    //when choose new color
    const handleChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }

    //when select category store id
    const onSelectCategory = async (e) => {
        if (e.target.value !== 0) {
            await dispatch(getOneCategory(e.target.value))
        }
        setCatID(e.target.value)
    }
    useEffect(() => {
        if (CatID !== 0) {
            if (subCat.data) {
                setOptions(subCat.data)
            }
        }
    }, [CatID])

    //when select brand store id
    const onSelectBrand = (e) => {
        SetBrandID(e.target.value)
    }

    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    //to save data 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (CatID === 0 || prodName === "" || prodDescription === "" || Images.length <= 0 || priceBefore <= 0) {
            notify("من فضلك اكمل البيانات", "warn")
            return;
        }
        // if (priceBefore > priceAfter) {
        //     notify("من فضلك ادخل السعر بطريقة صحيحة", "warn")
        //     return;
        // }

        //convert base 64 image to file 
        const imgCover = dataURLtoFile(Images[0], Math.random() + ".png")
        //convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(Images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(Images[index], Math.random() + ".png")
            }
        )

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("priceAfterDiscount", priceAfter);
        formData.append("imageCover", imgCover);
        formData.append("category", CatID);
        formData.append("brand", BrandID);
        
        itemImages.map((item) => formData.append("images", item))
        colors.map((color) => formData.append("availableColors", color))
        selectedSubID.map((item) => formData.append("subcategory", item._id))

        setLoading(true)
        await dispatch(createProduct(formData))
        setLoading(false)
    }

    //get create message
    const product = useSelector(state => state.allProducts.products)

    useEffect(() => {
        if (loading === false) {
           // setCatID(0)
            setColors([])
            setImages([])
            setProdName('')
            setProdDescription('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAfter('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            SetBrandID(0)
            setSelectedSubID([])
            setTimeout(() => setLoading(true), 1500)

            if (product) {
                if (product.status === 201) {
                    notify("تم الاضافة بنجاح", "success")
                } else {
                    notify("هناك مشكله", "error")
                }
            }
        }
    }, [loading])

    return [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefore,
        onChangeProdName, showColor, category, brand, priceAfter, Images, setImages, onSelect, onRemove,
        options, handleChangeComplete, removeColor, onSelectCategory, handleSubmit, onSelectBrand, 
        colors, priceBefore, qty, prodDescription, prodName]
}

export default AdminAddProductsHook