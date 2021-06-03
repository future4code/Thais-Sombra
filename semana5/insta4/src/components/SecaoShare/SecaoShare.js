import React, {Component} from 'react'
import styled from 'styled-components'

import iconeFacebookPreto from  '../../img/facebook-black.svg'
import iconeFacebookColor from  '../../img/Facebook-color.svg'
import iconeInstagramPreto from  '../../img/instagram-black.svg'
import iconeInstagramColor from  '../../img/instagram-color.svg'
import iconeTwitterPreto from  '../../img/twitter-black.svg'
import iconeTwitterColor from  '../../img/twitter-color.svg'


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

const SocialMediaIcons = styled.div`
    display: flex;
    flex-direction:row;   
    justify-content: space-evenly;
`

export class SecaoShare extends Component {
	state = {
		valorInputComentario:"",
        shareInstagram: false,
        shareFacebook: false,
        shareTwitter: false,
	}

	onChangeComentario = (event) =>  {
		this.setState({valorInputComentario: event.target.value	})
	}

    onClickFacebook = () => {
        this.setState({
          shareFacebook: !this.state.shareFacebook,
          shareInstagram: false,
          shareTwitter: false
        })
      }
    
      onClickTwitter = () => {
        this.setState({
            shareFacebook: false,
            shareInstagram: false,
            shareTwitter:  !this.state.shareTwitter
        })
      }

      onClickInstagram = () => {
        this.setState({
            shareFacebook: false,
            shareInstagram: !this.state.shareInstagram,
            shareTwitter: false
        })
      }

      aoCompartilharPost = () => {
        this.setState({
          share: false,
        })
        if (this.state.shareFacebook){
          console.log(`Post compartilhado no Facebook com a mensagem: ${this.state.valorInputComentario}`)
        }  else if (this.state.shareTwitter){
          console.log(`Post compartilhado no Twitter com a mensagem: ${this.state.valorInputComentario}`)
        } else {
          console.log(`Post compartilhado no Instagram com a mensagem: ${this.state.valorInputComentario}`)
        }
      }
   
	render() {
        
            let iconeFacebook
        
            if(this.state.shareFacebook) {
              iconeFacebook = iconeFacebookPreto
            } else {
              iconeFacebook = iconeFacebookColor
            }

            let iconeTwitter
        
            if(this.state.shareTwitter) {
              iconeTwitter = iconeTwitterPreto
            } else {
              iconeTwitter = iconeTwitterColor
            }

            let iconeInstagram
        
            if(this.state.shareInstagram) {
              iconeInstagram = iconeInstagramPreto
            } else {
              iconeInstagram = iconeInstagramColor
            }

            console.log('Comentário', this.state.valorInputComentario)

            return (
                
              <ShareContainer>

                <SocialMediaIcons>
                    <IconImage 
                        alt={'Icone'} 
                        src={iconeFacebook} 
                        onClick={this.onClickFacebook}
                        />
                    <IconImage 
                        alt={'Icone'} 
                        src={iconeTwitter} 
                        onClick={this.onClickTwitter}
                        />
                    <IconImage 
                        alt={'Icone'} 
                        src={iconeInstagram} 
                        onClick={this.onClickInstagram}
                        />
                </SocialMediaIcons>
                <CommentContainer>
                    <InputComentario
                        placeholder={'Mensagem'}
                        value={this.state.valorInputComentario}
                        onChange={this.onChangeComentario}
                        />
                    <button onClick={this.aoCompartilharPost}>Enviar</button>
                </CommentContainer>
              </ShareContainer>
        )
    }
}