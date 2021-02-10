import React,{useState} from 'react'
import List from '../List'
import Container from './style'
import {loadLists} from '../../services/api'
import BoardContext from './context'
import produce from 'immer'
import Modal from '../Modal/index'

const Board = () => {
    const data = loadLists();
    const [lists, setLists] = useState(data)
    let [active, setActive] = useState(false);
    
    function move(toList,fromList, from, to){
        
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1)
            draft[toList].cards.splice(to, 0, dragged)

            
        }))
    }
    
    

    function addTask(card){
        setLists(produce(lists, draft => {
            draft[0].cards.push(card)
        }))
    }

    function openModal(){
        setActive(true)
    
    }
    function closeModal(){
        setActive(false)
    }

    let context = {lists, move, openModal, closeModal, addTask, active}

    return (
        <BoardContext.Provider value={context}>
            <Container>
                {lists.map((item, index) => {
                    return <List key={item.title} index={index} data={item} done={item.done}/>
                })}
                <Modal/>
            </Container>
   
        </BoardContext.Provider>
    )
}
export default Board