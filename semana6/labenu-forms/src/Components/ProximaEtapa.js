import React from 'react';
import styled from 'styled-components';

const ButtonNext = styled.button`
  margin-top: 25px;
  cursor: pointer;
`

export default function ProximaEtapa (props) {
    return (
        <ButtonNext onClick={props.next}>{props.text}</ButtonNext>
    )
}
