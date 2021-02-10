import React,{useContext, useState} from 'react'
import {Container, Button} from './style'
import BoardContext from '../Board/context'
const Modal = () => {

    let [labelColor, setLabelColor] = useState('');
    let [taskTitle, setTaskTitle] = useState('');
    let [taskDesccribe, setTaskDescribe] = useState('');
    let [error, setError] = useState(false);

    const {lists, addTask,closeModal, active: modalActive} = useContext(BoardContext);

    const selectColor = (e) => {
        e.preventDefault(); 
        setLabelColor(e.currentTarget.getAttribute('data-color'));
        document.querySelectorAll('[data-color]').forEach((item) => {
            item.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected')
    }

    function setValueTaskTitle(e){
        setTaskTitle(e.currentTarget.value)
    }

    function setValueTaskDescribe(e){
        setTaskDescribe(e.currentTarget.value)
    }

    function addNewTask(e){
        e.preventDefault();
        console.log(lists[0].cards);
        let last = lists[0].cards.length + 1
        let user = `https://avatars.dicebear.com/4.5/api/male/taskfy${Math.round(Math.random() * 100)}.svg`;
        let card = {
            id: last, 
            content: taskDesccribe,
            title: taskTitle, 
            labels: [labelColor],
            user
        }
        
        if(!!taskDesccribe.trim() && !!taskTitle.trim()){
            addTask(card)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
        }

    }

    

    const labelColors = ['#7159C1', '#54E1F7','#ED54F7','#F75481','#9dff00' ]
    return (
     
            <Container active={modalActive}>
            <div className='modal-content'>
                    <button className='closeModal' onClick={closeModal}>X</button>

                    {error && <div className='error'>Há algum campo sem preenchimento</div>}

                    <input type="text" placeholder='Título da tarefa' value={taskTitle} onChange={setValueTaskTitle}  />    
               
                    <textarea value={taskDesccribe} onChange={setValueTaskDescribe} placeholder='Descrição da tarefa'></textarea>

                    <div className='select-area'>
                        {labelColors.map(item => {
                            return (
                          
                                <Button data-color={item} bg={item} selected={false} onClick={selectColor}></Button>
                            
                            )
                        })}
                    </div>
                    
                    <button className='addTask' onClick={addNewTask}>Adicionar</button>
                    
            </div>
        </Container>
       
    )
}
export default Modal