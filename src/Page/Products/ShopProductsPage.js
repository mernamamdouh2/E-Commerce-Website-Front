import { Col, Container, Row } from 'react-bootstrap'

import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import Pagination from '../../Components/Utility/Pagination'
import React from 'react'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter'
import ViewSearchProductsHook from './../../hook/products/view-search-products-hook';

const ShopProductsPage = () => {

    const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();
    if (pagination)
        var pageCount = pagination;
    else
        pageCount = 0;

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult onClick={getProduct} title={`هناك ${results} نتيجة بحث`} />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                        <CardProductsContainer products={items} title="" btnTitle="" />
                    </Col>
                </Row>
                <Pagination pageCount={pageCount} onPress={onPress} />
            </Container>
        </div>
    )
}

export default ShopProductsPage