import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";

// create the useState(s) here to pass down to the children components

// think about what should be included in the todos array
// an array of objects (JSON)
// [
//  {
//      id: 1, 
//      title: Mow lawn,
//  },
//  {
//      id: 2, 
//      title: Wash car,
//  },
// ]


const TodoApp = () => {
    const [todos, setTodos] = useState([])

    return (
        <>
            <TodoInput />
            <TodoTasks />
            <TodoFooter />
        </>
    );
}

export default TodoApp;
