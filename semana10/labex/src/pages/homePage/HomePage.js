import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CarouselContainer from '../../components/carousel/CarouselContainer'

const HomePage = () => {
    return (<>
        <Header />
        <h2>Homepage</h2>
        <CarouselContainer />
        <div>Card Viagens Famosas</div>
        <div>Saiba Mais</div>
        <Footer />
    </>
    )
}

export default HomePage