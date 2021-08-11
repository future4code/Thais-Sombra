import React from 'react'
import CarouselContainer from '../../components/carousel/CarouselContainer'
import { Container } from './styled'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const history = useHistory()
    
    const goToLogin = () => {
        history.push("/login")
    }
    
    return (<Container>
        <h2>Homepage</h2>
        <button onClick={goToLogin}>Login</button>
        <CarouselContainer />
        <div>Card Viagens Famosas</div>
        <div>Saiba Mais</div>
    </Container>
    )
}

export default HomePage