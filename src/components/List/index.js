import React, { useContext } from 'react'
import Container from './style'
import {MdAdd} from 'react-icons/md'
import Card from '../Card'
import BoardContext from '../Board/context'
// import callModal from './callModal'


const List = ({data, index: listIndex}) => {
    
    let {openModal} = useContext(BoardContext)


    function callModal(e){
        openModal()
    }
    
    return (
        <Container done={data.done}>
            <header>
                <h1>{data.title}</h1>
                {data.creatable  
                    ?<button onClick={callModal}>
                        <MdAdd size={24} color={"#fff"}/>
                    </button>
                    : null}
            </header>

            <ul>
                {data.cards.map((item, index) => {
                    return (
                        <Card key={item.id} data={item} listIndex={listIndex} index={index}/>
                    )
                })}            
            </ul>
            
        </Container>
    )
}
export default List