import React,{useContext, useState} from 'react'
import {Container, Button} from './style'
import BoardContext from '../Board/context'
import GlobalContext from '../../GlobalContext';
import produce from 'immer'

const Modal = () => {

    const {taskTitle, setTaskTitle, taskDescribe, setTaskDescribe, labelColor, setLabelColor, currentList, currentCard} = useContext(GlobalContext)
    const {setLists, lists, addTask,closeModal, active: modalActive, editMode} = useContext(BoardContext);

    let [error, setError] = useState(false)

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
        let user = `https://avatars.dicebear.com/4.5/api/male/taskfy${Math.round(Math.random() * 100)}.svg`;
        let id = lists[0].totalCards + 1
        let card = {
            id, 
            content: taskDescribe,
            title: taskTitle, 
            labels: [labelColor],
            user, 
            
        }
        
        if(!!taskDescribe.trim() && !!taskTitle.trim()){
            addTask(card)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
        }

        setTaskTitle('')
        setTaskDescribe('')
        setLabelColor('')
        document.querySelectorAll('[data-color]').forEach((item) => {
            item.classList.remove('selected')
        })
    }

    function editTask(){
        let newCurrentCard = lists[currentList].cards[currentCard].content

        // console.log(newCurrentCard)
        setLists(produce(lists, draft => {
            draft[currentList].cards[currentCard].content = taskDescribe
            draft[currentList].cards[currentCard].title = taskTitle
        }))
    }

    const labelColors = ['#7159C1', '#54E1F7','#ED54F7','#F75481','#9dff00' ]
    return (
     
            <Container editMode={editMode} active={modalActive}>
            <div className='modal-content'>
                    <button className='closeModal' onClick={closeModal}>X</button>

                    {error && <div className='error'>Há algum campo sem preenchimento</div>}

                    <input type="text" placeholder='Título da tarefa' value={taskTitle} onChange={setValueTaskTitle}  />    
               
                    <textarea value={taskDescribe} onChange={setValueTaskDescribe} placeholder='Descrição da tarefa'></textarea>

                    {!editMode &&
                    <div className='select-area'>
                    {labelColors.map(item => {
                        return (
                      
                            <Button data-color={item} bg={item} selected={false} onClick={selectColor}></Button>
                        
                        )
                    })}
                </div>}
                    
                {editMode
                    ? <button className='addTask' onClick={editTask}>Salvar</button>
                    : <button className='addTask' onClick={addNewTask}>Adicionar</button>}
                    
            </div>
        </Container>
       
    )
}
export default Modal