import React from 'react'
import { ErrorImage, ErrorPageContainer } from './styled'
import Typography from '@material-ui/core/Typography'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>
                Erro 404 - Página não encontrada
            </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage