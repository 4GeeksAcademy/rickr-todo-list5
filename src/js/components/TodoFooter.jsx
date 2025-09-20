
const TodoFooter = ({ todos }) => {

    return (
        <>
            <footer className="footer">
                {/* this will be a ternary to display how many items are left in the
                todo list in a grammatically correct manner. */}
                {todos.length !== 1 ? `${todos.length} items left.` : `${todos.length} item left.`}
            </footer>
        </>
    );
}

export default TodoFooter;
