import React,{useContext, useState} from 'react'
import List from '../List'
import Container from './style'
import {loadLists} from '../../services/api'
import BoardContext from './context'
import GlobalContext from '../../GlobalContext'
import produce from 'immer'
import Modal from '../Modal/index'

const Board = () => {
    const data = loadLists();
    const [lists, setLists] = useState(data)
    let [active, setActive] = useState(false);
    let [editMode, setEditMode] = useState(false)
    
    let {setTaskDescribe, setTaskTitle, setLabelColor} = useContext(GlobalContext)

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
            draft[0].totalCards++
        }))
    }

    function openModal(){
        setActive(true)
    
    }
    function closeModal(){
        setActive(false)
        setEditMode(false)
        setTaskDescribe('')
        setTaskTitle('')
        setLabelColor('')
    }

    let context = {lists,setLists , move, openModal, closeModal, addTask, active,setEditMode, editMode}

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