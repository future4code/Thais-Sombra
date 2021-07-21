import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from './styled';

const LoginPage = () => {
    return (
        <div>
            <Container>
                <h1>LoginPage</h1>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField id="outlined-basic" label="Senha" variant="outlined" />
                <Button variant="contained" color="primary">
                Entrar
                </Button>
                <Button variant="contained" color="primary">
                Cadastrar
                </Button>
            </Container>
        </div>
    )
}

export default LoginPage