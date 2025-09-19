// TodoTasks is the body of the todo list app


const TodoTasks = ({todos, setTodos}) => {

    // create a function called deleteTask() that will identify the todo item by id number
    // and use the .filter() function to create a new array WITHOUT that todo item and display
    // on the screen

    let renderTasks = todos.map(todo => {
        return (
            <li className="list-item" key={todo.id}>
                <label>{todo.title}</label>
                {/* create a button that will onClick a deleteTask function to remove the todo item */}
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
