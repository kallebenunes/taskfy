import React,{useRef} from 'react'
import { useDrag, useDrop } from 'react-dnd';
import {Container, Label} from './style'

const Card = ({data, index}) => {
    
    const ref = useRef();

    const [{isDragging}, dragRef]  = useDrag({
        item: {type: 'CARD', index}, 
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const [, dropRef] = useDrop({
        accept: 'CARD', 
        hover(item, monitor){

            const draggedIndex = item.index
            const targetIndex = index 

            if (draggedIndex === targetIndex){
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
            
            
        }
    })

    dragRef(dropRef(ref))

    return (
        <Container isDragging={isDragging} ref={ref}>
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