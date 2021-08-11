import React from 'react'
import Button from '@material-ui/core/Button'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {

    useUnprotectedPage()
    const history = useHistory()

    return (
        <div>
            <ScreenContainer>
                <h1>LoginPage</h1>
                <LoginForm 
                    setRightButtonText={setRightButtonText}
                />
                <SignUpButtonContainer>
                    <Button variant="text" color="primary"
                        onClick={()=> goToSignUp(history)}
                        type={'submit'}
                        fullWidth
                        margin={'normal'}
                    >
                    Não possui conta? Cadastre-se
                    </Button>
                </SignUpButtonContainer>
            </ScreenContainer>
        </div>
    )
}

export default LoginPage