import React, {useState} from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './components/Board'
import Header from './components/header'
import GlobalStyle from './styles/global'
import GlobalContext from './GlobalContext'

function App() {

  let [labelColor, setLabelColor] = useState('');
  let [taskTitle, setTaskTitle] = useState('');
  let [taskDescribe, setTaskDescribe ] = useState('');
  let [currentCard, setCurrentCard] = useState('')
  let [currentList, setCurrentList] = useState('')
  let teste = 'Global context was imported'
  let context = { labelColor,setLabelColor, taskTitle, setTaskTitle,taskDescribe, setTaskDescribe,teste, currentCard, currentList,
                  setCurrentCard, setCurrentList
  }
  
  return (
    <DndProvider backend={HTML5Backend}>
        <GlobalContext.Provider value={context}>
        <GlobalStyle/>
          <Header/>
          <Board/>
        </GlobalContext.Provider>
    </DndProvider>
  );
}

export default App;
