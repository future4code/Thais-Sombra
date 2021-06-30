import React from 'react'
import styled from 'styled-components'
import { IoHeartCircle } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'

const ProfilePhoto = styled.img`
    width: 100px;
    height: 200px;
`

export function Card (props){
  

    return <div>
        <h2>Astromatch</h2>
        <ProfilePhoto src={props.profile.photo} ></ProfilePhoto>
        <p>{props.profile.id}</p>
        <p><b>{props.profile.name}</b>, {props.profile.age}</p>
        <p>{props.profile.bio}</p>
        <MdCancel></MdCancel>
        <IoHeartCircle></IoHeartCircle>
    </div>
}