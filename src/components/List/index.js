import React from 'react'
import Container from './style'
import {MdAdd} from 'react-icons/md'
import Card from '../Card'
const List = (props) => {
    return (
        <Container>
            <header>
                <h1>{props.text || "Tasks"}</h1>
                <button>
                    <MdAdd size={24} color={"#fff"}/>
                </button>
            </header>

            <ul>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </ul>
        </Container>
    )
}
export default List