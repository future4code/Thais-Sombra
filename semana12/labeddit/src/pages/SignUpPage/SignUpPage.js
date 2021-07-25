import React from 'react'
import Button from '@material-ui/core/Button'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import SignUpForm from './SignUpForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'

const SignUpPage = () => {

const history = useHistory()

    return (
        <div>
            <ScreenContainer>
                <h1>Sign Up</h1>
                <SignUpForm />
            </ScreenContainer>
        </div>
    )
}

export default SignUpPage