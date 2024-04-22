import { Container, Row } from 'react-bootstrap'

import CardContainerHook from './../../hook/products/card-container-hook';
import ProductCard from './ProductCard'
import React from 'react'
import SubTitle from '../Utility/SubTitle'

const CardProductsContainer = ({ title, btnTitle, pathText, products }) => {

    const [favProd] = CardContainerHook()
    
    return (
        <Container>
            {products ? (<SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />) : null}
            <Row className='my-2 d-flex justify-content-right'>
                {
                    products ? (
                        products.map((item, index) => <ProductCard favProd={favProd} key={index} item={item} />)
                    ) : null
                }
            </Row>
        </Container>
    )
}

export default CardProductsContainer