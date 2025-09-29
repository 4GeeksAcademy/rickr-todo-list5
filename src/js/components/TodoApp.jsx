import { useState, useEffect } from "react";

import CreateUser from "./CreateUser"
import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";

import { getData } from "./fetch";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [username, setUsername] = useState("");

    // inital fetch is being done here to render our todos in API Playground
    useEffect(() => {
        getData(setTodos);
    }, [])

    return (
        <>  
            <div className="mt-5">
                <h1>todos</h1>
                <div>
                    <CreateUser username={username} setUsername={setUsername} />
                </div>
                <div>
                    <TodoInput todos={todos} setTodos={setTodos}/>
                    <TodoTasks todos={todos} setTodos={setTodos} />
                    <TodoFooter todos={todos} />
                </div>
            </div>
        </>
    );
}

export default TodoApp;
