import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
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
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
