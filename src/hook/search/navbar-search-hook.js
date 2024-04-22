import { useEffect, useState } from 'react'

import ViewSearchProductsHook from './../products/view-search-products-hook';

const NavbarSearchHook = () => {
    const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();

    const [searchWord, setSearchWord] = useState('')

    //when user type search word
    const OnChangeSearch = (e) => {
        const path = window.location.pathname;
        if (e.target.value.endsWith('@gmail.com')){
            localStorage.setItem("searchWord", '')
            setSearchWord('')
        }else{
            localStorage.setItem("searchWord", e.target.value)
            setSearchWord(e.target.value)
            if (path != "/products") {
                window.location.href = "/products"
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [searchWord])
    return [OnChangeSearch, searchWord]
}

export default NavbarSearchHook