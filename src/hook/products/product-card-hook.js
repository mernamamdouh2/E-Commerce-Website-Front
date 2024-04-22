import { addProductToWishList, removeProductToWishList } from './../../redux/actions/wishListAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
import notify from './../../hook/useNotification';

const ProductCardHook = (item, favProd) => {
    const dispatch = useDispatch();
    
    const [favImg, setFavImg] = useState(favoff)

    const [loadingAdd, setLoadingAdd] = useState(true)
    const [loadingRemove, setLoadingRemove] = useState(true)
    
    let Fav = favProd.some(fItem => fItem === item._id);
    const [isFav, setIsFav] = useState(Fav)

    useEffect(() => {
        setIsFav(favProd.some(fItem => fItem === item._id))
    }, [favProd])

    const handleFav = () => {
        if (isFav) {
            removeToWishListData();
        } else {
            addToWishListData()
        }
    }

    useEffect(() => {
        if (isFav === true) {
            setFavImg(favon)
        }
        else {
            setFavImg(favoff)
        }
    }, [isFav])

    const resAdd = useSelector(state => state.addToWishListReducer.addWishList)
    const resRemove = useSelector(state => state.addToWishListReducer.removeWishList)

    const addToWishListData = async () => {
        setIsFav(true)
        setFavImg(favon)
        setLoadingAdd(true)
        await dispatch(addProductToWishList({
            productId: item._id,
        }))
        setLoadingAdd(false)
    }

    const removeToWishListData = async () => {
        setIsFav(false)
        setFavImg(favoff)
        setLoadingRemove(true)
        await dispatch(removeProductToWishList(item._id))
        setLoadingRemove(false)
    }

    useEffect(() => {
        if (loadingAdd === false) {
            if (resAdd && resAdd.status === 200) {
                notify("تمت اضافة المنتج للمفضلة بنجاح", "success")
            } else if (resAdd && resAdd.status === 401) {
                notify("انت غير مسجل", "error")
            }
        }
    }, [loadingAdd])

    useEffect(() => {
        if (loadingRemove === false) {
            if (resRemove && resRemove.status === "success") {
                notify("تمت حذف المنتج من المفضلة بنجاح", "warn")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else if (resRemove && resRemove.status === 401) {
                notify("انت غير مسجل", "error")
            }
        }
    }, [loadingRemove])

    return [removeToWishListData, addToWishListData, handleFav, favImg]
}

export default ProductCardHook