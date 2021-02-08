import React from 'react'
import { useDrag } from 'react-dnd';
import {Container, Label} from './style'
const Card = ({data}) => {
    
    console.log(data);

    const [{isDragging}, dragRef]  = useDrag({
        item: {type: 'CARD'}, 
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <Container isDragging={isDragging} ref={dragRef}>
            <header>
                <Label color={data.labels[0]}/>
            </header>
            <p>{data.content}</p>
            {data.user && <img src={data.user} alt='User' />}
            <p>{ isDragging ? 'esá movendo' : 'Não está movendo' }</p>
            </Container>
    )
}
export default Card