import { useState } from "react";
// TodoInput should do the following:
// 1. We want the user to input a todo item in a text box
//  1a. We want to validate the input: If the textbox is blank and the user click submit, it
//          should throw an alert to input something.  Otherwise we should append the task to the array.
// 2. We want to control the input by connecting the input tag with the useState
// 3. We want to have a button that will perform some operation to append the todo
//      to an array.


const TodoInput = ({ todos, setTodos }) => {
    // we need to create 2 new useState to create the new todo objects, that we can then append to the todos array
    const [newTask, setNewTask] = useState("");
    const [counter, setCounter] = useState(0);

    // function addTask will create a new todo object with a counter and newTask states to append to the todos array
    const addTask = () => {
        console.log("Creating new todo object to append to the todos array: ", newTask);

        // create a new todo object
        let newTodoObject = {
            id: counter,
            title: newTask,
        }

        // append this newly create todo object to the todos array
        setTodos([...todos, newTodoObject]);

        // increment the counter
        setCounter(counter + 1);
    }

    // function checkTextBox will validate if the input text box has any user input.  If it does it will call 
    // another function to add the new Task, otherwise it will throw an alert to let the user know to input some text
    const checkTextBox = () => {
        let textBox = document.querySelector(".new-todo");
        if (textBox.value === "") {
            alert("Please add a task.");
        }
        else {
            addTask();
        }
    }

    // the return statement we need an input element (text box) to allow the user to enter a new todo
    // we need a button that will validate if there is text in the textbox
    return (
        <>
            <input 
                type="text"
                className="new-todo"
                placeholder="What needs to be done?"
                value={newTask}
                onChange={event => setNewTask(event.target.value)}
            />
            <button
                className="add-task"
                onClick={checkTextBox}
            >Add Task</button>
        </>
    );
}

export default TodoInput;
