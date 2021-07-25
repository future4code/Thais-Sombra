import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InpustsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'

const LoginForm = ({setRightButtonText}) => {

    const [form, onChange, clear] = useForm({email:'',password:''})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

    return (
        <div>
            <InpustsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField id="outlined-basic" label="E-mail" variant="outlined"
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'email'}
                    />
                    <TextField id="outlined-basic" label="Senha" variant="outlined"
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'password'}
                    />
                    <Button variant="contained" color="primary"
                        type={'submit'}
                        fullWidth
                        margin={'normal'}
                    >
                    Entrar
                    </Button>
                </form>
            </InpustsContainer>
        </div>
    )
}

export default LoginForm