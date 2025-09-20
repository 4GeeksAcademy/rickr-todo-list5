// TodoTasks is the body of the todo list app

const TodoTasks = ({todos, setTodos}) => {

    // create a function called deleteTask() that will identify the todo item by id number
    // and use the .filter() function to create a new array WITHOUT that todo item and display
    // on the screen
    const deleteTask = (todoId) => {
        let updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    let renderTasks = todos.map(todo => {
        return (
            <li className="list-item" key={todo.id}>
                <label>{todo.title}</label>
                <button
                    className="delete-task"
                    onClick={() => {deleteTask(todo.id)}}
                >X</button>
            </li>
        );
    })

    return (
        <>
            <div className="main">
                <ul className="todo-list">
                    {/* I want to render the todo list items if there are 1 or more,
                    otherwise I want to display "No tasks. Add a task" on the browser." */}
                    {/* use a ternary that will check the length of the todo list array */}
                    {todos.length !== 0 ? renderTasks : "No task. Add a task."}
                </ul>
            </div>
        </>
    );
}

export default TodoTasks;
