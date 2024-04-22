import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from '../../Components/Products/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import React from 'react'
import ViewProductsDetailsHook from '../../hook/products/view-products-details-hook'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [item, images, cat, brand, prod] = ViewProductsDetailsHook(id);
    try {
        if (prod)
            var items = prod.slice(0, 4)
    } catch (error) {}
    try {
        if (item){
            var rateAvg = item.ratingsAverage;
            var rateQty = item.ratingsQuantity;
        }
    } catch (error) {}
    
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetails />
                <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
                <CardProductsContainer products={items} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetailsPage