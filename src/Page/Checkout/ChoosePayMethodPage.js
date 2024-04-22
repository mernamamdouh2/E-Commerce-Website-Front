import ChoosePayMethod from '../../Components/Checkout/ChoosePayMethod'
import { Container } from 'react-bootstrap'
import React from 'react'

const ChoosePayMethodPage = () => {
    return (
        <Container style={{minHeight:'670px'}}>
            <ChoosePayMethod />
        </Container>
    )
}

export default ChoosePayMethodPage
