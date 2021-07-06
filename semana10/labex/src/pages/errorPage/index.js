import React from 'react'
import { Container } from './styled'
import ErrorImg from '../../assets/images/404_v2.gif'

const ErrorPage = () => {
    return (<Container>
                <img src={ErrorImg}></img>
            </Container>
    )
}

export default ErrorPage