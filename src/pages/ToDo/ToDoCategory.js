

export function ToDoCategory(params) {
    return(<div className={'toDoCategory toDo'+params.category}>{params.category}</div>)
}

export default ToDoCategory