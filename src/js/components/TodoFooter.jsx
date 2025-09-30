
const TodoFooter = ({ todos }) => {

    return (
        <>
            <footer className="footer d-flex justify-content-evenly">
                {/* this will be a ternary to display how many items are left in the
                todo list in a grammatically correct manner. */}
                {todos.length !== 1 ? `${todos.length} items left.` : `${todos.length} item left.`}
                <button>Clear all tasks!</button>
            </footer>

        </>
    );
}

export default TodoFooter;
