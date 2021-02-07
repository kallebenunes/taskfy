import React from 'react'
import {Container, Label} from './style'
const Card = () => {
    return (
        <Container>
            <header>
                <Label color='green'/>
            </header>
            <p>Descrição de uma atividade</p>
            <img src="https://avatars.dicebear.com/4.5/api/male/taskfy.svg" alt="" />

        </Container>
    )
}
export default Card