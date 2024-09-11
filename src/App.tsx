import { useState } from 'react';
import * as c from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import {AddArea} from './components/AddArea'; 

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false},
    { id: 2, name: 'Comprar mortadela', done: false},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);    
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <c.Container>
      <c.Area>
        <c.Header>Lista de Tarefas</c.Header>

        <AddArea  onEnter={handleAddTask} />

        {list.map((item, index) =>(
          <ListItem 
          key={index}
          item={item} 
          onChange={handleTaskChange}
          />
        ))}

      </c.Area>
    </c.Container>
  );
}

export default App;