import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { postChoose } from '../api/Requests'
import { IoHeartCircle } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'

const ProfilePhoto = styled.img`
    width: 100px;
    height: 200px;
`

export const Card = (props) => {

    const matchProfile = async (chooseProfile) => {
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

    return <div>
        <h2>Astromatch</h2>
        <ProfilePhoto src={props.profile.photo} ></ProfilePhoto>
        <p><b>{props.profile.name}</b>, {props.profile.age}</p>
        <p>{props.profile.bio}</p>
        <MdCancel
            onClick={props.loadProfile}
        ></MdCancel>
        <IoHeartCircle
            onClick={()=>matchProfile(props.profile.id)}
        ></IoHeartCircle>
    </div>
}