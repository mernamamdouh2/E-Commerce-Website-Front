import { Container, Row, Spinner } from 'react-bootstrap';

import CategoryCard from './../Category/CategoryCard';
import HomeCategoryHook from '../../hook/category/home-category-hook'
import React from 'react'
import SubTitle from '../Utility/SubTitle'

const HomeCategory = () => {
    const [category, loading, colors] = HomeCategoryHook();

    return (
        <Container>
            <SubTitle title="التصنيفات" btnTitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        category ? (
                            category.data.slice(0, 5).map((item, index) => {
                                return (<CategoryCard key={index} id={item._id} title={item.name} img={item.image} background={colors[index]} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default HomeCategory