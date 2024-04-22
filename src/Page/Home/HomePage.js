import BrandFeatured from '../../Components/Brand/BrandFeatured';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import DiscountSection from './../../Components/Home/DiscountSection';
import HomeCategory from '../../Components/Home/HomeCategory';
import React from 'react'
import Slider from '../../Components/Home/Slider';
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';
const HomePage = () => {

    const [items] = ViewHomeProductsHook();
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Slider />
            <HomeCategory />
            <CardProductsContainer products={items} title="الاكثر مبيعا" btnTitle="المزيد" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer products={items} title="احدث الازياء" btnTitle="المزيد" pathText="/products" />
            <BrandFeatured title="اشهر الماركات" btnTitle="المزيد" />

        </div>
    )
}

export default HomePage
