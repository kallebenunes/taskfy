import React from 'react'
import {Container, Label} from './style'
const Card = ({data}) => {
    
    console.log(data);

    return (
        <Container>
            <header>
                <Label color={data.labels[0]}/>
            </header>
            <p>{data.content}</p>
            {data.user && <img src={data.user} alt='User' />}

        </Container>
    )
}
export default Card