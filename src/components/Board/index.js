import React from 'react'
import List from '../List'
import Container from './style'
import {loadLists} from '../../services/api'

const Board = () => {
    const lists = loadLists();
    
    return (
        <Container>
            {lists.map(item => {
                return <List key={item.title} data={item}/>
            })}
        </Container>
    )
}
export default Board