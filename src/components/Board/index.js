import React,{useState} from 'react'
import List from '../List'
import Container from './style'
import {loadLists} from '../../services/api'
import BoardContext from './context'
import produce from 'immer'

const Board = () => {
    const data = loadLists();
    const [lists, setLists] = useState(data)

    function move(toList,fromList, from, to){
        console.log(fromList, toList);
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1)
            draft[toList].cards.splice(to, 0, dragged)

            
        }))
    }
    return (
        <BoardContext.Provider value={{lists, move}}>
            <Container>
                {lists.map((item, index) => {
                    return <List key={item.title} index={index} data={item} done={item.done}/>
                })}
            </Container>
        </BoardContext.Provider>
    )
}
export default Board