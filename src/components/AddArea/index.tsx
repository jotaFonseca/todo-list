import * as c from './styles'

export const AddArea = () => {
    return (
        <c.Container>
            <div className='image'>➕</div>
                <input 
                type="text"
                placeholder='Adicione uma tarefa'
            />
        </c.Container>
    );
}