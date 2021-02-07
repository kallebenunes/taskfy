import React from 'react'
import List from '../List'
import Container from './style'
const Board = () => {
    return (
        <Container>
            <List text="To-Do"/>
            <List text="On progress"/>
            <List/>
            <List text="Done"/>
        </Container>
    )
}
export default Board