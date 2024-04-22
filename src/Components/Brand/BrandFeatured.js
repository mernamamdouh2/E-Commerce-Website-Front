import { Container, Row, Spinner } from 'react-bootstrap'

import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'
import React from 'react'
import SubTitle from '../Utility/SubTitle'

const BrandFeatured = ({ title, btnTitle }) => {
    const [brand, loading] = HomeBrandHook();

    return (
        <Container>
            <SubTitle title={title} btnTitle={btnTitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-right'>
                {
                    loading === false ? (
                        brand.data ? (
                            brand.data.slice(0, 5).map((item, index) => {
                                return (<BrandCard id={item._id} key={index} img={item.image} />)
                            })
                        ) : <h4>لا يوجد ماركات</h4>
                    ) : <Spinner animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default BrandFeatured
