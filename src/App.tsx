import { useState } from 'react';
import * as c from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false},
    { id: 2, name: 'Comprar mortadela', done: false},
  ])

  return (
    <c.Container>
      <c.Area>
        <c.Header>To Do List</c.Header>


        {list.map((item, index) =>(
          <ListItem key={index} item={item} />
        ))}

      </c.Area>
    </c.Container>
  );
}

export default App;