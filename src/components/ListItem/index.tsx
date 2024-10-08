import * as c from './styles';
import { Item } from '../../types/item'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {
    return (
        <c.Container done={item.done}>
            <input 
                type='checkbox'
                checked={item.done}
                 onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
        </c.Container>
    );
}