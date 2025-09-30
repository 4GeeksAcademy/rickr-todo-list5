import { useState } from "react";
import { postNewUser } from "./fetch";

const CreateUser = ({ username, setUsername }) => {
    const [newUserResult, setNewUserResult] = useState(true);

    const addNewUser = () => {
        postNewUser(username, setNewUserResult);
        setUsername("");
    }

    const checkTextBox = () => {
        let textBox = document.querySelector(".new-user");
        if (textBox.value === "") {
            alert("Please add a new user.");
        }
        else {
            addNewUser();
        }
    }

    return (
        <>
            {
                (!newUserResult)
                ?
                (<p className="text-danger bg-dark">User already exists!</p>)
                :
                ("")
            }
            <input 
                type="text"
                className="new-user"
                placeholder="Enter new username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <button
                className="add-task"
                onClick={checkTextBox}
            >Add New User</button>
        </>
    );
}

export default CreateUser;