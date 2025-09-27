import { useState, useEffect } from "react";

import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";

import { getData } from "./fetch";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getData(setTodos);
    }, [])

    return (
        <>  
            <div className="mt-5">
                <TodoInput todos={todos} setTodos={setTodos}/>
                <TodoTasks todos={todos} setTodos={setTodos} />
                <TodoFooter todos={todos} />
            </div>
        </>
    );
}

export default TodoApp;
