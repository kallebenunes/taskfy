import React,{useContext, useRef} from 'react'
import { useDrag, useDrop } from 'react-dnd';
import {Container, Label} from './style'
import BoardContext from '../Board/context'



const Card = ({data, index, listIndex}) => {
    
    const ref = useRef();

    const {move,openModal} = useContext(BoardContext)

    const [{isDragging}, dragRef]  = useDrag({
        item: {type: 'CARD', index, listIndex}, 
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const [, dropRef] = useDrop({
        accept: 'CARD', 
        hover(item, monitor){
            
            const draggedIndex = item.index
            const targetIndex = index 
            
            const draggedListIndex = item.listIndex
            const targetListIndex = listIndex

            if (draggedIndex === targetIndex && targetListIndex === draggedListIndex){
                return null
            }

            const targetSize = ref.current.getBoundingClientRect(); 
            const targetCenter = (targetSize.bottom - targetSize.top)/2

            const draggedOffset = monitor.getClientOffset(); 
            const draggedTop = draggedOffset.y - targetSize.top; 

            if(draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }
            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
              }
            

            move(targetListIndex, draggedListIndex,draggedIndex, targetIndex)
    

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    })

    dragRef(dropRef(ref))

    return (
        <Container isDragging={isDragging} id={`card${index}`} ref={ref} onDoubleClick={openModal}>
            <header>
                <Label color={data.labels[0]}/>
            </header>
            {data.title && <h1>{data.title}</h1>}
            <p>{data.content}</p>
            {data.user && <img src={data.user} alt='User' />}
            </Container>
    )
}
export default Card