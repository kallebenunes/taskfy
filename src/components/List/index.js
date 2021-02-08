import React from 'react'
import Container from './style'
import {MdAdd} from 'react-icons/md'
import Card from '../Card'


const List = ({data}) => {
    

    return (
        <Container>
            <header>
                <h1>{data.title}</h1>
                {data.creatable  
                    ?<button>
                        <MdAdd size={24} color={"#fff"}/>
                    </button>
                    : null}
            </header>

            <ul>
                {data.cards.map(item => {
                    return (
                        <Card key={item.id} data={item}/>
                    )
                })}            
            </ul>
        </Container>
    )
}
export default List