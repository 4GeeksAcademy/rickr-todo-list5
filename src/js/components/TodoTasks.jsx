// TodoTasks is the body of the todo list app
import { deleteTask } from "./fetch";

const TodoTasks = ({todos, setTodos}) => {

    let renderTasks = todos.map(todo => {
        return (
            <li className="list-item" key={todo.id}>
                <label>{todo.label}</label>
                <button
                    className="delete-task"
                    onClick={() => {deleteTask(todo.id, setTodos)}}
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
