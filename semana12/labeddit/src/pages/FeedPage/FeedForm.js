import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { addPost } from '../../services/post'
import { useHistory } from 'react-router-dom'

const FeedForm = () => {

    const [form, onChange, clear] = useForm({title:'', body:''})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        addPost(form, clear, history)
    }

    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField id="outlined-basic" label="Título do post" variant="outlined"
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        fullWidth
                        margin={'normal'}
                    />
                    <TextField id="outlined-basic" label="Escreva seu post" variant="outlined"
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        fullWidth
                        margin={'normal'}
                    />
                    <Button variant="contained" color="primary"
                        type={'submit'}
                        fullWidth
                        margin={'normal'}
                    >
                    Postar
                    </Button>
                </form>
            </InputsContainer>
        </div>
    )
}

export default FeedForm