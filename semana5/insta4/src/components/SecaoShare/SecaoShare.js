import React, {Component} from 'react'
import styled from 'styled-components'
import IconeFacebook from  '../../img/facebook.svg'


const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    flex-direction:column;
`

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const IconImage = styled.img`
	margin-right: 5px;
    width: 30px;
`

export class SecaoShare extends Component {
	state = {
		valorInputComentario:""
	}

	onChangeComentario = (event) =>  {
		this.setState({valorInputComentario: event.target.value	})
	}

	render() {
		console.log('Comentário', this.state.valorInputComentario)
		return (
            <ShareContainer>
                <IconImage alt={'Icone'} src={IconeFacebook} />
                <CommentContainer>
                    <InputComentario
                        placeholder={'Comentário'}
                        value={this.state.valorInputComentario}
                        onChange={this.onChangeComentario}
                        />
                    <button onClick={this.props.aoCompartilhar}>Enviar</button>
                </CommentContainer>
            </ShareContainer>
        )}
}