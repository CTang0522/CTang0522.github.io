import './ToDo.css'
import ToDoCategory from './ToDoCategory'


export function ToDoItem(params) {
    return(
        <div className='toDoItem' id={params.id} onClick={params.onClick}>
            <ToDoCategory category={params.category}/>
            {params.name}
        </div>
    )
}

export default ToDoItem