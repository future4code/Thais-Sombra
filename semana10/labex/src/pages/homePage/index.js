import React from 'react'
import CarouselContainer from '../../components/carousel/CarouselContainer'
import { Container } from './styled'

const HomePage = () => {
    return (<Container>
        <h2>Homepage</h2>
        <CarouselContainer />
        <div>Card Viagens Famosas</div>
        <div>Saiba Mais</div>
    </Container>
    )
}

export default HomePage