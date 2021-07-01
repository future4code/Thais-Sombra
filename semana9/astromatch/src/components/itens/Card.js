import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { Container, ProfilePhoto, Span} from './styled';
import { postChoose } from '../api/Requests'
import { IoClose } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'



export const Card = (props) => {

    const likeProfile = async (chooseProfile) => {
        try {
          const newChoose = await postChoose(
            {
                "id": chooseProfile,
                "choice": true
            })
            props.loadProfile()
        } catch (err){
          console.log(err)
          alert('Erro ao dar match, tente novamente mais tarde')
        }
      }

      const dislikeProfile = async (chooseProfile) => {
        try {
          const newChoose = await postChoose(
            {
                "id": chooseProfile,
                "choice": false
            })
            props.loadProfile()
        } catch (err){
          console.log(err)
          alert('Erro ao dar match, tente novamente mais tarde')
        }
      }

    return <Container>

        <ProfilePhoto src={props.profile.photo} ></ProfilePhoto>
        <p><b>{props.profile.name}</b>, {props.profile.age}</p>
        <p>{props.profile.bio}</p>
        <Span>
            <IoClose id="dislike"
                onClick={()=>dislikeProfile(props.profile.id)}
            />
            <FaHeart id="like"
                onClick={()=>likeProfile(props.profile.id)}
            />
        </Span>
    </Container>
}