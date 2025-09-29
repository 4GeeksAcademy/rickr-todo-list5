
const CreateUser = ({ username, setUsername }) => {

    const addNewUser = () => {

        postNewUser(username);
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