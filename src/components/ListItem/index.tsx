import { useState } from 'react';
import * as c from './styles';
import { Item } from '../../types/item'

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <c.Container done={isChecked}>
            <input 
                type='checkbox'
                checked={isChecked}
                 onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </c.Container>
    );
}