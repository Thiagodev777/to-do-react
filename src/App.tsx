import React from 'react';
import * as C from './App.styles';
import { Task } from './types/item';

import ListItem from './Components/ListItem';
import AddArea from './Components/AddArea';

const App = () => {
  const [list, setList] = React.useState<Task[]>([
    {id: 1, name: 'Comprar o pão', done: false},
    {id: 2, name: 'Comprar o Bolo', done: false}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (  
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((task, index) => (
          <ListItem key={index} task={task} />
        ))}
      </C.Area>
    </C.Container>
  )
}


export default App;